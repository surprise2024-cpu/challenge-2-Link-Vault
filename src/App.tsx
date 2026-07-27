
import './App.css'

import { Navbar } from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'

import { Routes, Route} from 'react-router'
import { FormPage } from './pages/FormPage'
import { LinksPage } from './pages/LinksPage'
import { Bookmarked } from './pages/Bookmarked'

function App() {


  return (
    <div id= 'app-cont'>

      <div id='scrollable'>

        <Navbar />

        <Routes>

          <Route index element={<LinksPage />} />
          <Route path='form-page' element={<FormPage />} />
          <Route path='bookmarked-page' element={<Bookmarked />} />

        </Routes>

      </div>

      <Footer />

    </div>
  )
}

export default App
