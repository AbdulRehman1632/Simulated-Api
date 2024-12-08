import React from 'react'
import Home from './Components/Home/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './Components/CustomNav/CustomNav';
import { Route, BrowserRouter as Router , Routes } from 'react-router-dom';
import Docs from './Components/Docs/Docs';


const App = () => {
  return (
    <div>
      <Router>
        <CustomNav/>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Home/>} path='/home'/>
          <Route element={<Docs/>} path='/Docs'/>
        </Routes>
      </Router>

    </div>
  )
}

export default App
