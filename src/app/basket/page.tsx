"use client";

import { useEffect, useState } from "react";
import { useShoppingCartContext } from "../contaext/ShoppingCartContext";
import CartItem from "@/component/CartItem";
import { IProduct } from "@/component/ProductItem";
import axios from "axios";
import Container from "@/component/Container";
import { log } from "console";

interface IDiscountData{
  id : number ,
  code : string ,
  percentage : number
}

function BasketCart() {
  const { cartItems } = useShoppingCartContext();
  const [data, setData] = useState<IProduct[]>([]);
  const [disCountCode , setDiscountCode] = useState("")
  const [finalPrice , setFinalPrice] = useState(0)

  const handleDiscountPrise = useEffect(() => {
    axios("https://fakestoreapi.com/products").then((result) => {
      const { data } = result;
      setData(data);
    });
  }, []);

  console.log(data);

  let totalPrice = cartItems.reduce((total, itemPrice) => {
    const selectedProduct = data.find((product) => product.id == itemPrice.id);
    
    return total + (selectedProduct?.price || 0) * itemPrice.qty;
  }, 0);

  const handelSubmitDiscount = () => {
    axios(`http://localhost:8001/dicount?code=${disCountCode}`).then(res => {
      console.log(res)
      const data = res.data as IDiscountData[];
      let discountPrice = (totalPrice * data[0].percentage)/100
      let finalPrice = totalPrice - discountPrice
      setFinalPrice(finalPrice)
    })
  } 

  return (
    <div>
      <Container>
        <div>
          {cartItems.map((items) => (
            <CartItem key={items.id} {...items} />
          ))}
          <div>
            <div className="bg-gray-50 rounded justify-around items-center shadow-xl mt-10 flex flex-col md:flex-row gap-1.5 font-bold pb-3">
              <div className="flex">
                <h3>Total Price : </h3>
                <span>{totalPrice}$</span>
              </div>

              <div className="flex items-center gap-1">
                <h3 className="hidden sm:inline-block">discount : </h3>

                <input onChange={e => setDiscountCode(e.target.value)} className="bg-gray-200 py-1 rounded " type="text" />
                <button onClick={handelSubmitDiscount} className="bg-sky-500 px-10 py-1 rounded text-white">
                  apply
                </button>
              </div>

              <div className="flex">
                <h3>Final Price : </h3>
                <span>{finalPrice}$</span>
              </div>
            </div>
            <div className="flex  mt-10">
              <button className="bg-sky-600 text-white py-3 w-50 rounded mx-auto">
                Buy
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default BasketCart;
