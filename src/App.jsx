import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import PropertyPage from './components/Listings/PropertyPage'
import Login from './components/PfpManagement/Login'
import SignUp from './components/PfpManagement/SignUp'
import Subscription from './components/PfpManagement/Subscription'
import Blogs from './components/NewsInsights/Blogs'
import BuyListings from './components/Buy/BuyListings'
import ExchangeListings from './components/Exchange/ExchangeListings'
import RentListings from './components/Rent/RentListings'
import Booking from './components/Buy/Booking'
import './App.css'
import { MantineProvider } from '@mantine/core'
import { NotificationsProvider } from '@mantine/notifications'

function App() {
  return (
    <MantineProvider theme={{ fontFamily: 'Poppins' }}>
      <NotificationsProvider>
        <div className="App">
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/property/:id" element={<PropertyPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/properties" element={<BuyListings />} />
              <Route path="/exchange" element={<ExchangeListings />} />
              <Route path="/rent" element={<RentListings />} />
              <Route path="/booking/:id" element={<Booking />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </NotificationsProvider>
    </MantineProvider>
  )
}

export default App
