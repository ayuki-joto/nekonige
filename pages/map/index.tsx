import { FC, useState } from 'react'
import {
  Box,
  Center,
  Container,
  Spinner,
  useBreakpointValue
} from '@chakra-ui/react'
import Header from 'component/Header'
import CustomHeading from 'component/Heading/CustomHeading'

const MapIndex: FC = () => {
  const [loading, setLoading] = useState(true)

  function hideSpinner() {
    setLoading(false)
  }

  return (
    <>
      <Header />
      <Box bgColor={'#FDFAF0'} height={'100vh'} width={'100%'}>
        <Container maxW={{ md: '80%', sm: '100%' }} height={'80vh'} pt={10}>
          <Box pb={10}>
            <CustomHeading
              imageSize={useBreakpointValue({ base: '32', md: '54' })}
            >
              <Box fontSize={{ md: '3rem', base: '1rem' }}>
                周辺の避難所を検索する
              </Box>
            </CustomHeading>
          </Box>
          <Center height={'100%'} display={loading ? 'flex' : 'none'}>
            <Spinner />
          </Center>
          <Center height={'100%'} display={loading ? 'none' : 'flex'}>
            <iframe
              onLoad={hideSpinner}
              src="https://www.google.com/maps/d/embed?mid=1pO9OONWCtfgm9GFemvfmA6xwg-PQPgg&ehbc=2E312F&z=12"
              width="80%"
              height="100%"
            ></iframe>
          </Center>
        </Container>
      </Box>
    </>
  )
}

export default MapIndex
