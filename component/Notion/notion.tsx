import { Client } from '@notionhq/client'
import { Article } from './articleList'

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

/**
 * ページのタイトルを示すキー
 */
export const PAGE_TITLE_KEY = '名前'
/**
 * サムネイルを示すキー
 */
const PAGE_THUMNAIL_KEY = 'thumbnail'
/**
 * Notionの画像取得APIパス
 */
export const API_NOTION_IMAGE = '/api/notionImage?url='

/**
 * データベースを取得
 * @param databaseId データベースID
 */
export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'publish',
      checkbox: {
        equals: true
      }
    },
    // Notionでの表示順は取得不可のため、記事作成順
    sorts: [
      {
        timestamp: 'created_time',
        direction: 'descending'
      }
    ]
  })
  return response.results
}

/**
 * ページを取得
 * @param pageId ページID
 * @returns ページ内容
 */
export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId })
  return response
}

/**
 * ブロック取得
 * @param blockId ブロックID
 * @returns ブロックの内容
 */
export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50
  })
  return response.results
}

/**
 * 記事一覧を取得する
 * @returns
 */
export const getArticleList = async (): Promise<Article[]> => {
  const databaseId = process.env.NOTION_DATABASE_ID
  if (!databaseId) {
    return []
  }

  const database = await getDatabase(databaseId)
  const articles = database
    .map((page) => {
      if (
        !page ||
        !('properties' in page) || // isFullPageでは判定不可
        !('title' in page.properties[PAGE_TITLE_KEY])
      ) {
        return
      }

      let article: Article = {
        title: page.properties[PAGE_TITLE_KEY].title
          .map((item) => item.plain_text)
          .join(''),
        id: page.id,
        thumbnail: ''
      }

      if (
        'files' !== page.properties[PAGE_THUMNAIL_KEY].type ||
        0 === page.properties[PAGE_THUMNAIL_KEY].files.length ||
        'file' !== page.properties[PAGE_THUMNAIL_KEY].files[0].type
      ) {
        return article
      }

      const notionImageUrl =
        page.properties[PAGE_THUMNAIL_KEY].files[0].file.url
      article.thumbnail = API_NOTION_IMAGE + encodeURIComponent(notionImageUrl)

      return article
    })
    .filter((e): e is Exclude<Article, undefined> => e !== undefined)

  return articles
}
