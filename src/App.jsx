import React from 'react'
import Home from './pages/Home.jsx'
import { BrowserRouter, Routes,Route } from 'react-router'
import Dashboard from './pages/Dashboard.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path ="/" element = {<Home/>}/>
        <Route path='/categories/:name' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App