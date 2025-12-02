"use client"
import Container from "@/component/Container";
import Cookies from "js-cookie"
import { redirect } from "next/navigation";
import React, { useState } from "react";


function Login() {
    const[userName , setUserName] = useState("")
    const[Password , setPassword] = useState("")


    const handleLogin = () => {
        const response  = {
            token : "sadsijfiefkdkjfkadjkakewkkakjwjk;wqewqw" ,
            expire : 7,
        };

        Cookies.set("token" , response.token , { expires : response.expire })
        redirect("/dashbord")
    }
  return (
    <div>
      <Container>
        <div className="shadow  mt-10 bg-gray-100 flex flex-col items-center justify-around rounded">
          <div>
            <div className="flex flex-col w-full gap-5">
              <label className="font-bold text-xl">name:</label>
              <input onChange={(e) => {setUserName(e.target.value)}} className="bg-white outline-none py-2 px-5 rounded" type="text" />
            </div>
            <div className="mt-5 flex flex-col w-full gap-5">
              <label className="font-bold text-xl">password:</label>
              <input onChange={(e) => {setPassword(e.target.value)}} className="bg-white outline-none py-2 px-5 rounded" type="text" />
            </div>
          </div>
          <button onClick={handleLogin} className="bg-sky-500 text-white py-1 px-10 my-10 rounded hover:bg-sky-400">login</button>
        </div>
      </Container>
    </div>
  );
}

export default Login;
