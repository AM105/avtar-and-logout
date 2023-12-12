import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Protect from './components/Protect'
import About from './components/About'
import Home from './components/Home'
import Login from './components/Login'

function App() {

  
  return (
     <>

   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route element={<Protect/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>





    </Route>


   <Route path='/register' element={<Register/>}/>
   <Route path='/login' element={<Login/>}/>



   </Routes>
   
   
   
   
   
   </BrowserRouter>


     </>

)
}

export default App 