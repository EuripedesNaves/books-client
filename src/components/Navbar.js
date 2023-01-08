import React from "react";
import { useNavigate } from "react-router-dom";

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
  
      <button
        style={{
          position: "absolute",
          right: "50px",
          background: "none",
          border: "none",
          color: "#0f52ba"
        }}
        onClick={logout}
      >
        Logout <i></i>
      </button>
    </nav>
  );
};

export default Navbar;