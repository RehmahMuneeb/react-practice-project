import React from 'react'
import double from './double.png';
import g from './g.png';
import b from './b.png';
import m from './m.png';
function Clients() {
  return (
    <div id='Clients'>
      <section className="flex flex-col md:flex-row">
  <div  className="md:w-1/2 w-full">
    <p className="text-white px-3 md:px-0 text-4xl md:ml-11 md:my-16 font-bold">What people are saying about us</p>
    </div>
  <div className="my-6 md:my-0">
    <p className="text-white  opacity-85 w-full my-7
     md:my-20 px-4 md:ml-32">Everyone you need to accept card payments <br /> and grow your business anywhere on the planet</p>
  </div>
</section> 
{/* section 7 */}
<section className="flex flex-col md:flex-row justify-between ">
  <div  data-aos="zoom-in"  className="bg-[linear-gradient(144.39deg,_#FFFFFF_-278.56%,_#6D6D6D_-78.47%,_#11101D_91.61%)] cursor-pointer h-72 w-full text-white   sm:w-full my-5
     md:my-16 px-4  md:ml-10 md:w-1/4   bg-[#30343e] p-3 rounded-2xl md:mb-0 mb-8">
    <img src={double} alt="" srcSet="" />
    <p className="text-white my-5 ">Money is only a tool. It will take you wherever you want, but it will not replace you as a driver</p>
    <img src={g}  alt="" className="inline-block" srcSet="" /> <span className="text-white font-bold">Herman Jensen</span><br /><span className="text-white  opacity-85 mt-10">Founder & Leader</span>
  </div>
  <div  data-aos="zoom-in"  className="md:w-1/4 px-2 md:px-4 md:my-16 my-5  p-1 mx-3 md:mx-0  rounded-3xl cursor-pointer hover:bg-[linear-gradient(144.39deg,_#FFFFFF_-278.56%,_#6D6D6D_-78.47%,_#11101D_91.61%)] h-72 w-full ">
    <img src={double} className="mx-4" alt="" srcSet="" />
    <p className="text-white mr-8 my-5 ">Money makes your life easier. If you're lucky to have it you're lucky.</p>
    <img src={b}  alt="" className="inline-block  my-4" srcSet="" /> <span className="text-white font-bold ">Steve Mark</span><br /><span className="text-white  opacity-85 ">Founder & Leader</span>
  </div>
  <div  data-aos="zoom-in"  className="md:w-1/4 cursor-pointer md:my-16  p-1 px-2 md:px-4 mx-3 md:mx-0  my-4 rounded-3xl hover:bg-[linear-gradient(144.39deg,_#FFFFFF_-278.56%,_#6D6D6D_-78.47%,_#11101D_91.61%)] h-72 w-full ">
    <img src={double} className="md:mx-4"  alt="" srcSet="" />
    <p className="text-white  my-5">It is usually people in the money business, finance and <br /> international trade that are really rich</p>
    <img src={m}  alt="" className="inline-block " srcSet="" /> <span className="text-white font-bold">Ken Gallaghar</span><br /><span className="text-white  opacity-85">Founder & Leader</span>
  </div>
</section> 
    </div>
  )
}

export default Clients
