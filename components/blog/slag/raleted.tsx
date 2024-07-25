"use client";
import Link from 'next/link'
const RaletedBlog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
        <Link href="/blog/blog-1">
          <img
            alt="Choose the right property"
            className="h-[18rem] w-full object-cover rounded-lg mb-4"
            height="200"
            src="/blog-1.png"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover", borderRadius:'10px'
            }}
            width="200"
          />
          <h3 className="text-lg font-semibold">Lorem Ipsum</h3>
          <p className="text-sm text-gray-600 mt-1">Workshops</p>
          <div className="py-2">
       
          </div>
          </Link>
        </div>
        <div className="flex flex-col">
        <Link href="/blog/blog-1">
          <img
            alt="Best environment for rental"
            className="h-[18rem] w-full object-cover rounded-lg mb-4"
            height="200"
            src="/blog-2.png"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover", borderRadius:'10px'
            }}
            width="200"
          />
          <h3 className="text-lg font-semibold">Best environment for rental</h3>
          <p className="text-sm text-gray-600 mt-1">Lifestyle</p>
          <div className="py-2">
       
          </div>
          </Link>
        </div>
        <div className="flex flex-col">
        <Link href="/blog/blog-1">
          <img
            alt="Boys Hostel Apartment"
            className="h-[18rem] w-full object-cover rounded-lg mb-4"
            height="200"
            src="/blog-3.png"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover", borderRadius:'10px'
            }}
           
            width="200"
          />
          <h3 className="text-lg font-semibold">Boys Hostel Apartment</h3>
          <p className="text-sm text-gray-600 mt-1">Property</p>
          <div className="py-2">
        
          </div>
          </Link>
        </div>
      </div>
      </div>

  );
};

export default RaletedBlog;
