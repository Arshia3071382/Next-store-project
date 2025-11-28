"use client";
import React, { useEffect, useState } from "react";
import AddToCart from "./AddToCart";
import axios from "axios";
import { IProduct } from "./ProductItem";
import Container from "./Container";

interface ICartProp {
  id: number;
  qty: number;
}

function CartItem({ id }: ICartProp) {
  const [data, setData] = useState<IProduct | null>(null);

  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`).then((result) => {
      setData(result.data);
      console.log(data);
    });
  }, [id]);

  // if (!data) return null;

  return (
    <div>
      <Container>
        <div className=" flex flex-col  justify-between sm:flex-row items-center gap-4 shadow my-4 py-3 px-5 ">
          <img width={100} src={data?.image} alt={data?.title} />
          <div className="mb-3 flex flex-col  items-center  ">
            <div className="text-center flex flex-col gap-2  sm:text-left">
              <h1 className="text-left text-xl">{data?.title}</h1>
              <h3 className="text-green-500">{data?.price}$</h3>
            </div>
          </div>
           <div className="pl-0 sm:pl-50 ">
              <AddToCart id={String(id)} />
            </div>
        </div>
      </Container>
    </div>
  );
}

export default CartItem;
