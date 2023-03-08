import "./Child.css";
import ExampleChild from "./ExampleChild";

const Example = () => {
    return (
      <div className="component">
        <h3>練習問題</h3>           
        <p>/componentsフォルダをstart内に作成して、Childにコンポーネントを分離して、Exampleコンポーネントで読み込んでください。</p>
        <ExampleChild />
      </div>
    );
  };
   
  export default Example;