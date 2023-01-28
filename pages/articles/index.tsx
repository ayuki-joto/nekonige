import Header from 'component/Header'
import CustomHeading from 'component/Heading/CustomHeading'
import { Box, Container, useBreakpointValue } from '@chakra-ui/react'
import { Article, ArticleList } from 'component/Notion/articleList'
import { GetStaticProps, GetStaticPropsResult } from 'next'
import { getArticleList } from 'component/Notion/notion'

type Props = {
  articles: Article[]
}

const ArticleIndex = (props: Props) => {
  return (
    <>
      <Header />
      <Box bgColor={'#FDFAF0'} height={'100vh'} width={'100%'} pt={10}>
        <Container maxW={'8xl'} mb={20} pt={10}>
          <CustomHeading
            imageSize={useBreakpointValue({ base: '32', md: '54' })}
          >
            <Box fontSize={{ md: '3rem', base: '1rem' }}>
              避難の準備とポイント
            </Box>
          </CustomHeading>
          <ArticleList articles={props.articles} />
        </Container>
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (): Promise<
  GetStaticPropsResult<Props>
> => {
  const articles = await getArticleList()

  return {
    props: {
      articles: articles
    },
    revalidate: 300
  }
}

export default ArticleIndex
