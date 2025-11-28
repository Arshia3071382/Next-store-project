"use client";
import { Children, createContext, useContext, useEffect, useState } from "react";
import { json } from "stream/consumers";

interface IChildren {
  children: React.ReactNode;
}
type CartItem = {
  id: number;
  qty: number;
};

type TShoppinCartContext = {
  cartItems: CartItem[];
  handleIncreaseProductQty: (id: number) => void;
  getProductQty: (id : number) => number;
  getTotalQty : () => number ;
  handleDeCreaseProduuctQty : (id : number) => void
  removeCartItem : (id : number) => void
};

const shoppingCartContext = createContext({} as TShoppinCartContext);

export const useShoppingCartContext = () => {
  return useContext(shoppingCartContext);
};

export function ShoppingCartContextProvider({ children }: IChildren) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const getProductQty = (id : number) => {
   return cartItems.find(item => item.id == id)?.qty || 0
  };

  const getTotalQty = () => {
    return cartItems.reduce((totalQty , item) => {
         return totalQty + item.qty
    } , 0) 
  }

  const removeCartItem = (id : number) => {

    setCartItems(currenItems => {
      return currenItems.filter(item => item.id != id)
    })

  }

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      let isNotProductExist =
        currentItems.find((item) => item.id == id) == null;

      if (isNotProductExist) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDeCreaseProduuctQty = (id : number) => {
    setCartItems(currentItems => {
        let selectedItem = currentItems.find(item => item.id == id)
        if(selectedItem?.qty === 1){
           return currentItems.filter(item => item.id != id)
        }else{
            return currentItems.map(item => {
                if(item.id == id){
                    return {...item , qty : item.qty - 1}
                }else{
                    return item
                }
            })
        }
    })
  }

  useEffect(() => {
   let storedCartItems = localStorage.getItem("cartItems")

   if(storedCartItems){
    setCartItems(JSON.parse(storedCartItems))
   }
  } , [])


  useEffect(() => {
    localStorage.setItem("cartItems" , JSON.stringify(cartItems))
  } , [cartItems])

  return (
    <shoppingCartContext.Provider
      value={{ cartItems, handleIncreaseProductQty , getProductQty , getTotalQty , handleDeCreaseProduuctQty , removeCartItem }}
    >
      {children}
    </shoppingCartContext.Provider>
  );
}
