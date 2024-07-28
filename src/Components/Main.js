import React from "react";
import shape from "./shape.png";
import card from "./card.png";
import AOS from 'aos';

function Main() {
  return (
    <>
    {/* section 1 */}
      <section className="px-4 md:my-28" id="Home">
        <div className="logo  inline-block sm:pl-[40px]  sm:px-5 ">
          <img src={shape} alt="" className="inline mx-2" />
          <span className="text-white">20%</span>{" "}
          <span className="text-gray-400 ">DISCOUNT FOR</span>{" "}
          <span className="text-white ">1 MONTH</span>{" "}
          <span className="text-gray-400 ">ACCOUNT</span>
        </div>
        <div  className="container flex flex-col md:flex-row  items-center">
          <div className="first flex-1 ">
            <p  className="text-4xl   md:text-6xl     sm:mx-6  my-3 font-bold text-white ">
        The Next <span id="hello" className="span">Generation</span> Payment Method.
            </p>
            <div className=" my-9">
              <p  data-aos="fade-right" className="text-white opacity-85 w-full my-3  md:ml-7 ">
                Our team of experts uses a methadology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
            </div>
          </div>
          <div className="flex-1  w-full md:w-1/2 flex-col md:flex-row ">
            <img    data-aos="fade-left"  src={card} className="md:mx-24 " alt="" srcSet="" />
          </div>
        </div>
      </section>
      {/* section two */}
      <section>  
    <div className="text-white flex flex-col md:flex-row text-center justify-between font-bold my-16 md:px-52">  
        <div className="flex flex-col items-center mb-4 md:mb-0">  
            <span className="text-3xl my-1 mx-3">3800+</span>  
            <span className="span my-3">USER ACTIVE</span>  
        </div>  
        <div className="w-px h-8 bg-gray-500 mx-5 hidden md:block" />  
        <div className="flex flex-col items-center mb-4 md:mb-0">  
            <span className="text-3xl my-1 mx-3">230+</span>  
            <span className="span my-3">TRUSTED BY COMPANY</span>  
        </div>  
        <div className="w-px h-8 bg-gray-500 mx-5 hidden md:block" />  
        <div className="flex flex-col items-center">  
            <span className="text-3xl my-1 mx-3">$230M+</span>  
            <span className="span my-3">TRANSACTION</span>  
        </div>  
    </div>  
</section>
{/* section 9 */}


    </>
  );
}

export default Main;
