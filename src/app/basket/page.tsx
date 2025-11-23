"use client"
import AddToCart from '@/component/AddToCart'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useShoppingCartContext } from '../contaext/ShoppingCartContext'
import CartItem from '@/component/CartItem'



function BasketCart() {

   const {cartItems} = useShoppingCartContext()
   
  return (
    <div>
        <div>
            {
                cartItems.map(items => (

                    <CartItem key={items.id} {...items} />

                ))
            }
        </div>
         
            
        
    </div>
  )
}

export default BasketCart