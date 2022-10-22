import { FC, useState } from 'react'
import { Box, Center, Container, Spinner } from '@chakra-ui/react'

const MapIndex: FC = () => {
  const [loading, setLoading] = useState(true)

  function hideSpinner() {
    setLoading(false)
  }

  return (
    <>
      <Container maxW={{ md: '80%', sm: '90%' }} height={'80vh'}>
        <Box textAlign={'center'}>
          <h1>ねこにげ(仮)マップ</h1>
        </Box>
        <Center height={'100%'} display={loading ? 'flex' : 'none'}>
          <Spinner />
        </Center>
        <Center height={'100%'} display={loading ? 'none' : 'flex'}>
          <iframe
            onLoad={hideSpinner}
            src="https://www.google.com/maps/d/embed?mid=1pO9OONWCtfgm9GFemvfmA6xwg-PQPgg&ehbc=2E312F"
            width="80%"
            height="100%"
          ></iframe>
        </Center>
      </Container>
    </>
  )
}

export default MapIndex
