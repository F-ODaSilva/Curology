import brandLogo from "../assets/logo.jpg"

const Navbar = () => {
    return ( 
        <>
          <nav className="bg-white text-black sm:px-6 md:px-10 py-3">
            {/* General Div */}
            <div className="max-w-3lg flex items-center mx-auto z-50">
              {/* Brand Logo & Name */}
              <div className="flex items-center z-50">
                <img 
                  src={brandLogo} 
                  alt="Curology Brand Logo"
                  className="h-8 w-8 mr-3 brand-logo"
                  />

                  <span className="text-xl font-medium tracking-wider brand-name">
                    Curology
                  </span>
              </div>

              {/* Nav Links (Middle, Flexible) */}
              <div className="flex-grow flex justify-center sm:space-x-6 md:space-x-16 z-50">
                    <a href="#" className="font-medium   hover:overline text-gray-500 hover:text-blue-500 tracking-widest  transition-all duration-150 ease-in-out">
                      Home
                    </a>

                    <a href="#" className="font-medium  hover:overline  text-gray-500 hover:text-blue-500 tracking-widest transition-all duration-150 ease-in-out font-sans font-sm ">
                      About
                    </a>
                    <a href="#" className="font-medium  hover:overline  text-gray-500 hover:text-blue-500 tracking-widest transition-all duration-150 ease-in-out font-sans font-sm ">
                      Products
                    </a>
                    <a href="#" className="font-medium  hover:overline  text-gray-500 hover:text-blue-500 tracking-widest transition-all duration-150 ease-in-out font-sans font-sm ">
                      Testimonials
                    </a>
              </div>

              {/* Sign In & Log In Buttons */}
              <div className="flex items-center space-x-4 z-50">
                <button className="bg-gradient-to-r from-sky-600 to-indigo-800 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-700 px-4 py-1 rounded text-slate-200 hover:text-white text-sm font-medium  ">
                  Log In
                </button>
                <button className="bg-gradient-to-r from-sky-600 to-indigo-800 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-700 px-4 py-1 rounded text-slate-200 hover:text-white text-sm font-medium">
                  Sign In
                </button>
              </div>
            </div>
          </nav>
        </>
    );
};


export default Navbar;