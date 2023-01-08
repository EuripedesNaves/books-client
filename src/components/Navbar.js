import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav>
      <h3>
   Navbar
      </h3>
      <Link to={`/add/`}>
      <button>Add Book</button>
      </Link>
      <button onClick={logout}> Logout </button>
    </nav>
  );
};

export default Navbar;