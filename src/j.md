  .gradient-text {  
    background: radial-gradient(circle, #def9fa, #bef3f5, #9dedf0, #7de7eb, #5ce1e6, #33bbcf);  
    -webkit-background-clip: text;  
    -webkit-text-fill-color: transparent;  
    background-clip: text;  
  }  
</style>  

<!-- HTML -->  
<div class="absolute top-[-85px] z-0 w-[10rem] h-[10rem] bg-indigo-500"></div>  
<div class="absolute bottom-[12rem] z-10 w-[20rem] h-[20rem] bg-blue-500"></div>  
<div class="absolute right-[8rem] bottom-[12rem] z-0 w-[14rem] h-[14rem] bg-red-500"></div>  

<span class="gradient-text text-4xl">Gradient Text</span>
     <nav className="bg-light-blue-200">  
      <div className="container mx-auto flex justify-between items-center p-4">  
          {/* Toggler Button */}  
          <button  
            className="navbar-toggler bg-light-blue-200 text-white hover:text-gray-200 focus:outline-none"  
            type="button"  
            aria-controls="navbarSupportedContent"  
            aria-expanded="false"  
            aria-label="Toggle navigation"  
          >  
            <span className="navbar-toggler-icon text-white"></span>  
          </button>  

          {/* Brand Logos */}  
          <a className="navbar-brand" href="#">  
            <img src={logo} alt="Logo" className="h-8" />  
          </a>  
          <a className="navbar-brand" href="#">  
            <img src={txt} alt="Text Logo" className="h-8" />  
          </a>  

          {/* Navbar Links */}  
          <div className="hidden md:flex space-x-4" id="navbarSupportedContent">  
            <ul className="flex space-x-4">  
              <li>  
                <a className="text-light hover:text-gray-200" href="#">  
                  Home  
                </a>  
              </li>  
              <li>  
                <a className="text-light hover:text-gray-200" href="#">  
                  About Us  
                </a>  
              </li>  
              <li>  
                <a className="text-light hover:text-gray-200" href="#">  
                  Features  
                </a>  
              </li>  
              <li>  
                <a className="text-light hover:text-gray-200" href="#">  
                  Solutions  
                </a>  
              </li>  
            </ul>  
          </div>  
        </div>  
      </nav>  
    </>  
  ); 
    <div class="w-px h-8 bg-gray-500 mx-2">
         <p className="text-white opacity-85 w-72 my-3">
              With the right credit card, you can improve your financial life by
              building credits, earning rewards and saving money. But with
              hundreds of credit card in the market.
            </p>
                 <p className="text-white text-6xl font-bold mx-28 my-3">
            You do the business, we'll handle the money.
          </p
                 <section className="flex flex-col md:flex-row  "> 
  <div>
  <img className="md:my-5 md:pl-36 mx-16  sm:text-center md:w-[600px] w-[300px] h-[300px] object-contain md:h-[400px]" src={pay} alt="" srcSet="" />
  </div>
  <div className="md:w-1/2 w-full md:my-28 md:pl-52  md:mx-10">
   <p className="text-white p-6 md:p-0 font-bold text-3xl">Easily control your billing & invoicing</p>
   <p  className="text-white p-6 md:p-0 opacity-85 md:my-5"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repellendus accusantium voluptatum, repudiandae, vitae modi ipsum quibusdam ipsam libero eaque natus asperiores. Asperiores.</p>
  </div>
</section> 
<section className="flex flex-col md:flex-row md:items-center">  
  <div className="w-full md:w-1/2">  
    <p className="text-white text-4xl my-8 font-bold mx-4 md:mx-20 md:pl-20 md:my-16">Find a better card deal in a few easy steps.</p>  
    <p className="text-white opacity-85 my-5 mx-4 md:mx-20">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil, quia nulla! Deleniti numquam recusandae modi totam voluptas mollitia tempora vero.</p>  
    <div className="flex justify-center md:justify-start">  
      <button className="btn px-6 py-3 text-black font-semibold text-xs rounded-xl mx-4 md:mx-0">Get Started</button>  
    </div>  
  </div>  
  <div className="flex justify-center mt-6 md:mt-0">  
    <img className="w-[300px] h-[300px] object-contain md:w-[400px] md:h-[400px] mx-auto md:ml-10" src={scan} alt="Illustration" />  
  </div>  
</section>