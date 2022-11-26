import { FC } from 'react'
import Header from 'component/Header'
import CustomHeading from 'component/Heading/CustomHeading'
import { Box, Button, Container, Grid } from '@chakra-ui/react'
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
            src={'/images/dummy.png'}
            width={1920}
            height={1080}
            alt={'texttexttexttexttexttexttexttexttexttexttext'}
          ></Card>
          <Card
            src={'/images/dummy.png'}
            width={1920}
            height={1080}
            alt={'texttexttexttexttexttexttexttexttexttexttext'}
          ></Card>
        </Grid>
      </Container>
    </>
  )
}

export default ArticleIndex
