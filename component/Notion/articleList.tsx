import { FC } from 'react'
import { Grid } from '@chakra-ui/react'
import Card from 'component/Card'

/**
 * 記事
 */
export type Article = {
  /**
   * タイトル
   */
  title: string
  /**
   * サムネイルURL
   */
  thumbnail: string
  /**
   * ID
   */
  id: string
}

/**
 * 記事一覧
 * @param param0
 * @returns
 */
export const ArticleList: FC<{
  /**
   * 記事一覧
   */
  articles: Article[]
  /**
   * 表示数上限
   */
  limit?: number
}> = ({ articles, limit }) => {
  return (
    <>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        textAlign={'center'}
        mt={20}
      >
        {articles.slice(0, limit).map((article, i: number) => (
          <Card
            src={article.thumbnail}
            alt={article.title}
            link={`articles/${article.id}`}
            key={i}
          />
        ))}
      </Grid>
    </>
  )
}
