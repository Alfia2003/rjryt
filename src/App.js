
import "./assets/css/style.css";
import Download from "./components/landingPage/Download";
import Footer from "./components/landingPage/Footer";
import Hero from "./components/landingPage/Hero";
import Navbar from "./components/landingPage/Navbar";
import Provides from "./components/landingPage/Provides";
import Services from "./components/landingPage/Services";

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Services/>
    <Provides/>
    <Download/>
    <Footer/>
    </>
  );
}

export default App;
