import ArrowToTop from "./components/ArrowToTop"
import Cases from "./components/Cases"
import ChooseYourStyle from "./components/ChooseYourStyle"
import Discount from "./components/Discount"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Specs from "./components/Specs"
import Sponsor from "./components/Sponsor"


function App() {

  return (
    <div className="bg-[#0F0F10] text-white ">
     <Navbar/>
     <Hero/>
     <Sponsor/>
     <Specs/>
     <Cases/>
     <Discount/>
     <ChooseYourStyle/>
     <Footer/>
     <ArrowToTop/>
     
    </div>
  )
}

export default App
