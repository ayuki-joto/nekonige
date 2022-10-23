import { FC, useEffect, useState } from 'react'
import {
  Flex,
  Box,
  Stack,
  Spacer,
  useDisclosure,
  IconButton,
  Link,
  Collapse
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import styles from './Header.module.scss'
import { useRouter } from 'next/router'
import MobileLinkItem from 'component/Link/MobileLinkItem'

const Header: FC = () => {
  const router = useRouter()
  const { isOpen, onToggle } = useDisclosure()
  const [height, setHeight] = useState(0)
  const [isActiveNews, setIsActiveNews] = useState(false)
  const [isActiveMap, setIsActiveMap] = useState(false)

  useEffect(() => {
    function isSmartPhone() {
      // デバイス幅が640px以下の場合にスマホと判定する
      setHeight(window.innerHeight - 50.52)
    }

    window.addEventListener('resize', isSmartPhone)
    isSmartPhone()
  }, [])

  useEffect(() => {
    function checkRoute() {
      setIsActiveNews(router.pathname.includes('news'))
      setIsActiveMap(router.pathname.includes('map'))
    }
    checkRoute()
  }, [router])

  return (
    <>
      <Box
        bgColor={'green'}
        height={'10px'}
        width={'100%'}
        position={'fixed'}
        zIndex={11}
      ></Box>
      <Flex
        id="header"
        align="center"
        transition="box-shadow 0.2s"
        position="fixed"
        w="100%"
        justify="space-between"
        wrap="wrap"
        padding={{ base: 0, md: 6 }}
        backgroundColor={`${isOpen ? 'white' : ''}`}
        top={0}
        className={styles.header}
      >
        <Flex
          align="center"
          mr={{ base: 0, md: 5 }}
          className={styles.logo}
          pl={{ base: 3, md: 0 }}
          pt={{ base: 2, md: 0 }}
          pb={{ base: 1.5, md: 0 }}
        >
          <Link href="/" w={{ base: '170px', md: '300px' }}>
            ねこにげ
          </Link>
        </Flex>
        <Spacer />
        <Flex
          align="center"
          display={{ base: 'flex', md: 'none' }}
          className={styles.mobile_nav}
        >
          <IconButton
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon />}
            className={styles.mobile_nav_icon}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          direction={{ base: 'column', md: 'row' }}
          width={{ base: 'full', md: 'auto' }}
          justify="right"
          alignItems="center"
          flexGrow={1}
          className={styles.linkGroup}
          gap={10}
        >
          <NextLink href="/map" passHref>
            <Link className={isActiveMap ? styles.active : ''}>
              避難所を検索する
            </Link>
          </NextLink>
          <NextLink href="/news" passHref>
            <Link className={isActiveNews ? styles.active : ''}>最新記事</Link>
          </NextLink>
          <NextLink href="/articles" passHref>
            <Link className={isActiveNews ? styles.active : ''}>記事一覧</Link>
          </NextLink>
        </Stack>
        <Collapse
          in={isOpen}
          animateOpacity
          endingHeight={height}
          className={styles.mobile_nav_collapse}
        >
          <MobileLinkItem label={'Map'} href={'/map'} />
          <MobileLinkItem label={'News'} href={'/news'} />
        </Collapse>
      </Flex>
      {router.pathname !== '/' && (
        <Box height={{ md: '5rem', base: '3.2em' }}></Box>
      )}
    </>
  )
}

export default Header
