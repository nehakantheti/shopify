// components/Navbar.js
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import SearchBar from "./SearchBar"
import { useState } from "react";

function Navbar() {

  const [searchTerm, setSearchTerm] = useState("")

  return (
    <nav className="navbar">
      <h1 color = 'white'><Link to = "/">Shopify</Link></h1>
      {/* <div className="signin">
        <h4 color = 'red'>Sign up/ Log in</h4>
      </div> */}
      <div className="elements">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to = "/accessories"> Accessories</Link></li>
          <li><Link to = "/accessories"> Clothes</Link></li>
          <li><Link to = "/accessories"> Beauty Products</Link></li>
        </ul>
        <SearchBar onSearch={setSearchTerm}/>
      </div>
    </nav>  
  );
}

export default Navbar;