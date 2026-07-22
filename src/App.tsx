
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Body } from './components/Body/Body'

import { Routes, Route } from 'react-router'

function App() {


  return (
    <div id= 'app-cont'>
      
      {/*<div id='bg-slideshow'></div>*/}
      {/*<div id='blur-overlay'></div>*/}

      <div id='scrollable'>

        <Navbar />
        
        <Body />

        <Routes>
          <Route index element={<Home />} />
        </Routes>

      </div>

      <Footer />

    </div>
  )
}

export default App
