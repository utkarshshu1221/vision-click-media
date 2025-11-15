import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-black/95 shadow-lg py-2"
      : "bg-black/90 backdrop-blur-md border-b border-cyan-400/20 py-4"
  }`}
>
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8">
    {/* Logo */}
    <div className="flex items-center gap-2 font-bold text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
      <img
        src={logo}
        alt="logo"
        className={`transition-all duration-300 ${
          scrolled ? "h-24" : "h-12"
        } w-auto object-contain`}
      />
      <span className="hidden sm:inline">VisionClick Media</span>
    </div>

    {/* Desktop Links */}
    <ul className="hidden md:flex gap-8 text-white font-medium">
      {["Home","About","Services","Portfolio","Blog","Contact"].map((item) => (
        <li key={item}>
          <Link
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="relative transition hover:text-cyan-400 after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-gradient-to-r from-cyan-400 to-blue-500 hover:after:w-full after:transition-all"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>

    {/* Mobile Menu Button */}
    <button
      className="md:hidden flex flex-col gap-1.5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <span className="w-6 h-0.5 bg-cyan-400 transition"></span>
      <span className="w-6 h-0.5 bg-cyan-400 transition"></span>
      <span className="w-6 h-0.5 bg-cyan-400 transition"></span>
    </button>
  </div>

  {/* Mobile Dropdown */}
  {open && (
    <ul className="md:hidden flex flex-col gap-4 bg-black/95 backdrop-blur-md shadow-lg px-4 py-6 text-white font-medium">
      {["Home","About","Services","Portfolio","Blog","Contact"].map((item) => (
        <li key={item} className="border-b border-cyan-400/20 pb-2">
          <Link
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className="hover:text-cyan-400 transition text-center block w-full"
          >
            {item}
          </Link>
        </li>
      ))}
    </ul>
  )}
</nav>
);
}




// // src/components/Navbar.jsx
// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import logo from "../assets/logo.png";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     setOpen(false);
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [pathname]);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="nav-container">
//         <div className="logo" id="companyName">
//           <img src={logo} alt="logo" />
//           VisionClick Media
//         </div>

//         <ul className="nav-links" style={{ display: open ? "flex" : "" }}>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/services">Services</Link></li>
//           <li><Link to="/portfolio">Portfolio</Link></li>
//           <li><Link to="/blog">Blog</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>

//         <div className="mobile-menu" onClick={() => setOpen(!open)}>
//           <span></span><span></span><span></span>
//         </div>
//       </div>
//     </nav>
//   );
// }
