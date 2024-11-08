import Navbar from "@/app/components/navbar"
import Hero from "./components/hero";
import Projectmgt from "./components/projectmgt"
import Extension from "./components/extension";
import Customization from "./components/customization";
import Workeverywhere from "./components/workeverywhere";
import Sponsor from "./components/sponsor";
import Footer from "./components/footer";

const Homepage = () => {
  return (
    <div className="w-[1922px] h-[5669px] bg-white relative">
        <Navbar/>
        <Hero/>
        <Projectmgt/>
        <Extension/>
        <Customization/>
        <Workeverywhere/>
        <Sponsor/>
        <Footer/>
    </div>
  )
}

export default Homepage;