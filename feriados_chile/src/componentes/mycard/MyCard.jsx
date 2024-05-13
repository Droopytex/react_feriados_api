// MyCard.jsx
import React from "react";

const MyCard = ({ date, title, extra }) => {
  return (
    <>
      <div className="card" style={{ width: "16rem" }} key={date}>
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/10691/10691802.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{date}</h5>
          <h4 className="card-title">{title}</h4>
          <span className="card-text">{extra}</span>
        </div>
      </div>
    </>
  );
};

export default MyCard;
