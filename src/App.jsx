import React, { useState } from "react";
import MainSec from "./component/MainSec";
import NewProduct from "./component/NewProduct";
import Footer from "./component/Footer";
import HeaderNav from "./component/HeaderNav";
import Navbar from "./component/NavBar";

const App = () => {
  const [hamMenu, setHamMenu] = useState(false);

  return (
    <div className="main-container">
      <div className="main-sec">
      <div className={hamMenu?'fixed w-100':''}>
          <HeaderNav />
          <Navbar hamMenu={hamMenu} setHamMenu={setHamMenu}/>
    </div>
        <MainSec hamMenu={hamMenu}/>
        <NewProduct />
        <Footer />
      </div>
    </div>
  );
};

export default App;
