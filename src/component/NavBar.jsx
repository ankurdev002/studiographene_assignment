import React, { useState } from "react";
import star from "../assets/star.png";
import ham from "../assets/hammenu.png";
import hamClose from "../assets/cross.png";

const Navbar = ({hamMenu,setHamMenu}) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];

  return (
    <div className={hamMenu?"fixed header-both p-null":"header-both"}>
      <div className={hamMenu?"shopkart-bar background ":"shopkart-bar"}>
        <div className={hamMenu?"heading pad-l":"heading"}>
          <h1>ShopKart</h1>
        </div>
        <div className={hamMenu?"ham-menu pad-r":"ham-menu"}>
          {!hamMenu ? (
            <button onClick={() => setHamMenu(true)}>
              <img src={ham} />
            </button>
          ) : (
            <button onClick={() => setHamMenu(false)}>
              <img src={hamClose} />
            </button>
          )}
        </div>
        <div className="wishlist-bag">
          <h3>WHISLIST (0)</h3>
          <h3>BAG (0)</h3>
        </div>
      </div>
      <div className={hamMenu?"line-shopkart pad-lr":"line-shopkart"}>
        <hr />
        <img src={star} className="not-display"/>
      </div>
      {hamMenu && (
        <div className={hamMenu ? "open ham-menu-drop": "ham-menu-drop"}>
          <ul className="list-ham">
          {navbar.map((item) => (
            <li
              key={item.id}
              className={
                item.id == "product" && isProductsOpen
                  ? "list-item box"
                  : "list-item"
              }
            >
              {item.child ? (
                <span
                  onClick={toggleProducts}
                  className={isProductsOpen ? "underline" : ""}
                >
                  {item.name}
                </span>
              ) : (
                <a href={`#${item.id}`}>{item.name}</a>
              )}

              {item.child && isProductsOpen && (
                <ul className="dropdown">
                  {item.child.map((childItem) => (
                    <li key={childItem.id} className="drop-item">
                      <a href={`#${childItem.id}`}>{childItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          </ul>
        </div>
      )}

      <nav>
        <ul className="navbar">
          {navbar.map((item) => (
            <li
              key={item.id}
              className={
                item.id == "product" && isProductsOpen
                  ? "list-item box "
                  : "list-item"
              }
            >
              {item.child ? (
                <span
                  onClick={toggleProducts}
                 
                >
                  {item.name}
                </span>
              ) : (
                <a href={`#${item.id}`}>{item.name}</a>
              )}

              {item.child && isProductsOpen && (
                <ul className={isProductsOpen?"dropdown box-2 b-b":"dropdown"}>
                  {item.child.map((childItem) => (
                    <li key={childItem.id} className="drop-item">
                      <a href={`#${childItem.id}`}>{childItem.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
