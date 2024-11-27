import brandLogo from "../assets/logo.jpg"

const Navbar = () => {
    return ( 
        <>
            <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-4">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        {/* Logo Image */}
        <img 
          src="/path-to-logo.png" 
          alt="Logo" 
          className="h-8 w-8" 
        />
        {/* Logo Text */}
        <span className="text-xl font-semibold">My App</span>
      </div>

      {/* Links Section */}
      <ul className="flex space-x-8 items-center">
        <li>
          <a href="#home" className="hover:text-gray-400">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-400">About</a>
        </li>
        <li>
          <a href="#products" className="hover:text-gray-400">Products</a>
        </li>
        {isSignedIn ? (
          /* Profile Image for Signed-In Users */
          <li>
            <img 
              src={profileImage || "/default-profile.png"} 
              alt="Profile" 
              className="h-10 w-10 rounded-full border-2 border-gray-600 hover:border-gray-400 cursor-pointer" 
            />
          </li>
        ) : (
          /* Sign-In Button for Non-Signed-In Users */
          <li>
            <button className="bg-blue-600 hover:bg-blue-500 text-white py-2 px-4 rounded">
              Sign In
            </button>
          </li>
        )}
      </ul>
    </nav>
        </>
    );
};


export default Navbar;