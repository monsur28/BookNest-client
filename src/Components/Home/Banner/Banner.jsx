
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
  

  

  
  
  return (
    <div
  className="hero min-h-screen mb-20"
  >
  <div className="hero-overlay bg-[#00453E]"></div>
        





        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  <div className="container flex flex-col justify-center p-1 mx-auto sm:py-12 lg:py-4 lg:flex-row lg:justify-between">
 
      <div className="w-full  mx-auto flex  flex-col md:flex-row  overflow-hidden">
  {/* Left Side: Image */}
  <div className="w-1/2 p-8 flex flex-col justify-center  text-white">


  <h2 className="mx-auto uppercase font-light">special offer</h2>
    <p className=" text-white mb- mx-auto font-bold text-[50px] text-center">
      Reading is for<br/> all Ages
    </p>
    <h4 className="font-semibold text-xl mx-auto mb-[40px]">By your books In a store</h4>
    <button className="bg-[white] text-[black] px-4 py-2 rounded-full  w-[150px] mx-auto font-semibold ">
      <span className="flex w-[100px] mx-auto">Shop Now <IoIosArrowForward className="ml-1 mt-1 text-[brown]" /></span>
      
    </button>
    
  </div>

  {/* Right Side: Content */}
  <div className="w-1/2  flex p-20">
  <img
      src="https://i.ibb.co.com/fYKVzJB/36809135.jpg"
      alt="Banner Image"
      className="max-w-sm rounded-lg shadow-2xl w-1/3 skew-y-12 my-0 rotate-180 border-2 mt-15"
    />

<img
      src="https://i.ibb.co.com/gFfKgc4/prison-journalism-obama-becoming-review-111822.jpg"
      alt="Banner Image"
      className="max-w-sm rounded-lg shadow-2xl w-1/3 skew-x-12 my-0 rotate-100 border-2 mt-20"
    />

<img
      src="https://i.ibb.co.com/8jKkLGf/the-subtle-art-of-not-giving-a-fck-by-mark-manson-4.jpg"
      alt="Banner Image"
      className="max-w-sm rounded-lg shadow-2xl w-1/3 skew-y-12 my-0 rotate-150 border-2 mt-15"
    />
  </div>
</div>



    
      </div>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  
 
 
</div>

  
   </div>
  );
};

export default Banner;
