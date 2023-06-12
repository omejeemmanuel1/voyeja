import Header from "../components/Header/Header"
import AboutUs from "../components/AboutUs/AboutUs"
import Services from "../components/Services/Services"
import Destination from "../components/Destination/Destination"
import Booking from "../components/Boookings/Bookings"
import Process from "../components/Process/Process"
import Team from "../components/Team/Team"
import Testimonial from "../components/Testimaonia/Testimonial"
import Footer from "../components/Footer/Footer"
import React from "react"
const Home = () => {
  return (
    <div>
        <Header />
        <AboutUs />
        <Services />
        <Destination />
        <Booking />
        <Process />
        <Team />
        <Testimonial />
        <Footer />
    </div>
  )
}

export default Home