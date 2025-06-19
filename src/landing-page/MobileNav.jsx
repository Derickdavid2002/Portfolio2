import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function MobileNav({isOpen, setIsOpen, navItems, setNavItems}) {
if (!isOpen) return null;

const handleClick = (item) => {
    setNavItems(item);
    setIsOpen(false)
};




return (

    <div >

        
  <div data-aos="fade-down" data-aos-delay="20" className= "md:hidden bg-[#A855F7] text-white text-[18px] font-semibold flex flex-col gap-4 p-4">
      <Link to="/" onClick={() => handleClick("About")} className="px-2 py-1 block">HOME</Link>
      <Link to="/contact" onClick={() => handleClick("Contact")} className="px-2 py-1 block">CONTACT</Link>
      <Link to="/about" onClick={() => handleClick("About")} className="px-2 py-1 block">ABOUT</Link>
      <Link to="/projects" onClick={() => handleClick("Projects")} className="px-2 py-1 block">PROJECTS</Link>
      {/* <Link to="/blogs" onClick={() => handleClick("Reviews")} className="px-2 py-1 block">BLOGS</Link> */}
    </div>



    </div>
);





}



export default MobileNav;