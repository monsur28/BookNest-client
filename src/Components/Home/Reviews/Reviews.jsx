const Reviews = () => {
  return (
    <div className="px-20">
      <div className=" bg-Community bg-cover bg-no-repeat py-20 px-5 rounded-lg">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-white font-bold my-2">
              Get <span className=" text-orange-600">10%</span> off your order!
            </h1>

            <p className=" font-medium text-white">
              Enter your email and receive a 10% discount on your next order!
            </p>
          </div>
          <div>
            <div class="flex rounded-3xl my-2 overflow-hidden max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"
              />
              <button
                type="btn"
                class="flex items-center justify-center bg-orange-500 px-5 text-sm font-semibold text-white"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
