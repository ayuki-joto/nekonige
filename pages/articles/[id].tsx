import { Fragment } from 'react'
import { Text } from 'component/Notion/text'
import {
  getBlocks,
  getDatabase,
  getPage,
  PAGE_TITLE_KEY
} from 'component/Notion/notion'
import Header from 'component/Header'
import Image from 'next/image'

import scss from 'styles/point.module.scss'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { ParsedUrlQuery } from 'querystring'
import {
  GetPageResponse,
  BlockObjectResponse,
  PartialBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints.d'
import { isFullBlock, isFullPage } from '@notionhq/client'

type Props = {
  page: GetPageResponse
  blocks: BlockObjectResponseMergedChildren[]
}

interface Params extends ParsedUrlQuery {
  id: string
}

function isBlockObjectResponseArray(
  arr: BlockObjectResponse[] | PartialBlockObjectResponse[]
): arr is BlockObjectResponse[] {
  return arr.every((block) => isFullBlock(block))
}

/**
 * ブロックレスポンスに子ブロックの内容をマージしたもの
 */
type BlockObjectResponseMergedChildren = BlockObjectResponse & {
  /**
   * 子ブロック
   */
  children: BlockObjectResponse[]
}

/**
 *
 * @param block Notion APIのブロックレスポンス
 * @returns
 */
const renderBlock = (block: BlockObjectResponseMergedChildren) => {
  const { type } = block

  switch (type) {
    case 'paragraph':
      const paragraph = block[type]
      return (
        <p>
          <Text text={paragraph.rich_text} />
        </p>
      )

    case 'bulleted_list_item':
      const listText = block[type]
      return (
        <li>
          <Text text={listText.rich_text} />
        </li>
      )

    case 'image':
      const value = block[type]
      if (!('external' in value) && !('file' in value)) {
        return
      }

      const notionImageUrl =
        value.type === 'external' ? value.external.url : value.file.url
      const caption = block[type].caption.length
        ? block[type].caption[0].plain_text
        : ''
      return (
        <div style={{ textAlign: 'center' }}>
          <Image
            src={notionImageUrl}
            alt={caption}
            height={400}
            width={400}
            objectFit="contain"
          />
          {caption && <figcaption>{caption}</figcaption>}
        </div>
      )
  }
}

export default function Post(props: Props) {
  const { page, blocks } = props

  if (
    !page ||
    !isFullPage(page) ||
    !('title' in page.properties[PAGE_TITLE_KEY])
  ) {
    return
  }

  return (
    <div style={{ backgroundColor: '#FDFAF0' }}>
      <Header />
      <div className={scss.inner}>
        <div className={scss.wrapper}>
          <article>
            <h1>
              <Text text={page.properties[PAGE_TITLE_KEY].title} />
            </h1>
            <section>
              {blocks.map((block) => {
                return <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              })}
            </section>
          </article>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const databaseId = process.env.NOTION_DATABASE_ID
  if (!databaseId) {
    return
  }
  const database = await getDatabase(databaseId)
  return {
    paths: database.map((page) => ({ params: { id: page.id } })),
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params
}): Promise<GetStaticPropsResult<Props>> => {
  const id = params!.id
  const page = await getPage(id)
  const blocks = await getBlocks(id)

  // 子ブロックを取得
  let childBlocks = await Promise.all(
    blocks
      .filter((block) => isFullBlock(block) && block.has_children)
      .map(async (block) => {
        const childBlocks = await getBlocks(block.id)

        if (isBlockObjectResponseArray(childBlocks)) {
          return {
            id: block.id,
            children: childBlocks
          }
        }
      })
      .filter(
        (
          e
        ): e is Exclude<
          Promise<{ id: string; children: BlockObjectResponse[] }>,
          undefined
        > => e !== undefined
      )
  )

  // 子ブロックの内容をマージ
  const blocksWithChildren = blocks
    .map((block) => {
      if (!isFullBlock(block)) {
        return
      }

      let NewBlock: BlockObjectResponseMergedChildren = Object.assign(block, {
        children: []
      })
      const childBlock = childBlocks.find((x) => x.id === block.id)
      if (
        childBlock !== undefined &&
        isBlockObjectResponseArray(childBlock.children)
      ) {
        NewBlock['children'] = childBlock.children
      }
      return NewBlock
    })
    .filter(
      (e): e is Exclude<BlockObjectResponseMergedChildren, undefined> =>
        e !== undefined
    )

  return {
    props: {
      page,
      blocks: blocksWithChildren
    },
    revalidate: 1
  }
}
