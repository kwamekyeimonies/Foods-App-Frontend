import { Route, Navigate, Routes } from "react-router-dom"
import NavigationBar from "./components/Navbar/NavigationBar"
import "./App.css"

const App = () => {
  return (  
  <>
    <div className="gradient__bg">
      <NavigationBar />
    </div>

    <Routes>
     <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  </>
  
  )
}
export default App