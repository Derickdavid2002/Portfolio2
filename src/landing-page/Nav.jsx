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
    About: useRef(null),
    Contact: useRef(null),
    Talks: useRef(null),
    Projects: useRef(null),
    Reviews: useRef(null),
  };

  const pathToNav = {
    "/": "About",
    "/about": "About",
    "/contact": "Contact",
    "/talks": "Talks",
    "/projects": "Projects",
    "/blogs": "Blogs",
  };

  const activeFromPath = pathToNav[location.pathname] || "About";
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
    <div onMouseLeave={() => setHoveredItem(null)} className="">
      <nav className="flex gap-100 items-center bg-blue-500 p-3 text-white relative flex-col md:flex-row md:justify-between md:gap-[100px]">
        <div data-aos="fade-down" data-aos-delay="100" className="flex gap-9">
          <a href="#">
            <img src="/facebook.png" alt="" className="w-[40px]" />
          </a>
          <a href="#">
            <img
              src="/linkedln.png"
              alt=""
              className="w-[30px] h-[24px] mt-2"
            />
          </a>
          <a href="#">
            <img
              src="/whatsapp.png"
              alt=""
              className="w-[30px] h-[24px] mt-2"
            />
          </a>
          <a href="#">
            <img src="/twitter.png" alt="" className="w-[30px] h-[24px] mt-2" />
          </a>

          <div className=" lg:hidden mt-3 " onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <TbLetterX /> : <RxHamburgerMenu />}
          </div>
        </div>

        <div className="lg:text-white lg:text-[20px] lg:font-semibold relative hidden lg:block ">
          <span
            className="absolute bottom-0 h-1 bg-white transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          ></span>

          <ul className="lg:flex lg:gap-9 hidden relative">
            <li>
              <Link
                to="/"
                ref={navRefs.About}
                onMouseEnter={() => setHoveredItem("About")}
                onClick={() => setNavItems("About")}
                className="relative px-2 py-1"
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
                className="relative px-2 py-1"
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                to="/talks"
                ref={navRefs.Talks}
                onMouseEnter={() => setHoveredItem("Talks")}
                onClick={() => setNavItems("Talks")}
                className="relative px-2 py-1"
              >
                TALKS
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                ref={navRefs.Projects}
                onMouseEnter={() => setHoveredItem("Projects")}
                onClick={() => setNavItems("Projects")}
                className="relative px-2 py-1"
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                ref={navRefs.Reviews}
                onMouseEnter={() => setHoveredItem("Reviews")}
                onClick={() => setNavItems("Reviews")}
                className="relative px-2 py-1"
              >
                BLOGS
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
