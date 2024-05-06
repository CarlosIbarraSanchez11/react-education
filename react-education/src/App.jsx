import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import TitleCampus from "./components/TitleCampus/TitleCampus";
import TitleContact from "./components/TitleContact/TitleContact";
import TitleTestimonials from "./components/TitleTestimonials/TitleTestimonials";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useNavigate } from "react-router-dom";
const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title />
        <Programs />
        <About setPlayState={setPlayState} />
        <TitleCampus />
        <Campus />
        <TitleTestimonials />
        <Testimonials />
        <TitleContact />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
