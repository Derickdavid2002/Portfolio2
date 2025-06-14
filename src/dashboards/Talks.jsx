import Nav from "../landing-page/Nav";


function Talks (aosProps) {
    return (
        <div {...aosProps}>
         <div>
            <Nav />
         </div>
 <div className="bg-blue-400 p-10 ">
        <p className=" text-white font-bold text-3xl">Talks</p>

        <p className="text-white mt-4  text-2xl">Want me to walk at your firm or projects? <a className="hover:underline text-gray-500"href="/contact">Get In Touch</a></p>
      </div>



 <div className="flex items-center justify-center mt-10">
        <img src="/me.png" alt="" className="rounded-full w-30 h-30" />
      </div>

      <div className="flex items-center justify-center  p-7">
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






  <section className="bg-blue-400 text-white p-6 mt-15">
          <div className="flex items-center justify-center ">
            <img src="/me.png" alt="" className=" w-20 h-20 rounded-full " />
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








  <footer>
          <p className="text-sm flex items-center justify-center bg-gray-500 text-gray-400 py-3">
            @ 2025 Derick David
          </p>
        </footer>
        </div>
    );
}
export default Talks; 