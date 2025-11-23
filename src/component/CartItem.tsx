"use client"
import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import axios from "axios";
import { IProduct } from "./ProductItem";

interface ICartProp {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartProp) {
  const [data, setData] = useState<IProduct | null>(null);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((result) => {
      setData(result.data);
    });
  }, [id]);

  if (!data) return null;

  return (
    <div>
      <div>
        <img src={data.image} alt={data.title} />
        <div>
          <h1>{data.title}</h1>
          <h3>{data.price}$</h3>
          <AddToCart id={String(id)} />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
