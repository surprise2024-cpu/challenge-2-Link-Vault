
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Body } from './components/Body/Body'

import { Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { LinksPage } from './pages/LinksPage'
import { Bookmarked } from './pages/Bookmarked'

function App() {


  return (
    <div id= 'app-cont'>
      
      {/*<div id='bg-slideshow'></div>
      <div id='blur-overlay'></div>*/}

      <div id='scrollable'>

        <Navbar />
        
        <Body />

        <Routes>
          <Route index element={<Home />} />
          <Route path='links-page' element={<LinksPage url={'vdfvfdv'} title={'ddfddd'} description={'adfvadfvdf'} />} />
          <Route path='bookmarked-page' element={<Bookmarked />} />
        </Routes>

      </div>

      <Footer />

    </div>
  )
}

export default App
