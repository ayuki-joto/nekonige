import type { NextPage } from 'next'
import Image from 'next/image'
import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  Heading
} from '@chakra-ui/react'
import girl from 'public/images/nekonige.png'

const Home: NextPage = () => {
  return (
    <>
      <Box height={'100vh'} width={'100vw'} bgColor={'green'} pt={'6rem'}>
        <Container
          maxW={{ md: '6xl' }}
          border={'5px solid white'}
          borderRadius={'2rem'}
          height={'60vh'}
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
                ペットを連れて
              </Heading>
              <Heading as={'h2'} size={'xl'}>
                にげられる場所
              </Heading>
            </GridItem>
          </Grid>
          <Center mt={10} onClick={() => location.assign('/map')}>
            <Button size="lg" height="4rem" width="20%" borderRadius={'2rem'}>
              検索する
            </Button>
          </Center>
        </Container>
      </Box>
    </>
  )
}

export default Home
