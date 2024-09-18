import { useState, useEffect } from "react";

const BlogPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/blog.json")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="container mx-auto bg-gray-50 p-8">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl lg:text-4xl font-semibold text-black">
          Latest Blog Post
        </h2>
        <div className="border-t-2 border-gray-300 w-[25%] md:w-[60%] lg:w-[65%] mt-4"></div>
        <button className="btn rounded-3xl bg-[#F65D4E] text-white px-8">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-6">
          {posts.slice(0, 4).map((post) => (
            <div key={post.id} className="flex items-center space-x-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-28 h-20 object-cover rounded-md"
              />
              <div>
                <p className="text-gray-400 text-sm">{post.date}</p>
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 space-y-6">
          {posts.slice(3, 4).map((post) => (
            <div key={post.id} className="relative rounded-lg overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black"></div>
              <div className="absolute bottom-0 left-0 px-8 pt-52 w-full h-full">
                <p className="text-white text-sm">{post.date} / BY ADMIN</p>
                <h3 className="text-white text-2xl font-bold mt-2">
                  {post.title}
                </h3>
                <button className="text-white mt-6 underline">Read More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {posts.slice(0, 4).map((post) => (
            <div key={post.id} className="flex items-center space-x-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-28 h-20 object-cover rounded-md"
              />
              <div>
                <p className="text-gray-400 text-sm">{post.date}</p>
                <h3 className="text-lg font-semibold">{post.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
