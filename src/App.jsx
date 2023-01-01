import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import PropertyPage from './components/Listings/PropertyPage'
import './App.css'
import { MantineProvider } from '@mantine/core'

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Poppins' }}>
      <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/property/:id" element={<PropertyPage />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </MantineProvider>
  )
}

export default App
