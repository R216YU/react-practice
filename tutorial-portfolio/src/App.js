import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import HomePage from './components/HomePage';
import SkillPage from './components/SkillPage';
import Footer from './components/Footer';


function App() {
  return (
    <Router>

      <div className="App font-poppin">

        <Header></Header>

        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/skill" element={<SkillPage></SkillPage>}></Route>
        </Routes>

        <Footer></Footer>

      </div>

    </Router>
  );
}

export default App;
