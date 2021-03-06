import { useState } from 'react'
// import logo from './logo.svg'
// import './global.css'
import {Footer} from './components/Footer'
import Navbar from './components/Navbar'
import {Routes} from './components/Routes'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    
    <div className={darkTheme ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-gray-200">
        <Navbar 
          setDarkTheme={setDarkTheme}
          darkTheme={darkTheme}
        />
        <Routes />
        <Footer />
      </div>
      
    </div>
  )
}

export default App
