import React from "react";
import "./Lists.css";
import List from "./List";
import { Link } from "react-router-dom";
import data from "../Shared/Api.json";

function Lists() {
  return (
    <div id="main-container">
      <div id="list">
        <div>Todos</div>
      </div>
      <div id="list-container">
        <Link to={"/SubList"}  id="title">
        {data.map(product => <List key={product.id} product={product.id===1?product.todos:null} />)}
        </Link>
      </div>
    </div>
  );
}
export default Lists;
