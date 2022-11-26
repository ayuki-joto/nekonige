import { FC, useState } from 'react'
import {
  Box,
  Button,
  Center,
  Container,
  Spinner,
  useBreakpointValue
} from '@chakra-ui/react'
import Header from 'component/Header'
import CustomHeading from 'component/Heading/CustomHeading'

const MapIndex: FC = () => {
  const [loading, setLoading] = useState(true)
  const [keyValue, setKeyValue] = useState(0)
  const [mapURL, setMapURL] = useState(
    'https://www.google.com/maps/d/embed?mid=1pO9OONWCtfgm9GFemvfmA6xwg-PQPgg&ehbc=2E312F&z=12&ll=35.68257185072119, 139.76794551852083'
  )

  function hideSpinner() {
    setLoading(false)
  }

  return (
    <>
      <Header />
      <Box bgColor={'#FDFAF0'} height={'100vh'} width={'100%'} pt={10}>
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

          <Center gap={5} mb={10}>
            <Button
              onClick={() => {
                setMapURL(
                  'https://www.google.com/maps/d/embed?mid=1pO9OONWCtfgm9GFemvfmA6xwg-PQPgg&ehbc=2E312F&z=12&ll=35.68257185072119, 139.76794551852083'
                )
                setLoading(true)
                setKeyValue(keyValue + 1)
              }}
            >
              東京
            </Button>
            <Button
              onClick={() => {
                setMapURL(
                  'https://www.google.com/maps/d/embed?mid=1pO9OONWCtfgm9GFemvfmA6xwg-PQPgg&ehbc=2E312F&z=10&ll=34.71638067319976, 133.92238208564146'
                )
                setLoading(true)
                setKeyValue(keyValue + 1)
              }}
            >
              岡山
            </Button>
            <Button
              onClick={() => {
                setMapURL(
                  'https://www.google.com/maps/d/embed?mid=1pO9OONWCtfgm9GFemvfmA6xwg-PQPgg&ehbc=2E312F&z=12&ll=33.59252050473188, 130.4027651776077'
                )
                setLoading(true)
                setKeyValue(keyValue + 1)
              }}
            >
              福岡
            </Button>
          </Center>

          <Center height={'100%'} display={loading ? 'flex' : 'none'}>
            <Spinner />
          </Center>
          <Center height={'100%'} display={loading ? 'none' : 'flex'}>
            <iframe
              id={'iframe'}
              key={keyValue}
              onLoad={hideSpinner}
              src={mapURL}
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
