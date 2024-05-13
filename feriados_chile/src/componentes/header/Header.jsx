import React from "react";
import header_1 from "/src/assets/header_1.png";

const Header = () => {
  return (
    <div className="card text-bg-secondary">
      <img src={header_1} className="card-img" alt="..." />
      <div className="card-img-overlay"></div>
    </div>
  );
};

export default Header;
