import type { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'

import Header from 'component/Header'

import scss from 'styles/point.module.scss'

const Home: NextPage<{
  id: number
}> = ({ id }) => {
  return (
    <div style={{ backgroundColor: '#FDFAF0' }}>
      <Header />
      <div className={scss.inner}>
        <div className={scss.wrapper}>
          <span>記事一覧 &gt; 「気をつけたい　避難所でのトラブル」</span>

          <h1>気をつけたい　避難所でのトラブル</h1>

          <div className={scss.contents}>
            <div className={scss.image}>
              <Image
                src="/images/hinanjo.jpg"
                alt="hinanjo"
                width={1920}
                height={1280}
              />
            </div>
            <p>
              避難所では周りの被災者とのトラブルにも気をつけましょう。
              <br />
              熊本地震で大きな被害を受けた益城町の避難所では、同行したペットへの苦情が寄せられました。
            </p>
            <p>
              避難所ではペットを飼っている人も、苦手な人も、いろいろな人が不安の中を過ごしています。ペットがOKとされている場所でも、とくに排泄場所や排泄物の処理、抜け毛など衛生面に気をつける必要があります。
              給餌やフードの確保、散歩などは飼い主が責任を持って行い、飼い主仲間同士で情報交換や協力し、可能な場合はボランティアや獣医師などの支援も活用しましょう。
              <br />
            </p>
            <p>
              東日本大震災の教訓をいかし、益城町の避難所ではトラブルを防ぐため、ボランティアが避難所の裏に飼い主がペットとともに過ごせるテントを設営。さらに「VMAT」の船津さんの提案によって、飼い主たちが自宅の片付けをしたりする際にペットを預けられるよう、避難所内にペットの一時預かり所も設けられました。
            </p>
            <div className={scss.image}>
              <Image
                src="/images/tent.jpg"
                alt="tent"
                width={1920}
                height={1280}
              />
            </div>
            <p>
              災害時にペットの命を守るためには飼い主たちの自助が欠かせません。日頃の備えと、安全な避難行動が、自分や家族だけではなくペットの命を守ることにつながるのです。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
