import Nav from "../Home/Nav";
import React from "react";
import Sidebar from "../Home/Sidebar";

import data from "./Api.json";
import Subtodo from "./Subtodo"
import { Link } from "react-router-dom";


function Sharetodo() {
  {console.log(data.id+ "dshg")}
  return (
    <>
    
      <Nav />
      <div id="notes" >
        <Sidebar />
        <div className="styling">
          

        {/* {data.map(user => {if(user.id === 1)
        
          {<div>{user.username}
          <div>HIII</div>
          </div>
          console.log(user.todos)
          
        }})} */}
        <Link to={"/"}  id="title">
        {data.map(product => <Subtodo key={product.id} whole = {product[1].sharedUsers} product={product.id===1?product.todos:null} />)}
        {console.log(data.id+ "fedshg")}
        </Link>
        </div>
      </div>
    </>
  )
}
export default Sharetodo;
