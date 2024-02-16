
import "./assets/css/style.css";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Provides from "./components/Provides";
import Services from "./components/Services";

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
