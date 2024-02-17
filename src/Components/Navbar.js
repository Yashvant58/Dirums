import React from 'react'
import { Link } from "react-router-dom";
import Logo from "./img/logo.png"
import Fram from "./img/Frame 50.png"

function Navbar() {
    return(
        <div>
            <div className=' bg-black text-white text-center '>Worldwide Shipping* | Free Returns* | Handpicked Artworks</div>
            <div  className='bg-black text-center flex justify-evenly content-around' >
                <div><img alt="logo" width={100} height={12} src={Logo}/></div>
                <div className=' w-1/2 text-center p-3 pt-4'><input  className='w-full pl-2 p-1 rounded-md' type='search' placeholder='Search for artworks, artists, themes and many more'/></div>
                <div ><img alt="Frame" className='pt-5' width={90} height={20}src={Fram}/></div>
            </div>
                
            <div className=' w-full bg-[#CC8E51] hidden md:flex items-center justify-center text-white'>
                <Link to="./artworks"><div className='btn p-2 rounded-none  min-w-[12vw] lg:text-lg md:text-base font-normal text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]'>Artworks for wall</div></Link>
                <Link to="#"><div className='btn p-2 rounded-none  min-w-[12vw] lg:text-lg md:text-base font-normal text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]'>Wildlife paintings</div></Link>
                <Link to="#"><div className='btn p-2 rounded-none  min-w-[12vw] lg:text-lg md:text-base font-normal text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]'>Home & Living</div></Link>
                <Link to="#"><div className='btn p-2 rounded-none  min-w-[12vw] lg:text-lg md:text-base font-normal text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]'>Painting for living room</div></Link>
                <Link to="#"><div className='btn p-2 rounded-none  min-w-[12vw] lg:text-lg md:text-base font-normal text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]'>Folk art & craft</div></Link>
                <Link to="#"><div className='btn p-2 rounded-none  min-w-[12vw] lg:text-lg md:text-base font-normal text-[14px] normal-case bg-transparent text-white border-none hover:bg-[#cfa374]'>Religious Paintings</div></Link>
            </div>
        </div>
    )
}
export default Navbar