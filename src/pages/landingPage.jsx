import Footer from "../component/Footer"
import Hero from "../component/Hero"
import Navbar from "../component/Navbar"
import OurRooms from "../component/OurRooms"
import Review from "../component/Review"
import TheDining from "../component/TheDining"
import TheExperience from "../component/TheExperience"
import TheLocation from "../component/TheLocation"



const landingPage = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <OurRooms/>
    <TheExperience/>
    <TheDining/>
    <Review/>
    <TheLocation/>
    <Footer/>
    </>
  )
}

export default landingPage