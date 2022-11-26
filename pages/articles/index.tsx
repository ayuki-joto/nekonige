import { FC } from 'react'
import Header from 'component/Header'
import CustomHeading from 'component/Heading/CustomHeading'
import { Box, Container, Grid } from '@chakra-ui/react'
import Card from 'component/Card'

const ArticleIndex: FC = () => {
  return (
    <>
      <Header />
      <Container maxW={'8xl'} mb={20} mt={20}>
        <CustomHeading imageSize={'54'}>
          <Box fontSize={'3rem'}>避難の準備とポイント</Box>
        </CustomHeading>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          textAlign={'center'}
          mt={20}
        >
          <Card
            src={'/images/cat.jpg'}
            width={1920}
            height={1080}
            alt={'飼い主の命にもかかわる　ペットの避難対策'}
            link={'/articles/1'}
          />
          <Card
            src={'/images/hinanjo.jpg'}
            width={1920}
            height={1080}
            alt={'気をつけたい　避難所でのトラブル'}
            link={'/articles/2'}
          ></Card>
          <Card
            src={'/images/kuro.png'}
            width={1920}
            height={1080}
            alt={'ペットとは同行避難が原則'}
            link={'/articles/3'}
          ></Card>
        </Grid>
      </Container>
    </>
  )
}

export default ArticleIndex
