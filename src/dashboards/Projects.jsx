import Nav from "../landing-page/Nav";

function Projects(aosProps) {
  return (
    <div {...aosProps}>
      <div>
        <Nav />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 mt-15">
        <div className=" relative group overflow-hidden cursor-pointer bg-[url('/Newbg.png')] bg-cover bg-center w-75 h-74 bg-white shadow-lg lg:w-100 lg:h-80 text-center rounded-lg p-6 hover:bg-amber-50  transition-transform hover:scale-105 ">
          <div className="absolute inset-0 bg-blue-200/40 opacity-0 group-hover:opacity-100 flex items-center justify-center duration-300 transition"></div>
        </div>

        <div>
          <div className=" relative group overflow-hidden cursor-pointer bg-[url('/blog.png')] bg-cover bg-center  bg-white shadow-lg w-75 h-74 lg:w-100 lg:h-80 text-center rounded-lg p-6 hover:bg-amber-50 transition-transform hover:scale-105">
            <div className="absolute inset-0 bg-blue-200/40 opacity-0 group-hover:opacity-100 flex items-center justify-center duration-300 transition"></div>
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

export default Projects;
