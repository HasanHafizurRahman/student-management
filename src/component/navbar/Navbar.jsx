import { Link } from "react-router-dom";
import Home from "../../routes/Home";
import Contact from "../../routes/Contact";
import About from "../../routes/About";

const Navbar = () => {
  return (
    <div className="w-full bg-gray-600 text-white flex justify-center gap-11 p-5">
      <Link to="/" element={<Home />}>
        Home
      </Link>
      <Link to="/about" element={<About />}>
        About
      </Link>
      <Link to="/contact" element={<Contact />}>
        Contact
      </Link>
    </div>
  );
};

export default Navbar;
