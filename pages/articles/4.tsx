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
          <span>記事一覧 &gt; 「災害時、ペットにもいつも以上の気配りを」</span>

          <h1>災害時、ペットにもいつも以上の気配りを</h1>

          <div className={scss.contents}>
            <div className={scss.image}>
              <Image
                src="/images/pet.png"
                alt="pet"
                width={1920}
                height={1280}
              />
            </div>
            <p>
              「VMAT」の船津さんは、避難所でのペットの様子を次のように振り返ります。
            </p>
            <p>
              「食欲不振やおう吐、下痢などの消化器系の不調がいちばん多かったです。次いで、いつもよりおとなしいとか、震えているといったメンタルの部分。飼い主が不安になっているのが動物に伝わっているのだと思います」（船津敏弘さん）
              <br />
            </p>
            <p>
              災害時には飼い主も不安になり、いつもと同じような態度でペットに接することができないこともあります。ふだん以上にペットの体調に気を配り、異常を感じたら獣医師などに相談しましょう。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
