"use client"
import { Children, createContext , useContext, useState } from "react";

interface IChildren{
    children : React.ReactNode
}
type CartItem = {
    id : number ,
    qty : number
}

type TShoppinCartContext = {
    cartItems : CartItem[] ,
    handleIncreaseProductQty : (id : number) => void;
}


const shoppingCartContext = createContext({} as TShoppinCartContext)

export const useShoppingCartContext = () =>{
    return useContext(shoppingCartContext)
}



export function ShoppingCartContextProvider({children} : IChildren){

    const[cartItems , setCartItems] = useState<CartItem[]>([])
    
    const handleIncreaseProductQty = (id : number) => {
        setCartItems(currentItems => {
            let isNotProductExist = currentItems.find(item => item.id == id) == null

            if(isNotProductExist){
                return[...currentItems , {id : id , qty : 1}]
            }else{
               return currentItems.map(item => {
                if(item.id == id){
                    return{
                        ...item ,
                        qty : item.qty + 1
                    }
                }else{
                    return item
                }
               })
            }
        })
    }

 return (
    <shoppingCartContext.Provider value={{cartItems , handleIncreaseProductQty}}>
        {children}
    </shoppingCartContext.Provider>
 )
}