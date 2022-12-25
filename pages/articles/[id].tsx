import { Fragment } from 'react'
import { Text } from 'component/Notion/text'
import { getBlocks, getDatabase, getPage } from '../../component/Notion/notion'
import Header from 'component/Header'
import Image from 'next/image'

import scss from 'styles/point.module.scss'
import {
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult
} from 'next'
import { ParsedUrlQuery } from 'querystring'
import {
  GetPageResponse,
  PageObjectResponse,
  BlockObjectResponse,
  PartialBlockObjectResponse,
  ParagraphBlockObjectResponse
} from '@notionhq/client/build/src/api-endpoints.d'

type Props = {
  page: GetPageResponse
  blocks: (BlockObjectResponseMergedChildren | PartialBlockObjectResponse)[]
}

interface Params extends ParsedUrlQuery {
  id: string
}

function isBlockObjectResponse(
  block: BlockObjectResponse | PartialBlockObjectResponse
): block is BlockObjectResponse {
  if (!('has_children' in block)) {
    return false
  }
  return true
}

function isPageObjectResponse(page: any): page is PageObjectResponse {
  if (!('properties' in page)) {
    return false
  }
  return true
}

/**
 * ブロックレスポンスに子ブロックの内容をマージしたもの
 */
type BlockObjectResponseMergedChildren = BlockObjectResponse & {
  /**
   * 子ブロック
   */
  children: (BlockObjectResponse | PartialBlockObjectResponse)[] | undefined
}

/**
 * ページプロパティのタイトルを示すキー
 */
const PAGE_TITLE_KEY = '名前'

/**
 *
 * @param block Notion APIのブロックレスポンス
 * @returns
 */
const renderBlock = (block: BlockObjectResponseMergedChildren) => {
  const { type, id } = block

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

      const src =
        value.type === 'external' ? value.external.url : value.file.url
      const caption = block[type].caption.length
        ? block[type].caption[0].plain_text
        : ''
      return (
        <div>
          <Image
            src={src}
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
    !blocks ||
    !isPageObjectResponse(page) ||
    // !('title' in page.properties) ||
    !('title' in page.properties[PAGE_TITLE_KEY])
  ) {
    return <div></div>
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
                if (!('has_children' in block)) {
                  return
                }
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
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => isBlockObjectResponse(block) && block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id)
        }
      })
  )

  // 子ブロックの内容をマージ
  const blocksWithChildren = blocks.map((block) => {
    if (!isBlockObjectResponse(block)) {
      return block
    }

    let NewBlock: BlockObjectResponseMergedChildren = Object.assign(block, {
      children: []
    })
    if (isBlockObjectResponse(block) && block.has_children) {
      NewBlock['children'] = childBlocks.find(
        (x) => x.id === block.id
      )?.children
    }
    return NewBlock
  })

  return {
    props: {
      page,
      blocks: blocksWithChildren
    },
    revalidate: 1
  }
}
