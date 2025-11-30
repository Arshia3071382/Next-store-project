import React from "react";
import Image from "next/image";

export interface IProduct {
  id: number
  title: string 
  price: number
  description: string
  category: string
  image: string
  rating: Rating
}

export interface Rating {
  rate: number
  count: number
}



function ProductItem({ title, price, description, image }: IProduct) {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200 h-full flex flex-col">
      
      <div className="flex-1 p-4 flex items-center justify-center bg-gray-50 rounded-t-xl">
        <img 
          width={180} 
          height={180} 
          src={image} 
          alt="productImg" 
          className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
     
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h1 className="font-bold text-gray-900 text-sm md:text-base line-clamp-2 leading-tight">
          {title}
        </h1>
        
        <h3 className="text-green-600 font-bold text-lg md:text-xl">
          ${price}
        </h3>
        
        <p className="text-gray-600 text-xs md:text-sm line-clamp-2 leading-relaxed flex-1">
          {description}
        </p>
        
       
        <div className="mt-2 pt-2 border-t border-gray-100">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;