import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Project from "./components/Project"
import Footer from "./components/Footer";
import VruLikCaseStudy from "./components/VruLikCaseStudy";
import NavBar from "./components/Navbar"


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path="/"  element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route  path='/project' element={<Project />} />
        <Route path='/vrulikcasestudy' element={<VruLikCaseStudy />}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  
  )
}

export default App