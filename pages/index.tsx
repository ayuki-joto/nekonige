import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading,
  Stack
} from '@chakra-ui/react'
import girl from 'public/images/nekonige.png'
import CustomHeading from 'component/Heading/CustomHeading'

const Home: NextPage = () => {
  return (
    <>
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
              <Heading
                as={'h1'}
                fontSize={'6rem'}
                letterSpacing={'1rem'}
                lineHeight={'180%'}
              >
                ねこにげ
              </Heading>
              <Heading as={'h2'} size={'xl'} lineHeight={'180%'}>
                いざというとき”うちの子”と一緒に
              </Heading>
              <Heading as={'h2'} size={'xl'}>
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
      >
        <Stack
          display={'flex'}
          justify={'center'}
          textAlign={'center'}
          height={'100%'}
          backgroundColor={'rgba(255, 255, 255, 0.5)'}
        >
          <Box color={'#06377B'} fontSize={'4rem'} mb={5}>
            ペットと一緒に避難できる避難所
          </Box>
          <Box fontSize={'2rem'} pb={16}>
            わたしの家から一番近いのはどこ？
            <br />
            ペット同伴者専用の避難所や <br />
            ペットと一緒に避難することを認めている避難所をまとめました
            <br />
          </Box>
          <Center onClick={() => location.assign('/map')}>
            <Button
              size="lg"
              height="4.5rem"
              width="20%"
              borderRadius={'2rem'}
              border={'3px solid white'}
              backgroundColor={'#E8DD5B'}
              _hover={{ backgroundColor: '#EAE287' }}
            >
              周辺の避難所を検索する
            </Button>
          </Center>
        </Stack>
      </Box>
      <Box bgColor={'#FDFAF0'} pt={'5rem'}>
        <CustomHeading imageSize={'54'}>
          <Box fontSize={'3rem'}>最新情報 </Box>
        </CustomHeading>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={6}
          alignSelf={'center'}
          alignContent={'center'}
          alignItems={'center'}
        ></Grid>
      </Box>
    </>
  )
}

export default Home
