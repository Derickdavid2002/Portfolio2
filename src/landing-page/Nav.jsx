import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileNav from "./MobileNav";
import { TbLetterX } from "react-icons/tb";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRefs = {
    Home: useRef(null),
    Contact: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Reviews: useRef(null),
  };

  const pathToNav = {
    "/": "Home",
    "/about": "About",
    "/contact": "Contact",

    "/projects": "Projects",
    "/blogs": "Blogs",
  };

  const activeFromPath = pathToNav[location.pathname] || "Home";
  const [navItems, setNavItems] = useState(activeFromPath);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const currentItem = hoveredItem || navItems;

  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const ref = navRefs[currentItem]?.current;
    if (ref) {
      const { offsetLeft, offsetWidth } = ref;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [currentItem]);

  return (
    <div onMouseLeave={() => setHoveredItem(null)} className=" bg-gray-800 ">
      <nav className="flex lg:gap- items-center p-3  py-6 text-white max-w-[1200px] mx-auto flex-col md:flex-row md:justify-between md:gap-[100px]">
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="flex  items-center justify-between gap-30 "
        >
          <div className="text-2xl flex justify-start font-bold">
            <span className="text-[#fafafa]">DER</span>
            <span className="text-[#A855F7]">ICK</span>
          </div>

          <div className=" md:hidden    " onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <TbLetterX  />
            ) : (
              <RxHamburgerMenu />
            )}
          </div>
        </div>

        <div className="lg:text-white lg:text-[20px] lg:font-semibold relative hidden lg:block ">
          <span
            className="absolute bottom-0 h-1 bg-[#A855F7] transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          ></span>

          <ul className="lg:flex lg:space-x-7 text-lg font-medium hidden ">
            <li>
              <Link
                to="/"
                ref={navRefs.Home}
                onMouseEnter={() => setHoveredItem("Home")}
                onClick={() => setNavItems("Home")}
                className="relative text-white px-2 font-bold hover:text-[#A855F7] py-1"
              >
                HOME
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                ref={navRefs.About}
                onMouseEnter={() => setHoveredItem("About")}
                onClick={() => setNavItems("About")}
                className="relative text-white font-bold hover:text-[#A855F7] px-2 py-1"
              >
                ABOUT
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                ref={navRefs.Contact}
                onMouseEnter={() => setHoveredItem("Contact")}
                onClick={() => setNavItems("Contact")}
                className="relative text-white font-bold hover:text-[#A855F7] px-2 py-1"
              >
                CONTACT
              </Link>
            </li>

            <li>
              <Link
                to="/projects"
                ref={navRefs.Projects}
                onMouseEnter={() => setHoveredItem("Projects")}
                onClick={() => setNavItems("Projects")}
                className="relative  text-white font-bold hover:text-[#A855F7] px-2 py-1"
              >
                PROJECTS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <MobileNav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navItems={navItems}
        setNavItems={setNavItems}
      />
    </div>
  );
}

export default Nav;
