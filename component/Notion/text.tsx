import styles from './text.module.css'

export const Text = ({ text }: any) => {
  if (!text) {
    return null
  }
  return text.map((value: any) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text
    } = value
    return (
      <span className={[bold ? styles.bold : ''].join(' ')} key={text.id}>
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    )
  })
}
