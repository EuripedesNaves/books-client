import React from "react";
import { useNavigate } from "react-router-dom";

const Books = () => {
  const navigate = useNavigate();
  const Books = () => {
    navigate("/book");
  };

  return (
    <nav>
      <button onClick={Books}> Books </button>
    </nav>
  );
};

export default Books;