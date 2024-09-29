import { Outlet } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  
  return (
    <div className="bg-gray-600">
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  )
}

export default App
