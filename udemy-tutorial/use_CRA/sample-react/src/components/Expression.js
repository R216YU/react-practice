/* 
式と文
    式：何らかの値を返すもの (変数に代入できるもの)
    文：変数宣言文、for文、if文、switch文、セミコロンで区切るもの
*/

import "./Expression.css";
import React from "react";

const Expression = () => {
  const title = "Expression";
  const arry = ["item1", "item2", "item3", "item4"];
  const hello = (arg) => `${arg} Function`;
  const jsx = <h3>Hello JSX</h3>;

  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>it is {hello("Hello")}</h3>
      <h3>{/* コメントは表示されない */}</h3>
      {jsx}
    </div>
  );
};

export default Expression;
