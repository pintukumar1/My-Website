import React, { Component } from 'react'
import { Routes, Route } from 'react-router'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Landing from './components/Landing/Landing'
import Dashboard from './pages/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div>
        <Dashboard>
          <Routes>
            <Route path="/" element={ <Landing /> } />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element = {<Login /> } />
          </Routes>  
        </Dashboard>
      </div>  
       
    )
  }
}

export default App