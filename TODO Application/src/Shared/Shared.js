import Nav from "../Home/Nav";
import Sidebar from "../Home/Sidebar";
import "../Home/Notes.css";
import "../Home/Home.css";
import React from "react";
import "../Home/Lists.css";
import "./Shared.css";
import { Link } from "react-router-dom";
import data from "./Api.json";
import SharedUser from "./SharedUser";

const Shared = () => {
  return (
    <div>
      <Nav />
      <div id="notes">
        <Sidebar />
        <div className="SharedDiv">
          <div className="SharedUser">
            <div id="list">
              <div>Shared Todos</div>
            </div>
            <div id="">
              <Link to={"/Shared"} id="title">
                {data.map((product) => (
                  <SharedUser
                    key={product.id}
                    product={product.id === 2 ? product.sharedUsers : null}
                  />
                ))}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shared;
