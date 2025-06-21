



import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-[#1d1d1d] px-6 py-10 border-t border-gray-200">
      <div className="max-w-[1200px]  mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-2xl font-bold">
        <a href="/">  <span className="text-[#fafafa]">DER</span>
          <span className="text-[#A855F7]">ICK</span></a>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href="/" className="text-white hover:text-[#A855F7] transition">Home</a>
          <a href="/about" className="text-white hover:text-[#A855F7] transition">About</a>
          <a href="/projects" className="text-white hover:text-[#A855F7] transition">Projects</a>
          <a href="/contact" className="text-white hover:text-[#A855F7] transition">Contact</a>
        </div>

        <div className="flex gap-4 text-xl text-[#1d1d1d]">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A855F7] transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A855F7] transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#A855F7] transition">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="text-center mt-8 text-sm text-[#737373]">
        &copy; {new Date().getFullYear()} Derick. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
  







/* <div {...aosProps}className=" bg-blue-400 ">
      <div className="flex items-center justify-center flex-col lg:flex-row gap-15 px-5 py-5 text-white">
        <div className="">
          <img
            src="/me.png"
            alt=""
            className=" mt-10 c w-[300px] h-[300px]"
          />
        </div>

        <div className="text-center  lg:text-start">
          <p className="text-2xl">Hello, My Name Is</p>
          <p className="font-semibold text-4xl mt-2">Derick David</p>
          <p className="mt-4">
            I'm a frontend web developer, for complex scalable websites. I write{" "}
            <br />
            about web development on my blog and regularly speak at various web
            conferences and meetups. <br /> Want to know how I may help your
            project? Check out my <a className="hover:underline text-gray-500" href="/projects">project case</a>.
          </p>
          <button className="px-4 py-2 rounded text-white font-bold bg-indigo-500 hover:bg-indigo-700 transition mt-4">
            <a href="/contact">Hire Me</a>
          </button>
        </div>
      </div>

      

     
    </div> */








