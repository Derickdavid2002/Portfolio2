import Nav from "../landing-page/Nav";

function Blogs(aosProps) {
  return (
    <div {...aosProps}>
      <div>
        <Nav />
      </div>
      <div className="flex items-center gap-15 px-5 py-5 bg-blue-400 text-white">
        <div>
          <img src="/me.png" alt="" className=" mt-10 c w-[300px] h-[300px]" />
        </div>

        <div>
          <p className="font-semibold text-4xl mt-2">Derick David's Blog </p>
          <p className="mt-2">
            I write about web development and responsive website. <br />
            You can follow me via the various channels below:
          </p>
          <div className="flex gap-9 mt-5">
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
              <img
                src="/twitter.png"
                alt=""
                className="w-[30px] h-[24px] mt-2"
              />
            </a>
          </div>
        </div>
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











      <footer>
        <p className="text-sm flex items-center justify-center bg-gray-500 text-gray-400 py-3 mt-25">
          @ 2025 Derick David
        </p>
      </footer>
    </div>
  );
}

export default Blogs;
