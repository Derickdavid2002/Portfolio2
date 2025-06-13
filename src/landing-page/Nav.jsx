import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  const navRefs = {
    About: useRef(null),
    Contact: useRef(null),
    Talks: useRef(null),
    Projects: useRef(null),
    Reviews: useRef(null),
  };

  // this part is to Match the route to active nav item
  const pathToNav = {
    "/": "About",
    "/about": "About",
    "/contact": "Contact",
    "/talks": "Talks",
    "/projects": "Projects",
    "/reviews": "Reviews",
  };

  const activeFromPath = pathToNav[location.pathname] || "About";
  const [navItems, setNavItems] = useState(activeFromPath);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const currentItem = hoveredItem || navItems;

  useEffect(() => {
    const ref = navRefs[currentItem]?.current;
    if (ref) {
      const { offsetLeft, offsetWidth } = ref;
      setUnderlineStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [currentItem]);

  return (
    <div onMouseLeave={() => setHoveredItem(null)} className="">
      <nav className="flex gap-100 items-center bg-blue-500 p-3 text-white relative">
        <div className="flex gap-9">
          <a href="#"><img src="/facebook.png" alt="" className="w-[40px]" /></a>
          <a href="#"><img src="/linkedln.png" alt="" className="w-[30px] h-[24px] mt-2" /></a>
          <a href="#"><img src="/whatsapp.png" alt="" className="w-[30px] h-[24px] mt-2" /></a>
          <a href="#"><img src="/twitter.png" alt="" className="w-[30px] h-[24px] mt-2" /></a>
        </div>

        <div className="text-white text-[20px] font-semibold relative">
          <span
            className="absolute bottom-0 h-1 bg-white transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          ></span>

          <ul className="flex gap-9 relative">
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
                to="/reviews"
                ref={navRefs.Reviews}
                onMouseEnter={() => setHoveredItem("Reviews")}
                onClick={() => setNavItems("Reviews")}
                className="relative px-2 py-1"
              >
                REVIEWS
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;