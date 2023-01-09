import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import '../Style/Navbar.css'

const Navbar = () => {
  const navigate = useNavigate();


  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


    return (
      <nav className='navbar'>
        <Link to={`/book`}>
        <h3>
          Books App
        </h3>
        </Link>
        <Link to={`/add`}>
          <button className='new-book'>Novo Livro</button>
        </Link>
        <button className='logout' onClick={logout}> Logout </button>
      </nav>
    );
  };


export default Navbar;