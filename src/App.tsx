
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Body } from './components/Body/Body'

function App() {


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
