import './App.css';
import Child from './components/Child';
import Example from './components/Example';
import Expression from './components/Expression';
import UseProps from './components/UseProps';

function App() {
  return (
    <>

      <div id='Child'>
        <Child />
      </div>

      <div id="Example">
        <Example />
      </div>
      
      <div id="Expression">
        <Expression />
      </div>
      
      <div id="UserProps">
        <UseProps />
      </div>
      

    </>
  );
}

export default App;
