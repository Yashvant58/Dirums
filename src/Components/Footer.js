import React from "react";
import {Link} from 'react-router-dom'
import Icon1 from './img/icon/Group 302.png'
import Icon2 from './img/icon/Group 305.png'
import Icon3 from './img/icon/Group 303.png'
import Icon4 from './img/icon/Group 306.png'
import Icon5 from './img/icon/Group 304.png'
function Footer(){
    return(
<footer className="bg-gray-300 py-4 fixed w-full bottom-0">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex space-x-9">
          <Link to="#" className=" hover:text-gray-400">
            <img alt="img" src={Icon1} className="h-7 w-7 text-black"  />
          </Link>
          <Link to="#" className=" hover:text-gray-400">
            <img alt="img" src={Icon2} className="h-7 w-7 text-black "  />
          </Link>
          <Link to="#" className=" hover:text-gray-400">
            <img  alt="img"src={Icon3} className="h-7 w-7 text-black"  />
          </Link>
          <Link to="#" className=" hover:text-gray-400">
            <img alt="img" src={Icon4} className="h-7 w-7 text-black"  />
          </Link>
          <Link to="#" className=" hover:text-gray-400">
            <img  alt="img"src={Icon5} className="h-7 w-7 text-black"  />
          </Link>
        </div>
      </div>
    </footer>
    )
}
export default Footer;