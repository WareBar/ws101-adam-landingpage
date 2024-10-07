
import './App.css';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Importance from "./pages/Importance";
import About from "./pages/About"
import NoPage from "./components/NoPage";
import {Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <main>
        <NavBar/>

          <Routes>
              <Route index element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/importance" element={<Importance/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="*" element={<NoPage/>}/>
          </Routes>
          
        <Footer/>

      </main>
    </div>
  );
}

export default App;
