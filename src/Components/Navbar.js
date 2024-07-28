import React from "react";
import logo from "./logo.png";
import txt from "./txt.png";
import {Link} from 'react-scroll';
function Navbar() {
  return (
    <>
      <nav className="overflow-hidden fixed top-0 left-0 w-full z-50 h-12 bg-[#00040F] ">
        <div className="first flex  items-center flex-col md:flex-row sm:justify-around  justify-between  text-white " >
          <div className="flex items-center space-x-4 ">
            <img src={logo} alt="" srcset="" />
            <img src={txt} alt="" srcset="" />
          </div>
          <div className="second hidden md:block text-white sm:my-4 ">
            <ul className="flex items-center justify-end space-x-14  pl-52">
            <li className="cursor-pointer"><Link     to="Home" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            </li>
            <li className="cursor-pointer"><Link     to="Features" spy={true} smooth={true} offset={50} duration={500}>Features</Link>
            </li>
            <li className="cursor-pointer"><Link     to="Product" spy={true} smooth={true} offset={50} duration={500}>Product</Link>
            </li>
            <li className="cursor-pointer"><Link     to="Clients" spy={true} smooth={true} offset={50} duration={500}>Clients</Link>
            </li>
            </ul>
        
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
