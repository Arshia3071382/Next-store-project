"use client"

import { useShoppingCartContext } from "@/app/contaext/ShoppingCartContext";

interface IAddToCartProp {
  id: string;
}
function AddToCart({ id }: IAddToCartProp) {
  const {
    cartItems,
    handleIncreaseProductQty,
    getProductQty,
    handleDeCreaseProduuctQty,
    removeCartItem
  } = useShoppingCartContext();
  console.log(cartItems);
  return (
    <div className="flex gap-2 flex-col font-bold mt-5 items-center">
      <div className="flex flex-row-reverse gap-2">
        <button
          onClick={() => handleIncreaseProductQty(parseInt(id))}
          className="bg-sky-500 px-5 items-center justify-center rounded"
        >
          +
        </button>
        <span className="mt-1">{getProductQty(parseInt(id))}</span>
        <button
          onClick={() => handleDeCreaseProduuctQty(parseInt(id))}
          className="bg-sky-500 px-5 rounded"
        >
          -
        </button>
      </div>
      <div className="bg-red-600 text-white p-2 rounded-xl px-4 hover:bg-white hover:border border-red-600 hover:text-black">
        <button onClick={() => removeCartItem(parseInt(id))}>Remove</button>
      </div>
    </div>
  );
}

export default AddToCart;
