import { Fragment } from 'react'
import { Text } from 'component/Notion/text'
import { getBlocks, getDatabase, getPage } from '../../component/Notion/notion'
import Header from 'component/Header'

import scss from 'styles/point.module.scss'

const renderBlock = (block: any) => {
  const { type, id } = block
  const value = block[type]

  switch (type) {
    case 'paragraph':
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      )
  }
}

export default function Post({ page, blocks }: any) {
  if (!page || !blocks) {
    return <div />
  }
  console.log(page.properties)
  return (
    <div style={{ backgroundColor: '#FDFAF0' }}>
      <Header />
      <div className={scss.inner}>
        <div className={scss.wrapper}>
          <article>
            <h1>
              <Text text={page.properties['名前'].title} />
            </h1>
            <section>
              {blocks.map((block: any) => (
                <Fragment key={block.id}>{renderBlock(block)}</Fragment>
              ))}
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

export const getStaticProps = async (context: any) => {
  const { id } = context.params
  const page = await getPage(id)
  const blocks = await getBlocks(id)

  // const childBlocks = await Promise.all(
  //   blocks
  //     .filter((block) => block.has_children)
  //     .map(async (block) => {
  //       return {
  //         id: block.id,
  //         children: await getBlocks(block.id),
  //       };
  //     })
  // );
  // const blocksWithChildren = blocks.map((block) => {
  //   if (block.has_children && !block[block.type].children) {
  //     block[block.type]["children"] = childBlocks.find(
  //       (x) => x.id === block.id
  //     )?.children;
  //   }
  //   return block;
  // });

  return {
    props: {
      page,
      blocks: blocks //WithChildren,
    },
    revalidate: 1
  }
}
