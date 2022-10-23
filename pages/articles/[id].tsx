import type { NextPage } from 'next';
import React from "react";
import Image from "next/image";

import Header from "component/Header";

import scss from "styles/point.module.scss";

const Home: NextPage<{
  id: number
}> = ({ id }) => {

  return (
    <div style={{ backgroundColor: "#FDFAF0" }}>
      <Header />
      <div className={ scss.inner }>
        <div className={ scss.wrapper }>

          <span>記事一覧 > 「飼い主の命にもかかわる　ペットの避難対策」</span>

          <h1>飼い主の命にもかかわる　ペットの避難対策</h1>

          <div className={ scss.contents }>
            <div className={ scss.image }>
              <Image src="/images/cat.jpg" alt="猫" width={ 1920 } height={ 1280 } />
            </div>
            <p>
              飼い主とペットが安全に避難するには、飼い主自身の身の安全を確保することが大切です。<br />
              また、東日本大震災では、いったん避難した飼い主がペットを避難させるために自宅に戻り、津波に巻き込まれてしまったケースもあったとのことです。
            </p>
            <p>
              数々の被災地を調査し、ペットと防災について詳しいNPO法人 ANICE（アナイス）代表の平井潤子（ひらい・じゅんこ）さんが災害現場を回って感じたのは、<br />
              ・ペットのために避難をためらっている飼い主が多い<br />
              ・飼い主がペットのために危険な場所へ戻っている<br />
              こと。
            </p>
            <p>
              昼間であれば飼い主が自宅にいないことも考えられます。<br />
              不測の事態も考慮し、日頃から備蓄品の確保や避難ルートの確認、携帯できるペットの情報（治療記録、ワクチン接種歴など）をまとめたり、ペットが行方不明にならないよう迷子札や、マイクロチップなどにより所有者を明示したりと、自分自身や家族、そして愛犬を守るための対策を心がけてくださいね。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Home
