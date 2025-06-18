import { FaCode, FaCheckCircle } from "react-icons/fa";

function Hero( aosProps ) {
  const skills = ["React", "JavaScript", "HTML", "CSS"];
  const learningSkills = ["Python", "C++", "Java", "Node.js"];
  return (
    <div {...aosProps}className="max-w-[1400px] mx-auto ">
      <div className="flex items-center justify-center flex-col lg:flex-row gap-15 px-5 py-5 bg-blue-400 text-white">
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

      <div className="mt-10 ">
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
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
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
                  <FaCheckCircle className=" mr-2 text-blue-500" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className=" bg-white shadow-md w-80 text-center rounded-lg p-6 hover:bg-blue-300/40 transition-transform hover:scale-105">
          <div className=" flex items-center justify-center mb-10">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
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
                  <FaCheckCircle className=" mr-2 text-blue-500" />
                  {learningSkills}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
