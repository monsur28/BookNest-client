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
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold mb-6">Latest Blog Post</h2>
        <button className="bg-red-500 text-white px-6 py-2 rounded-full">
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
