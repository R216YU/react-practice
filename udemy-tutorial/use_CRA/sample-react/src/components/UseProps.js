import React from "react";
import UsePropsChild from "./UsePropsChild";
import "./UseProps.css";
import UsePropsChild2 from "./UsePropsChild2";
import PropsPractice from "./PropsPractice";

const UseProps = () => {

  const hello = (arg) => {
    return "function", arg;
  };

  const o = {
    num: 123,
    obj: {
      name: "tom",
      age: 18,
    },
  };

  const forPractice = {
    name: "Takashi",
    age: 19,
    from: "Japan"
  }

  return (
    <React.Fragment>
      <UsePropsChild color="orange" />
      <UsePropsChild color="pink" />
      <UsePropsChild color="black" />
      <UsePropsChild2 {...o} fn={hello} bool />
      <PropsPractice {...forPractice}/>
    </React.Fragment>
  );
};

export default UseProps;
