import { useEffect, useState } from "react";

const PopularBooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    fetch("/popular-card-data.json")
      .then((response) => response.json())
      .then((data) => setPopularBooks(data));
  }, []);

  return (
    <div className="my-10 container mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl lg:text-4xl font-semibold text-black">
          Popular Books
        </h2>
        <div className="border-t-2 border-gray-300 w-[25%] md:w-[60%] lg:w-[65%] mt-4"></div>
        <button className="btn rounded-3xl bg-[#F65D4E] text-white px-8">
          View All
        </button>
      </div>
      {/* Popular Book Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 p-2">
        <div className="col-span-1 lg:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {popularBooks.slice(0, 8).map((book) => (
            <div key={book.name} className="col-span-1">
              <div className="flex flex-col ">
                <img
                  className="w-56 h-80 object-cover rounded-xl mb-3 transition-transform hover:scale-105"
                  src={book.image}
                  alt={book.name}
                />
                <div className="text-left">
                  <div className="text-lg font-medium mb-1">{book.name}</div>
                  <div className="flex items-center text-orange-400 mb-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${
                          i < book.ratings ? "text-orange-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927C9.25 2.293 9.905 2 10.618 2c.714 0 1.37.293 1.569.927l1.71 4.68 4.911.743c.752.113 1.065.981.52 1.494l-3.557 3.46.84 4.89c.122.742-.67 1.31-1.354.961L10 15.61l-4.29 2.25c-.683.348-1.475-.219-1.354-.961l.84-4.89-3.557-3.46c-.545-.513-.232-1.38.52-1.494l4.91-.742 1.71-4.68z" />
                      </svg>
                    ))}{" "}
                    <span className="ml-2 text-black font-medium">
                      {book.ratings}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mb-1 font-medium">
                    {book.author}
                  </div>
                  <div className="text-lg font-bold text-[#F65D4E]">
                    ${book.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*Popular Books offer card */}
        <div className="col-span-1 relative">
          <img
            className="h-72 md:h-96 lg:h-full object-cover w-full rounded-xl hover:scale-105 transition-transform "
            src="https://i.ibb.co.com/7Cqj9df/h1-banner1.jpg"
            alt="Offer Image"
          />
          <div className="absolute bottom-[2%] left-1/3 md:left-[40%] lg:bottom-24 lg:left-16 text-white md:space-y-3">
            <h2 className="text-2xl md:text-3xl font-semibold">Best Offer</h2>
            <h1 className="text-3xl md:text-5xl font-bold">Save $15</h1>
            <p>on selected items</p>
            <button className="btn rounded-3xl bg-white md:text-lg text-black px-8">
              See more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
