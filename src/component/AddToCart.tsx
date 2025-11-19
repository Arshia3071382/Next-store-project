"use client"

import { useShoppingCartContext } from "@/app/contaext/ShoppingCartContext";

interface IAddToCartProp{
    id : string
}
function AddToCart({id} : IAddToCartProp) {
   
    const {cartItems , handleIncreaseProductQty} = useShoppingCartContext();
     console.log(cartItems)
  return (
    <div className="flex gap-2 flex-row-reverse font-bold mt-5">
      <button onClick={() => handleIncreaseProductQty(parseInt(id))} className="bg-sky-500 px-5 items-center justify-center rounded">
        +
      </button>
      <span className="mt-1">2</span>
      <button className="bg-sky-500 px-5 rounded">-</button>
    </div>
  );
}

export default AddToCart;
