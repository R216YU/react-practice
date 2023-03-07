import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Works from './components/Works';

import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Header></Header>
      
          <Routes>
            <Route path={'/'} element={<Profile></Profile>}></Route>
            <Route path={'/works'} element={<Works></Works>}></Route>
            <Route path={'/skills'} element={<Skills></Skills>}></Route>
          </Routes>

      <Footer></Footer>

      </div>
    </BrowserRouter>
  
  );
}

export default App;
