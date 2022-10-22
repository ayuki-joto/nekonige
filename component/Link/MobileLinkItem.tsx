import { Box, LinkBox, LinkOverlay, Stack } from '@chakra-ui/react'
import styles from './MobileLinkItem.module.scss'
import { FC, useEffect, useState } from 'react'

type Props = {
  label: string
  href: string
}

const MobileLinkItem: FC<Props> = ({ label, href }) => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    function callSetWidth() {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', callSetWidth)
    callSetWidth()
  }, [])

  return (
    <LinkBox
      as={Stack}
      bg={'white'}
      px={4}
      w={width}
      className={styles.link_stack}
    >
      <Box className={styles.box}>
        <LinkOverlay href={href} px={3} className={styles.link_text}>
          {label}
        </LinkOverlay>
      </Box>
    </LinkBox>
  )
}

export default MobileLinkItem
