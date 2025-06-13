import LandingPage from "./landing-page/landing";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Routes } from "react-router";
import Projects from "./dashboards/Projects";
import Contacts from "./dashboards/Contacts";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contacts />} />
          {/* Add more routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>



  );
}


export default  App;