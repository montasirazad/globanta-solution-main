import "./App.css";
import Banner from "./components/Banner/Banner";
import CoreStrengths from "./components/CoreStrengths/CoreStrengths";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import StudyAbroad from "./components/StudyAbroad/StudyAbroad";
import CountrySlider from "./CountrySlider/CountrySlider";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <CoreStrengths />
      <Services />
      <StudyAbroad />
      <CountrySlider />
      <Footer />
    </>
  );
}

export default App;
