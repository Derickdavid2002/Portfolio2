import Nav from "../landing-page/Nav";



function Contacts( aosProps) {


  
  return (
    <div {...aosProps} >
      <div>
        <Nav />
      </div>

      <div className="bg-blue-400 p-10 ">
        <p className=" text-white flex justify-center lg:justify-start font-bold text-3xl">Contacts</p>
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

      <section>
        <div className="flex items-center justify-center  p-7">
          <div className="max-w-4xl w-full p-20 bg-white rounded-lg shadow-lg text-center">
            <p className="flex justify-center text-gray-500 items-center text-2xl font-bold mb-8">
              Get In Touch
            </p>
            <form action="">
              <div className="flex gap-3 flex-col lg:flex-row mb-4 ">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="your name"
                  className="mt-1 block w-full border border-gray-300 rounded-md  p-2 "
                />

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="youremail@gmail.com"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 "
                />
              </div>

              <div>
                <input
                  type="message"
                  id="enter message"
                  name="enter message"
                  placeholder="enter your message"
                  className="mt-1 block w-full h-50 border border-gray-300 rounded-md p-2  "
                />

                <button className="py-3 px-4 w-full bg-blue-400 rounded-md mt-2 text-white font-semibold">
                  Send It
                </button>
              </div>
            </form>
          </div>
        </div>

        <footer>
          <p className="text-sm flex items-center justify-center bg-gray-500 text-gray-400 py-3">
            @ 2025 Derick David
          </p>
        </footer>
      </section>
    </div>
  );
}

export default Contacts;
