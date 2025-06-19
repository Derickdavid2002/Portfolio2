import Nav from "../landing-page/Nav";
import { FaCode, FaCheckCircle } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Footer from "../landing-page/Footer";

function About (aosProps) {
  const skills = ["React", "JavaScript", "HTML", "CSS"];
  const learningSkills = ["Python", "C++", "Java", "Node.js"];


    return (
        <div {...aosProps}>
         <div>
            <Nav />
         </div>

<div className="mt-10 md:px-20 ">
        <div className="flex justify-center items-center">
          <p className="text-4xl text-gray-500 font-semibold ">
            Skills Overview
          </p>
        </div>
        <p className=" px-5 flex text-center lg:text-start items-center justify-center text-gray-500 mt-4">
          I have more than 8 years' experience building rich web applications
          for clients all over the world. Below is a <br />
          quick overview of my main technical skill sets and tools I use. Want
          to find out more about my experience?
        </p>
      </div>


<div className="flex flex-col lg:flex-row items-center justify-center  gap-10 mt-15 ">
        <div className=" bg-white shadow-md w-80 text-center rounded-lg p-6 hover:bg-blue-300/40 transition-transform hover:scale-105">
          <div className=" flex items-center justify-center mb-10">
            <div className="w-16 h-16 bg-[#A855F7] rounded-full flex items-center justify-center">
              <FaCode className="text-white text-2xl" />
            </div>
          </div>

          <h2 className="text-3xl flex items-center justify-center text-gray-500 font-bold mb-4">
            Frontend
          </h2>
          <div className="flex items-center justify-center">
            <ul className="text-left  text-gray-500 space-y-3">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="text-grey-800 flex items-center text-[20px]"
                >
                  <FaCheckCircle className=" mr-2 text-[#A855F7]" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" bg-white shadow-md w-80 text-center rounded-lg p-6 hover:bg-blue-300/40 transition-transform hover:scale-105">
          <div className=" flex items-center justify-center mb-10">
            <div className="w-16 h-16 bg-[#A855F7] rounded-full flex items-center justify-center">
              <FaCode className="text-white text-2xl" />
            </div>
          </div>

          <h2 className="text-3xl flex items-center justify-center text-gray-500 font-bold mb-4">
            Interested Skills
          </h2>
          <div className="flex items-center justify-center">
            <ul className="text-left text-gray-500 space-y-3">
              {learningSkills.map((learningSkills, index) => (
                <li
                  key={index}
                  className="text-grey-800 flex items-center text-[20px]"
                >
                  <FaCheckCircle className=" mr-2 text-[#A855F7]" />
                  {learningSkills}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>


 {/* <div className="bg-blue-400 p-10 ">
        <p className=" text-white font-bold flex justify-center lg:justify-start text-3xl">Talks</p>

        <p className="text-white mt-4  text-2xl">Want me to walk at your firm or projects? <a className="hover:underline text-gray-500"href="/contact">Get In Touch</a></p>
      </div> */}



 {/* <div className="flex items-center justify-center mt-10">
        <img src="/me.png" alt="" className="rounded-full w-30 h-30" />
      </div> */}

      {/* <div className="flex items-center justify-center  p-7">
        <div className="max-w-4xl w-full p-15 bg-white rounded-lg shadow-lg text-center">
          <p className="mb-6 ">
            I'm currently taking on freelance work. If you are interested in
            hiring me for your project <br /> please use the form below to get
            in touch. Want to know how I work and what I can offer? <br />
            Check out my project case studies and resume.
          </p>

          <div className="mt-8">
            <p className="font-bold text-gray-400">
              You can also find me on the following channels
            </p>

            <div className="flex items-center justify-center mt-4 gap-9">
              <a href="#">
                <img src="/facebook.png" alt="" className="w-[40px] mt-1" />
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
                <img
                  src="/twitter.png"
                  alt=""
                  className="w-[30px] h-[24px] mt-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>



 */}


    <div>
        <p className="flex text-center lg:text-start items-center justify-center text-gray-500 mt-15 text-4xl font-semibold ">
          Great Clients I've Worked With
        </p>
        <Marquee>
          <div className="flex items-center justify-center gap-60 text-2xl font-semibold text-gray-500 mt-8">
            <p>OCUBE</p>
            <p>THE BLOG</p>
            <p>SKYDIVE</p>
            <p>INTENHUB</p>
          </div>
        </Marquee>

        <section className="">
          <div className="text-4xl flex text-center lg:text-start items-center justify-center mt-15">
            <p className="text-gray-500 font-semibold  ">Featured Projects</p>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-15">
            <div className=" relative group overflow-hidden cursor-pointer bg-[url('/Newbg.png')] bg-cover bg-center h-64 w-75 bg-white shadow-lg lg:w-100 lg:h-80 text-center rounded-lg p-6 hover:bg-amber-50 transition-transform hover:scale-105">
              <div className="absolute inset-0 bg-blue-400/50 opacity-0 group-hover:opacity-100 flex items-center justify-center duration-300 transition"></div>
            </div>

            <div>
              <div className=" relative group overflow-hidden cursor-pointer bg-[url('/blog.png')] bg-cover bg-center  bg-white shadow-lg h-64 w-75 lg:w-100 lg:h-80 text-center rounded-lg p-6 hover:bg-amber-50 transition-transform hover:scale-105">
                <div className="absolute inset-0 bg-blue-400/50 opacity-0 group-hover:opacity-100 flex items-center justify-center duration-300 transition"></div>
              </div>
            </div>
          </div>
          <div className="flex text-center lg:text-start items-center justify-center mt-10">
            <button className="  text-white font-bold px-4 py-2 rounded  bg-indigo-500 hover:bg-indigo-700 transition mt-3 mb-5">
              <a href="/projects">View all project</a>
            </button>
          </div>
        </section>

       

       
      </div>



  <section className="bg-[#A855F7] text-white p-6 mt-15">
          <div className="flex items-center justify-center ">
            <img src="/meai.png" alt="" className=" w-20 h-20 rounded-full " />
          </div>

          <div className="text-center mt-4 text-3xl  text-white font-semibold flex items-center justify-center">
            <p>Interested In Hiring Me For Your Project?</p>
          </div>

          <div className="flex items-center justify-center mt-2 text-white">
            <p>
              Looking for an experienced frontend developer to build your
              responsible website ? To start <br /> an initial chat, just drop
              me an email at{" "}
              <a href="" className="text-gray-600 hover:underline">
                {" "}
                dderick249@gmail.com
              </a>{" "}
              or use the{" "}
              <a href="/contact" className="text-gray-600 hover:underline">
                form on the contact page
              </a>
              .
            </p>
          </div>
          <div className="flex  justify-center">
            <button className=" text-white font-bold px-4 py-2 rounded  bg-indigo-500 hover:bg-indigo-700 transition mt-3 mb-5">
<a href="/contact">Let's Talk</a>
            </button>
          </div>
        </section>








 <div>
  <Footer />
 </div>
        </div>
    );
}
export default About; 