{/*import { useState } from 'react'*/}
import './App.css'



import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Body } from './components/Body/Body'

function App() {
  {/*const [count, setCount] = useState(0)*/}

  return (
    <div id= 'app-cont'>
      
      {/*<div id='bg-slideshow'></div>*/}
      {/*<div id='blur-overlay'></div>*/}

      <div id='scrollable'>

        <Navbar />
        
        <Body />


      </div>

      <Footer />

    </div>
  )
}

export default App
