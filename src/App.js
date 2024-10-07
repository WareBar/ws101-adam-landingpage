
import './App.css';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Importance from "./pages/Importance";
import About from "./pages/About"
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

        </Routes>


      </main>
    </div>
  );
}

export default App;
