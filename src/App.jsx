import { Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import './App.css'

function App() {
  return (
    <>
     <Routes>
      <Route path="/" element={<LandingPage/>}/>
     </Routes>
    </>
  )
}

export default App
