"use client";

import { Button } from "@/components/ui/button"
export default function Component() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-start max-w-2xl">
        <h2 className="text-3xl font-bold leading-tight text-gray-900" style={{textTransform:'uppercase'}}>Latest Blog Articles</h2>
        <div className="mt-4 mb-12 h-1 w-24 bg-black" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col">
          <img
            alt="Choose the right property"
            className="h-[18rem] w-full object-cover rounded-lg mb-4"
            height="200"
            src="/blog-1.png"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h3 className="text-lg font-semibold">Lorem Ipsum</h3>
          <p className="text-sm text-gray-600 mt-1">Workshops</p>
          <div className="py-2">
       
          </div>
        </div>
        <div className="flex flex-col">
          <img
            alt="Best environment for rental"
            className="h-[18rem] w-full object-cover rounded-lg mb-4"
            height="200"
            src="/blog-2.png"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h3 className="text-lg font-semibold">Best environment for rental</h3>
          <p className="text-sm text-gray-600 mt-1">Lifestyle</p>
          <div className="py-2">
       
          </div>
        </div>
        <div className="flex flex-col">
          <img
            alt="Boys Hostel Apartment"
            className="h-[18rem] w-full object-cover rounded-lg mb-4"
            height="200"
            src="/blog-3.png"
            style={{
              aspectRatio: "200/200",
              objectFit: "cover",
            }}
            width="200"
          />
          <h3 className="text-lg font-semibold">Boys Hostel Apartment</h3>
          <p className="text-sm text-gray-600 mt-1">Property</p>
          <div className="py-2">
        
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
      <Button variant='outline' className="bg-[#00224d] rounding-2 text-white  border-[#00224d] " style={{borderRadius:'20px'}}>
          View All Blogs</Button>
      </div>
    </div>
  )
}

