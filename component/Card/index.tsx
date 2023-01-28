import React, { FC } from 'react'
import Image from 'next/image'

import scss from './index.module.scss'
import { GridItem } from '@chakra-ui/react'

const Card: FC<{
  src: string
  alt: string
  link?: string
}> = ({ src, alt, link }) => {
  return (
    <GridItem
      colSpan={{ md: 1, base: 3 }}
      className={scss.card}
      onClick={() => (link ? location.assign(link) : '')}
      style={{ position: 'relative', height: 300 }}
    >
      <Image
        src={src ? src : '/images/nekonige.png'}
        alt={alt}
        layout="fill"
        objectFit="contain"
      />
      <div className={scss.content}>{alt}</div>
    </GridItem>
  )
}
export default Card
