import React from "react";
import { Link } from "react-router-dom";

const SharedUser = (props) => {
  const { product } = props;
  const x=product;
  if (product != null) {
    // console.log(product)
    return product.map((products, key) => {
        console.log(products.sharedTodos+"HII")
      return (
        <div id="listss">
        {/* {let user:number = products.friend} */}
          <div className="function function1">
            <li>
              <div>
              <Link to="/Sharetodo" className="function Link fs" product={x}>
              <div className="link-list link1">
                  <div className="ic">{products.friend}</div>
                  <div id="icons">
                    <div className="ic">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div className="ic">
                      <i class="fa-solid fa-trash-can"></i>
                    </div>
                  </div>
                </div>
        </Link>
                
              </div>
            </li>
          </div>
        </div>
      );
    });
  }
};

export default SharedUser;
