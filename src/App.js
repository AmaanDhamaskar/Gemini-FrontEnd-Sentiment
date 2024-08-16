import Home from "./Home"
import Login from "./components/login/Login"
import Main from "./components/main/Main"
import Sidebar from "./components/sidebar/Sidebar"
import Signup from "./components/signup/Signup"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState } from "react"
import "./App.css"

const App = () => {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const message = "what have you done";

  return (
    // <>
    // <Sidebar/>
    // <Main/>
    // </>
    

    <Router>
            <div className="container">
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/login' element={<Login showAlert={showAlert}/>}/>
                <Route exact path='/signup' element={<Signup showAlert={showAlert}/>}/>
              </Routes>
            </div>
      </Router>
  )
}

export default App
