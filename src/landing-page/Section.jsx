import Marquee from "react-fast-marquee";

function Section({ aosProps }) {
  const ocube = ["Html&Css&JS"];

  return (
    <div {...aosProps}className="max-w-[1400px] mx-auto bg-gray-100">
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

        <section className="bg-blue-400 text-white p-6 mt-15">
          <div className="flex text-center lg:text-start items-center justify-center ">
            <img src="/me.png" alt="" className=" w-20 h-20 rounded-full " />
          </div>

          <div className="text-center  mt-4 text-3xl  text-white font-semibold flex items-center justify-center">
            <p>Interested In Hiring Me For Your Project?</p>
          </div>

          <div className="flex text-center mt-5 px-4 lg:text-start items-center justify-center  text-white">
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
          <div className="flex  text-center lg:text-start justify-center">
            <button className=" text-white font-bold px-4 py-2 rounded  bg-indigo-500 hover:bg-indigo-700 transition mt-3 mb-5">
<a href="/contact">Let's Talk</a>
            </button>
          </div>
        </section>

        <footer>
          <p className="text-sm text-center lg:text-start flex items-center justify-center bg-gray-500 text-gray-400 py-3">
            @ 2025 Derick David
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Section;
