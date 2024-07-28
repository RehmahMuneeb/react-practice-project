import React from 'react'
import check from './check.png';
import dm from './dm.png';
import star from './star.png'
function About() {
  return (
    <div id='Features'>
             <section className="flex flex-col md:flex-row md:justify-between">  
  <div  className="left container flex flex-col md:flex-row md:w-1/2">  
    <div  data-aos="zoom-out" className="flex flex-1 flex-col justify-center">  
      <p  className="text-white text-4xl  font-bold mx-4  md:ml-9 my-3">  
        You do the business, we'll handle the money.  
      </p>  
      <p   className="text-white opacity-85 w-full  my-5 px-4 md:ml-5 ">  
        With the right credit card, you can improve your financial life by  
        building credits, earning rewards, and saving money. But with  
        hundreds of credit cards in the market.  
      </p>  
      <div>  
         <button   className=" btn px-6 py-3 rounded-xl text-black text-xs font-semibold p-2 md:ml-8 mx-4">Get Started</button> 
      </div>
    </div>  
  </div>  
  <div className="right  w-full flex flex-col md:space-x-10 p-8 md:my-10 md:p-5 md:w-1/2 ">  
    <div  data-aos="fade-left"  className="hover:bg-[linear-gradient(144.39deg,_#FFFFFF_-278.56%,_#6D6D6D_-78.47%,_#11101D_91.61%)] cursor-pointer rounded-xl p-2  md:pl-10">
      <img  className=" inline-block" src={star} alt="" srcSet="" />
     <span className="text-white font-bold ">Rewards</span>
      <br />
      <span className="text-white  opacity-85 ">
      The best credit card after some tantalizing combinations of promotions and prizes.</span>
    </div>
    <div  data-aos="fade-left"   className='hover:bg-[linear-gradient(144.39deg,_#FFFFFF_-278.56%,_#6D6D6D_-78.47%,_#11101D_91.61%)] cursor-pointer rounded-xl p-2 '>
      <img className="inline-block" src={check} alt="" srcSet="" />
  
      <span className="text-white font-bold">100% Secured</span>
      <br />
      <span className="text-white  opacity-85 ">
      We take proactive steps make sure your information and transaction are secured.</span>
    </div>
    <div  data-aos="fade-left"   className='hover:bg-[linear-gradient(144.39deg,_#FFFFFF_-278.56%,_#6D6D6D_-78.47%,_#11101D_91.61%)] cursor-pointer rounded-xl p-2'>
      <img className="inline-block" src={dm} alt="" srcSet="" />
      <span className="text-white font-bold">Balance Transfer</span>
      <br />
      <span className="text-white  opacity-85 ">
        A balance transfer credit card can save you a lot of money in interest charges.
    </span>
    </div>
  </div>  
</section> 
    </div>
  )
}

export default About
