import { data } from "jquery";
import React,{useState} from "react";

export const UseStateHook =()=>{
    const [data,setData] =useState(0);
    console.log(data)

    return( 
        <div>
            <h1>This is UseState Hook {data}</h1>
        </div>
    )
}