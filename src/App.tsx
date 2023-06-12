
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Booking from './pages/Booking'
import Package from './pages/Package'
import Contact from './pages/Contact'
import Destination from './pages/Destination'

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/package" element={<Package />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/destination" element={<Destination />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
