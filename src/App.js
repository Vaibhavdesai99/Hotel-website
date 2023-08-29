import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Activities from './Components/Activities/Activities'
import Contact from './Components/Contact/Contact'
import Packages from './Components/Packages/Packages'
import Gallery from './Components/Gallery/Gallery'

const App = () => {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route  index element={<Home/>}/>
        <Route  path='/About' element={<About/>}/>
        <Route  path='/Activities' element={<Activities/>}/>
        <Route  path='/Contact' element={<Contact/>}/>
        <Route  path='/Packages' element={<Packages/>}/>
        <Route  path='/Gallery' element={<Gallery/>}/>
      </Routes>
    
    </div>
  )
}

export default App