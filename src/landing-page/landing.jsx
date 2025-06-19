import Nav from "./Nav";
import Hero from "./Hero";
import Footer from "./Footer"
import Section from "./Section"

function LandingPage() {

  



const aosProps = () => {
  return {
    "data-aos": "fade-down",
    "data-aos-delay": "40",
  };
};

  return (
    <div >
      <Nav />
     <Hero {...aosProps()} />
     {/* <Footer /> */}
     {/* <Section {...aosProps()}/> */}
    </div>
  );
}






export default LandingPage;