


const Banner = () => {
  

  

  
  
  return (
    <div
  className="hero min-h-screen"
  >
  <div className="hero-overlay bg-[#00453E]"></div>
        <div className="container flex flex-col justify-center p-1 mx-auto sm:py-12 lg:py-4 lg:flex-row lg:justify-between">
      
        <div className="w-full  mx-auto flex  shadow-lg rounded-lg h-[600px]  overflow-hidden">
    {/* Left Side: Image */}
    <div className="w-1/2 p-8 flex flex-col justify-center border-2 text-white">


    <h2 className="text-4xl font-bold mb-4">Welcome to Our Service</h2>
      <p className=" text-white mb-6">
        Experience the best services with us. Enjoy exclusive offers and deals now!
      </p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Get Started
      </button>
      
    </div>

    {/* Right Side: Content */}
    <div className="w-1/2  border-2">
    <img
        src="https://via.placeholder.com/600x400"
        alt="Banner Image"
        className="object-cover w-full h-full"
      />
    </div>
  </div>



      
        </div>
  
   </div>
  );
};

export default Banner;
