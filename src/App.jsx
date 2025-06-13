import LandingPage from "./landing-page/landing";
import { BrowserRouter, Route, Router } from "react-router-dom";
import { Routes } from "react-router";
// import About from "./dashboards/Projects";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="projects" element={<Projects />} /> */}
        </Routes>
      </BrowserRouter>
      <LandingPage />
    </div>



  );
}


export default  App;