import { useState } from 'react'
import './App.css'



import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div id= 'app-cont'>

      <div id= 'content-cont'>

        <Navbar />

      </div>
      
      <Footer />

    </div>
  )
}

export default App
