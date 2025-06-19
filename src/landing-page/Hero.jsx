


function Hero(aosProps) {
  return (
    <div className="bg-[#fafafa]">
  <div data-aos="fade-down" data-aos-delay="100" className=" min-h-screen flex flex-col lg:flex-row items-center   max-w-[1000px] mx-auto">
<div className=" text-center mx-auto space-y-6 px-3 pt-6 md:text-left md:pt-20">
  <h2 className="text-2xl md:block flex items-center justify-center font-semibold text-[#1d1d1d] ">Hey, I'm DERICK</h2>
  <h1 className="md:text-6xl text-4xl font-extrabold ">
    <span className="text-[#A855F7]">Front</span>
     <span className="text-[#1d1d1d] ">end</span> <br />
      <span className="text-[#1d1d1d] ">Developer</span>
  </h1>

  <p className="md:max-w-1/2 text-[#737373] text-base md:text-lg">I'm a frontend developer based in Nigeria, I'll help you build   beautiful websites your users will love.</p>

<div className="flex items-center justify-center md:block gap-4">
          <button className="bg-black text-white px-4 py-3 md:px-6 md:py-3 rounded-lg font-medium hover:bg-[#A855F7] transition duration-200">

<a href="/contact"> Get In Touch
</a>          </button>
          <button className="bg-[#f4f4f5] text-black px-4 py-3 md:px-6 md:py-3 rounded-lg shadow-sm font-medium hover:bg-[#A855F7] transition duration-200">
            <a href="/projects">Browse Projects</a>
          </button>
        </div>

</div>

<div className="mt-16">
<div className="relative w-[270px] md:w-[450px] md:h-120 rounded-full border border-[#A855F7] p-4">
  <img src="/meai.png" alt="" className="rounded-full object-cover w-[260px] md:w-full md:h-full grayscale"/>
</div>
</div>



  </div>
  </div>
  );
}

export default Hero;
