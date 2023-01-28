import type { GetStaticProps, GetStaticPropsResult, NextPage } from 'next'
import Image from 'next/image'
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import girl from 'public/images/nekonige.png'
import CustomHeading from 'component/Heading/CustomHeading'
import topIcon from 'public/images/logo_top.png'
import checkSeat from 'public/images/checkseat_top.jpg'
import checkSeatPrint from 'public/images/checkseat.jpg'
import styles from './top.module.scss'
import { Article, ArticleList } from 'component/Notion/articleList'
import { getArticleList } from 'component/Notion/notion'

type Props = {
  articles: Article[]
}

const Home: NextPage<Props> = (props: Props) => {
  return (
    <>
      <Box className={styles.no_print}>
        <Box height={'100vh'} width={'100vw'} bgColor={'green'} pt={'5vh'}>
          <Container
            maxW={'90vw'}
            border={'5px solid white'}
            borderRadius={'2rem'}
            height={'90vh'}
            position={'relative'}
          >
            <Grid
              templateColumns={'repeat(2, 1fr)'}
              height={'100%'}
              position={'relative'}
            >
              <GridItem colSpan={1} position={'relative'} height={'100%'}>
                <Box>
                  <Image
                    src={girl}
                    alt={'girl'}
                    layout={'fill'}
                    objectFit={'contain'}
                  />
                </Box>
              </GridItem>
              <GridItem colSpan={1} color={'white'} alignSelf={'center'}>
                <Box
                  position={'relative'}
                  height={{ md: '300px', base: '150px' }}
                  width={'80%'}
                >
                  <Image
                    src={topIcon}
                    alt={'icon'}
                    objectFit={'contain'}
                    layout={'fill'}
                  />
                </Box>
                <Heading
                  as={'h2'}
                  size={{ md: 'xl', base: 'md' }}
                  lineHeight={'180%'}
                >
                  いざというとき”うちの子”と一緒に
                </Heading>
                <Heading as={'h2'} size={{ md: 'xl', base: 'md' }}>
                  安心してにげられる場所探しませんか
                </Heading>
              </GridItem>
            </Grid>
          </Container>
        </Box>
        <Box
          height={'80vh'}
          width={'100vw'}
          backgroundImage={'/images/cat.jpg'}
          backgroundPosition={'center'}
          backgroundSize={'auto'}
        >
          <Stack
            display={'flex'}
            justify={'center'}
            textAlign={'center'}
            height={'100%'}
            backgroundColor={'rgba(255, 255, 255, 0.6)'}
          >
            <Box
              color={'#06377B'}
              fontSize={{ md: '4rem', base: '1rem' }}
              mb={5}
            >
              ペットと一緒に避難できる避難所
            </Box>
            <Box fontSize={{ md: '2rem', base: '1rem' }}>
              わたしの家から一番近いのはどこ？
              <br />
              ペット同伴者専用の避難所や <br />
              ペットと一緒に避難することを認めている避難所をまとめました
              <br />
            </Box>
            <Box fontSize={{ md: '1rem', base: '0.5rem' }} pb={16}>
              ※避難所リストは有志で更新しているため、最新の情報ではない可能性があります。
              <br />
              実際の避難時ではなく避難の準備にご使用ください。
              <br />
              個別の正確な情報が必要な場合は各自治体にお問い合わせください。
            </Box>

            <Center>
              <Grid
                templateColumns="repeat(2, 1fr)"
                justifyItems={'center'}
                gap={10}
              >
                <GridItem colSpan={{ md: 1, base: 2 }}>
                  <Button
                    size="lg"
                    height="4.5rem"
                    minW={'300px'}
                    borderRadius={'2rem'}
                    border={'3px solid white'}
                    backgroundColor={'#E8DD5B'}
                    _hover={{ backgroundColor: '#EAE287' }}
                    onClick={() => location.assign('/map')}
                  >
                    周辺の避難所を検索する
                  </Button>
                </GridItem>
                <GridItem colSpan={{ md: 1, base: 2 }}>
                  <Button
                    size="lg"
                    height="4.5rem"
                    minW={'300px'}
                    borderRadius={'2rem'}
                    border={'3px solid white'}
                    backgroundColor={'#E8DD5B'}
                    _hover={{ backgroundColor: '#EAE287' }}
                    onClick={() => location.assign('/form')}
                  >
                    避難所を追加する
                  </Button>
                </GridItem>
              </Grid>
            </Center>
          </Stack>
        </Box>
        <Box bgColor={'#FDFAF0'} pt={'5rem'} pb={{ md: 10, base: 0 }}>
          {/*<Container maxW={'8xl'} mb={20}>*/}
          {/*  <CustomHeading imageSize={'54'}>*/}
          {/*    <Box fontSize={'3rem'}>ペット避難のニュース</Box>*/}
          {/*  </CustomHeading>*/}
          {/*  <Grid*/}
          {/*    templateColumns="repeat(3, 1fr)"*/}
          {/*    gap={6}*/}
          {/*    textAlign={'center'}*/}
          {/*    mb={5}*/}
          {/*    mt={10}*/}
          {/*  >*/}
          {/*    <Card*/}
          {/*      src={'/images/dummy.png'}*/}
          {/*      width={1920}*/}
          {/*      height={1080}*/}
          {/*      alt={'texttexttexttexttexttexttexttexttexttexttext'}*/}
          {/*    />*/}
          {/*    <Card*/}
          {/*      src={'/images/dummy.png'}*/}
          {/*      width={1920}*/}
          {/*      height={1080}*/}
          {/*      alt={'texttexttexttexttexttexttexttexttexttexttext'}*/}
          {/*    ></Card>*/}
          {/*    <Card*/}
          {/*      src={'/images/dummy.png'}*/}
          {/*      width={1920}*/}
          {/*      height={1080}*/}
          {/*      alt={'texttexttexttexttexttexttexttexttexttexttext'}*/}
          {/*    ></Card>*/}
          {/*  </Grid>*/}
          {/*  <Box textAlign={'right'}>*/}
          {/*    <Button*/}
          {/*      onClick={() => location.assign('/news')}*/}
          {/*      backgroundColor={'#FDFAF0'}*/}
          {/*      _hover={{ backgroundColor: '#FDFAF0' }}*/}
          {/*    >*/}
          {/*      More {'>>'}*/}
          {/*    </Button>*/}
          {/*  </Box>*/}
          {/*</Container>*/}
          <Container maxW={'8xl'} mb={{ md: 20, base: 0 }}>
            <CustomHeading
              imageSize={useBreakpointValue({ base: '32', md: '54' })}
            >
              <Box fontSize={{ md: '3rem', base: '1rem' }}>
                避難の準備とポイント
              </Box>
            </CustomHeading>
            <ArticleList articles={props.articles} limit={3} />

            <Box textAlign={'right'}>
              <Button
                onClick={() => location.assign('/articles')}
                backgroundColor={'#FDFAF0'}
                _hover={{ backgroundColor: '#FDFAF0' }}
              >
                More {'>>'}
              </Button>
            </Box>
          </Container>
        </Box>
        <Box w={'100%'} position={'relative'} pb={{ md: 0, base: 34 }}>
          <Image src={checkSeat} alt={'checkseat'} layout={'responsive'} />
          <Center onClick={() => window.print()}>
            <Button
              size="lg"
              height="4.5rem"
              width={'300px'}
              borderRadius={'2rem'}
              border={'3px solid white'}
              backgroundColor={'green'}
              color={'white'}
              _hover={{ backgroundColor: 'green' }}
            >
              印刷する
            </Button>
          </Center>
        </Box>
      </Box>
      <Box className={styles.print} height={'100vh'} width={'100vw'}>
        <Image
          src={checkSeatPrint}
          alt={'checkSheat'}
          layout={'fill'}
          objectFit={'contain'}
          priority
        />
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

export default Home
