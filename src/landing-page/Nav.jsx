import { useState } from "react";

function Nav() {
  const [navItems, setNavItems] = useState("Abbout");

  return (
    <div onMouseLeave={() => setNavItems("About")} className="max-w-1200px ">
      <nav className="flex gap-100 items-center bg-blue-500 p-3 text-white ">
        <div className="flex gap-9 ">
          <a href="#">
            {" "}
            <img src="/facebook.png" alt="" className="w-[40px]" />
          </a>
          <a href="#">
            {" "}
            <img
              src="/linkedln.png"
              alt=""
              className="w-[30px] h-[24px] mt-2"
            />
          </a>
          <a href="#">
            {" "}
            <img
              src="/whatsapp.png"
              alt=""
              className="w-[30px] h-[24px] mt-2"
            />
          </a>
          <a href="#">
            {" "}
            <img src="/twitter.png" alt="" className="w-[30px] h-[24px] mt-2" />
          </a>
        </div>

        <div className=" text-white text-[20px] font-semibold ">
          <ul className="flex gap-9">
            <li>
              <a
                href="/About"
                onMouseLeave={() => setNavItems("About")}
                className={`relative group text-white px-2 py-1 transition-colors duration-300`}
              >
                ABOUT
                <span
                  className={`absolute left-0 -bottom-1 h-1 bg-white transition-all duration-300 ${
                    navItems === "About" ? "w-full" : "w-0"
                  } group-hover:w-full`}
                ></span>
              </a>
            </li>
            <li>
              <a
                href=""
                onMouseEnter={() => setNavItems("Contact")}
                className={`relative group text-white px-2 py-1 transition-colors duration-300`}
              >
                CONTACT
                <span
                  className={`absolute left-0 -bottom-1 h-1 bg-white transition-all duration-300 ${
                    navItems === "Contact" ? "w-full" : "w-0"
                  } group-hover:w-full`}
                ></span>
              </a>
            </li>
            <li>
              <a
                href=""
                onMouseEnter={() => setNavItems("Talks")}
                className={`relative group text-white px-2 py-1 transition-colors duration-300`}
              >
                TALKS
                <span
                  className={`absolute left-0 -bottom-1 h-1 bg-white transition-all duration-300 ${
                    navItems === "Talks" ? "w-full" : "w-0"
                  } group-hover:w-full`}
                ></span>
              </a>
            </li>
            <li>
              <a
                href=""
                onMouseEnter={() => setNavItems("Projects")}
                className={`relative group text-white px-2 py-1 transition-colors duration-300`}
              >
                PROJECTS
                <span
                  className={`absolute left-0 -bottom-1 h-1 bg-white transition-all duration-300 ${
                    navItems === "Projects" ? "w-full" : "w-0"
                  } group-hover:w-full`}
                ></span>
              </a>
            </li>
            <li>
              <a
                href=""
                onMouseEnter={() => setNavItems("Reviews")}
                className={`relative group text-white px-1 py-1 transition-colors duration-300`}
              >
                REVIEWS
                <span
                  className={`absolute left-0 -bottom-1 h-1 bg-white transition-all duration-300 ${
                    navItems === "Reviews" ? "w-full" : "w-0"
                  } group-hover:w-full`}
                ></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
