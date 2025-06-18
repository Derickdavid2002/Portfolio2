import Nav from "./Nav";
import Hero from "./Hero";
import Section from "./Section"

function LandingPage() {

  



const aosProps = () => {
  return {
    "data-aos": "fade-down",
    "data-aos-delay": "40",
  };
};

  return (
    <div className="max-w-[1400px] mx-auto " >
      <Nav />
     <Hero {...aosProps()} />
     <Section {...aosProps()}/>
    </div>
  );
}






export default LandingPage;