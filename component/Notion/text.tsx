import styles from './text.module.css'
import { FC } from 'react'
import {
  TextRichTextItemResponse,
  RichTextItemResponse
} from '@notionhq/client/build/src/api-endpoints.d'

export const Text: FC<{ text: RichTextItemResponse[] }> = ({ text }) => {
  if (!text) {
    return <></>
  }
  const element = text.map((value: RichTextItemResponse, i: number) => {
    if (!('text' in value)) {
      return <></>
    }
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value
    return (
      <span className={[bold ? styles.bold : ''].join(' ')} key={++i}>
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    )
  })
  return <>{element}</>
}
