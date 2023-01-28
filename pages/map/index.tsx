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
      <Box bgColor={'#FDFAF0'} width={'100%'} height={'125vh'} pt={10}>
        <Container maxW={'100%'} height={'80vh'} pt={10} bgColor={'#FDFAF0'}>
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
          <Box pb={5} pt={5} bgColor={'#FDFAF0'} paddingX={20} width={'100%'}>
            ※避難所リストは有志で更新しているため、最新の情報ではない可能性があります。
            <br />
            実際の避難時ではなく避難の準備にご使用ください。
            <br />
            被災時に避難所が開設されたか、災害が起きてから同行避難できるか調べたい場合など、今すぐ正確な情報が必要な場合は各自治体のHPを確認するか、直接お問い合わせください。
          </Box>
          <Box bgColor={'#FDFAF0'} paddingX={20} marginX={0} width={'100%'}>
            このサービスは、以下の著作物を改変して利用しています。
            <br />
            東京都防災マップ 避難所・避難場所一覧データ、東京都
            <br />
            クリエイティブ・コモンズ・ライセンス
            表示4.0国際（https://creativecommons.org/licenses/by/4.0/deed.ja）
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default MapIndex
