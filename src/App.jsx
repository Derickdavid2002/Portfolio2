import LandingPage from "./landing-page/landing";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Routes } from "react-router";
import Projects from "./dashboards/Projects";
import Contacts from "./dashboards/Contacts";
import Talks from "./dashboards/Talks";
import Blogs from "./dashboards/Blogs";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";





function App() {


  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  const aosProps= () => ({
    "data-aos": "fade-down",
    "data-aos-delay": "40",
  });



  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="projects" element={<Projects {...aosProps()} />} />
          <Route path="contact" element={<Contacts {...aosProps()} />} />
          <Route path="talks" element={<Talks {...aosProps()} />} />
          <Route path="blogs" element={<Blogs {...aosProps()}/>} />
        </Routes>
      </BrowserRouter>
    </div>



  );
}


export default  App;