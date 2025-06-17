import { Link } from "react-router-dom";


function MobileNav({isOpen, setIsOpen, navItems, setNavItems}) {
if (!isOpen) return null;

const handleClick = (item) => {
    setNavItems(item);
    setIsOpen(false)
};




return (

    <div >

        
  <div className= "lg:hidden bg-blue-500 text-white text-[18px] font-semibold flex flex-col gap-4 p-4">
      <Link to="/" onClick={() => handleClick("About")} className="px-2 py-1 block">ABOUT</Link>
      <Link to="/contact" onClick={() => handleClick("Contact")} className="px-2 py-1 block">CONTACT</Link>
      <Link to="/talks" onClick={() => handleClick("Talks")} className="px-2 py-1 block">TALKS</Link>
      <Link to="/projects" onClick={() => handleClick("Projects")} className="px-2 py-1 block">PROJECTS</Link>
      <Link to="/blogs" onClick={() => handleClick("Reviews")} className="px-2 py-1 block">BLOGS</Link>
    </div>



    </div>
);





}



export default MobileNav;