import React, { FC } from 'react'
import Image from 'next/image'

import scss from './index.module.scss'
import { GridItem } from '@chakra-ui/react'

const Card: FC<{
  src: string
  width: number
  height: number
  alt: string
  link?: string
}> = ({ src, width, height, alt, link }) => {
  return (
    <GridItem
      colSpan={{ md: 1, base: 3 }}
      className={scss.card}
      onClick={() => (link ? location.assign(link) : '')}
      style={{ position: 'relative', height: 300 }}
    >
      <Image
        src={src ? src : '/images/nekonige.png'}
        width={width}
        height={height}
        alt={alt}
        objectFit="cover"
      />
      <div className={scss.content}>{alt}</div>
    </GridItem>
  )
}
export default Card
