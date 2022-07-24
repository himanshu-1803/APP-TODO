import React from "react";


const Subtodo = (props) => {
  const { product } = props;
  console.log(product + "wII")
  if (product != null) {
    
    return product.map((products, key) => {
      return (
        <div id="listss">
            {/* {console.log(whole.friend + " gfd")} */}
          <div className="function function1">
            <li>
              <div>
                <div className="link-list link1">
                  <div className="ic">{++key + ') ' + products.title}</div>
                  <div id="icons">
                    {/* <div className="ic"><i class="fa-solid fa-share-nodes"></i></div> */}
                    <div className="ic"><i class="fa-solid fa-user-group"></i></div>
                    <div className="ic"><i class="fa-solid fa-pen-to-square"></i></div>
                    <div className="ic"><i class="fa-solid fa-trash-can"></i></div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </div>
      );
    });
  }
};

export default Subtodo;
