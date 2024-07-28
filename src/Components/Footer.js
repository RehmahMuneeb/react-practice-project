import React from 'react'
import logo from './logo.png';
import txt from './txt.png';
import All from './All.png'
import bin from './bin.png';
import coin from './coin.png';
import drop from './drop.png';
import Vector from './Vector.png'
import Topbtn from './Topbtn';

function Footer() {
  return (
    <>
    <Topbtn/>
     <section className="flex flex-col md:flex-row  md:my-16 md:justify-evenly text-center" >
<div className="md:px-10  hidden md:block ">
  <img className="inline-block  md:mb-5 my-2 h-10 d:my-0  md:pl-4" src={Vector} alt="" srcSet="" />
</div>
<div  className="px-5  hidden md:block">
  <img className="inline-block my-2  md:my-0 md:mb-3 h-8" src={bin} alt="" srcSet="" />
</div>
<div className="md:px-5  hidden md:block" >
  <img className="inline-block md:mb-5 my-2 ml-9 md:ml-0  md:my-0 h-7" src={coin} alt="" srcSet="" />
</div>
<div   className="px-5  hidden md:block"> 
  <img className="inline-block md:my-0  my-2 h-8" src={drop} alt="" srcSet="" />
</div >
</section> 
{/* section 10 */}
<section  className="flex  md:text-center  md:justify-center flex-col md:flex-row bg-[linear-gradient(to_bottom,_#FFFFFF_-278.56%,_#6D6D6D_-78.47%,_#11101D_91.61%)] h-72 md:h-52 w-full  md:w-[90%] px-2 md:ml-14  border  border-gray-950 rounded-2xl items-center my-9 pb-8 md:my-0">
  <div  data-aos="zoom-out"  className="items-center ">
<p className="text-white text-4xl mt-9 font-bold mx-4  md:mx-6  md:my-9 md:mt-14">Let's try our services now!</p>
<p className="text-white opacity-85 pl-5  my-6">Everthing you need to accept card payments <br /> and grow your business anywhere on the planet</p>
  </div>
  <div>
  <div  data-aos="fade-left" className=" -mt-4 md:mt-64">  
         <button className="btn-shadow btn  ml-4 md:ml-0  text-black font-semibold p-2 md:px-6 md:py-3   rounded-xl text-xs  md:mr-0 md:mx-4 mb-56">Get Started</button> 
      </div>
  </div>
</section> 
<section className='flex flex-col md:flex-row items-center justify-evenly'>
    <div className='md:mt-16 mt-10'>
        <img src={logo} className='inline-block  h-12' alt="" srcset="" />
        <img src={txt} className='inline-block h-9' alt="" srcset="" />
        <p className='text-white text-sm opacity-60 md:ml-7 mt-10'>A new way to make the payments <br />easy, reliable and secure.</p>
    </div>
    <div className='flex flex-col md:flex-row text-center  md:space-x-24'>
    <div className='md:mt-28 mt-10 ' >
        <h1 className='font-semibold
         text-white text-lg '>Useful Links</h1>
        <ul className='text-white opacity-85 mt-4'>
<li className=' md:my-2 text-white text-sm opacity-85'>Content</li>
<li className=' md:my-2 text-white text-sm opacity-85'>How it works</li>
<li className=' md:my-2 text-white text-sm opacity-85'>Create</li>
<li className=' md:my-2 text-white text-sm opacity-85'>Explore</li>
<li className=' md:my-2 text-white text-sm opacity-85'>Terms of Services</li>
        </ul>
    </div>
    <div className='md:mt-28 mt-10'>
    <h1 className='font-semibold
         text-white text-xl'>Community</h1>
                 <ul className='text-white opacity-85 mt-4'>
<li className='md:my-2 text-white text-sm opacity-85'>Help centers</li>
<li className='md:my-2 text-white text-sm opacity-85'>Partners</li>
<li className='md:my-2 text-white text-sm opacity-85'>Suggestion</li>
<li className='md:my-2 text-white text-sm opacity-85'>Blogs</li>
<li className='md:my-2 text-white text-sm opacity-85'>News letter</li>
        </ul>
    </div>
    <div className='md:mt-28 mt-10'>
    <h1 className='font-semibold text-xl
         text-white'>Partner</h1>
                 <ul className='text-white opacity-85 mt-4'>
<li className= 'md:my-2 text-sm text-white opacity-85'>Our partner</li>
<li className= 'md:my-2 text-sm text-white opacity-85'>Become a partner</li>
        </ul>
    </div>
    </div>

</section>
<hr className=' m-auto opacity-25 mt-7'/>
<footer className='flex flex-col md:flex-row md:space-x-7 items-center justify-center mt-10 md:mt-5 mb-7 '>
<div className=''>
    <p className=' text-sm text-white  opacity-75'>Copyright &copy; &nbsp;  &nbsp; 2021 HooBank All Rights Reserved.</p>
</div>
<div className=' mt-7 md:mt-0 '>
    <img src={All} alt=""  srcset="" />
</div>
</footer>
</>
  )
}

export default Footer
