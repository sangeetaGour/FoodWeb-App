import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from "./Components/About"
import Contact from "./Components/Contact"
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Services from "./Components/Services";
import './App.css'

function App() {
  return (
    <>
    <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </Router>
        </>
  )
}

export default App
