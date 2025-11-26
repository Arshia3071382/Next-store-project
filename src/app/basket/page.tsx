"use client";

import { useEffect, useState } from "react";
import { useShoppingCartContext } from "../contaext/ShoppingCartContext";
import CartItem from "@/component/CartItem";
import { IProduct } from "@/component/ProductItem";
import axios from "axios";

function BasketCart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProduct[]>([]);

  useEffect(() => {
    axios("https://fakestoreapi.com/products").then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  console.log(data);

  return (
    <div>
      <div>
        {cartItems.map((items) => (
          <CartItem key={items.id} {...items} />
        ))}
        <div>
          <div className="bg-gray-50 rounded justify-around items-center shadow-xl mt-10 flex flex-col md:flex-row gap-1.5 font-bold pb-3">
            <div className="flex">
              <h3>Total Price : </h3>
              <span>
                {cartItems.reduce((total, itemPrice) => {
                  const selectedProduct = data.find(
                    (product) => product.id == itemPrice.id
                  );
                  return total + (selectedProduct?.price || 0) * itemPrice.qty;
                }, 0)}
                $
              </span>
            </div>

            <div className="flex items-center gap-1">
              <h3 className="hidden sm:inline-block">discount : </h3>
              <input className="bg-gray-200 py-1 rounded " type="text" />
              <button className="bg-sky-500 px-10 py-1 rounded text-white">
                apply
              </button>
            </div>

            <div className="flex">
              <h3>Final Price : </h3>
              <span>300$</span>
            </div>
          </div>
          <div className="flex  mt-10">
            <button className="bg-sky-600 text-white py-3 w-50 rounded mx-auto">
              registration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasketCart;
