import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project"
import Footer from "./components/Footer";
import NavBar from "./components/Navbar"


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/"  element={<Home />} exact />
        {/* <Route path="/about" element={<About />} /> */}
        <Route  path='/project' element={<Project />} />

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  
  )
}

export default App