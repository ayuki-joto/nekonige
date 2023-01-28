import { NextApiRequest, NextApiResponse } from 'next'

/**
 * Notionの画像URLを無期限にする
 *   呼出方：/api/notionImage?url=<Notion画像URL>
 * @param req
 * @param res
 * @returns 画像
 */
const NotionImage = async function (req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.statusCode = 400
    res.end()
    return
  }

  const { url: slugs } = req.query

  if (!slugs) {
    res.statusCode = 400
    res.end()
    return
  }

  const url = slugs.toString()

  // 画像URLはNotionのものに制限
  const urlRegexp =
    /^https:\/\/s3\..*?\.amazonaws\.com\/secure\.notion\-static\.com/
  if (!urlRegexp.test(url)) {
    res.statusCode = 400
    res.end()
    return
  }

  try {
    const response = await fetch(url)

    // キャッシュさせる
    res.setHeader('Content-Type', response.headers.get('content-type') ?? '')
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=86400, max-age=86400, stale-while-revalidate=86400'
    )
    const image = await response.blob()
    res.statusCode = 200
    res.send(image.stream())
  } catch (e) {
    console.log(e)
    res.statusCode = 500
    res.end()
  }
}

export default NotionImage
