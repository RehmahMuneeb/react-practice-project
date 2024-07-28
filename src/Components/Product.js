import React from 'react'
import pay from './pay.png';
import scan from './scan.png';
function Product() {
  return (
    <div id='Product'>
 <section className="flex flex-col md:flex-row md:justify-center md:items-start mb-10">   
  <div   data-aos="fade-down" className="flex justify-center md:mx-10">  
    <img   
      className="md:w-[800px] w-[80%] h-auto object-contain md:h-[400px] my-5"   
      src={pay}   
      alt=""   
    />  
  </div>  
  <div  data-aos="fade-up" className="flex flex-col justify-center items-start md:w-[65%] w-full md:my-28 md:px-10">  
    <p   className="text-white  font-bold text-2xl md:text-3xl px-6 md:px-0">Easily control your billing & invoicing</p>  
    <p className="text-white opacity-85   md:my-5 px-6 md:px-0">  
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repellendus accusantium voluptatum, repudiandae, vitae modi ipsum quibusdam ipsam libero eaque natus asperiores.  
    </p>  
  </div>   
</section>
<section className="flex flex-col md:flex-row">
  <div  data-aos="fade-right" className="w-full md:w-1/2 md:-mt-7">
    <p className="text-white text-4xl md:text-4xl my-8 font-bold md:ml-12 mx-4 pr-[40px] ">Find a better card deal in few easy steps.</p>
    <p className="text-white opacity-85 w-full  my-5 px-4 md:ml-10  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quia nulla! Deleniti numquam recusandae modi totam voluptas mollitia tempora vero.</p>
    <div>  
         <button className=" btn px-6 py-3 md:ml-12 text-black font-semibold text-xs p-2 rounded-xl  mx-4">Get Started</button> 
      </div>
  </div>
  <div  data-aos="zoom-in" className="md:-mt-16">
   <img className="  md:ml-28 my-6 md:my-0 lg:w-[900px] md:w-[400px] w-[300px] h-[300px] object-contain md:h-[400px]" src={scan} alt="" />
  </div>
</section> 
    </div>
  )
}

export default Product
