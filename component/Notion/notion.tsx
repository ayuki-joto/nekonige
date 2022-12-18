import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

/**
 * データベースを取得
 * @param databaseId データベースID
 */
export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
    // TODO: Publishedのみにフィルター
  });
  return response.results;
};

/**
 * ページを取得
 * @param pageId ページID
 * @returns ページ内容
 */
export const getPage = async (pageId: string) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

/**
 * ブロック取得
 * @param blockId ブロックID
 * @returns ブロックの内容
 */
export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};
