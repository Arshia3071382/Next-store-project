"use client"
import Container from "@/component/Container";
import React, { ChangeEvent, useEffect, useState } from "react";

function Dashbord() {
    const[product , setProduct] = useState({
        title : "",
        price : "" ,
        image : "",
        description : ""
    })

    const handleChangeProduct = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=> {
        const {name , value} = e.target
        setProduct({
            ...product ,
            [name] : value
        })
    }

      const handleAddProduct =  () => {
       fetch("http://localhost:8001/newProduct" , {
            method : "POST" ,
            headers: { 'Content-Type': 'application/json' },
            body : JSON.stringify({
                id : Math.floor(Math.random() * 1000) ,
                title : product.title ,
                image : product.image ,
                price : product.price ,
                description : product.description
            })
        }).then(res => console.log(res))
    }
  return (
    <div>
      <Container>

        <h1 className="text-center font-bold text-3xl m-10">Add Product</h1>


        <div className="bg-gray-200 shadow p-5 flex flex-col justify-between items-center">
          <div className="w-full flex justify-around items-center flex-col  lg:flex-row lg:justify-center  gap-10">
            <div className="gap-0.5">
              <label>title:</label>
              <input onChange={handleChangeProduct} name="title" className="bg-white outline-none py-1 px-8 rounded" type="text" placeholder="" />
            </div>
            <div className="gap-0.5">
              <label>image:</label>
              <input onChange={handleChangeProduct} name="image" className="bg-white outline-none py-1 px-8 rounded" type="text" />
            </div>
            <div className="gap-0.5">
              <label>price:</label>
              <input onChange={handleChangeProduct} name="price" className="bg-white outline-none py-1 px-8 rounded" type="text" />
            </div>
          </div>
          <div className="flex mt-20 flex-col">
            <label>description:</label>
            <textarea onChange={handleChangeProduct} name="description" className="bg-white w-70 lg:w-2xl h-50 outline-none p-1"></textarea>
          </div>

          <button onClick={handleAddProduct} className="bg-sky-500 py-2 px-8 rounded text-white m-10 hover:bg-sky-400">Add Product</button>
        </div>
      </Container>
    </div>
  );
}

export default Dashbord;
