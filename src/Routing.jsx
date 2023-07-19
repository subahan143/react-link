import { BrowserRouter,Routes,Route } from 'react-router-dom'

import React from 'react'
import Header from './Component/Header/Header'
import Center from './Component/Center/Center'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import Footer from './Component/Services/Footer/Footer'

const Routing = () => {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>

<Route path='/' element={<Center/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/services' element={<Services/>}/>






</Routes>
<Footer/>

</BrowserRouter>
</>
  )
}

export default Routing
