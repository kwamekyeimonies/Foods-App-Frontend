import { Route, Navigate, Routes } from "react-router-dom"
import NavigationBar from "./components/Navbar/NavigationBar"
import "./App.css"
import Home from "./Pages/Home/Home"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (  
  <>
    <div className="gradient__bg">
      <NavigationBar />
    </div>

    <Routes>
     <Route path="/" element={<Navigate to="/home" replace />} />
     <Route path="/home" element={<Home />} />
    </Routes>

    <div className="footer__gradient__bg">
      <Footer />
    </div>
  </>
  
  )
}
export default App