import { FC } from 'react'
import Header from 'component/Header'
import { Box, Center, Container, useBreakpointValue } from '@chakra-ui/react'
import CustomHeading from 'component/Heading/CustomHeading'

const Index: FC = () => {
  return (
    <>
      <Header />
      <Box bgColor={'#FDFAF0'} pt={10}>
        <Container maxW={{ md: '80%', sm: '90%' }} pt={10}>
          <Box pb={10}>
            <CustomHeading
              imageSize={useBreakpointValue({ base: '32', md: '54' })}
            >
              <Box fontSize={{ md: '3rem', base: '1rem' }}>
                避難所を追加する
              </Box>
            </CustomHeading>
          </Box>
          <Center>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScBsCfKNz0RcBCi2eKBbZb2_3wTMlx4gSd82I9yOLXPltiHxA/viewform?embedded=true"
              width='600'
              height='3500'
            >
              読み込んでいます…
            </iframe>
          </Center>
        </Container>
      </Box>
    </>
  )
}

export default Index
