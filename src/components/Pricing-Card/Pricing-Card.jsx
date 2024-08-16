
import React from "react";
import "./Pricing-Card.css"
function PricingCard  (props)  {
  return (
    <div className="PricingCard">
      <header>
        <p className="card-title">{props.title}</p>
        <h1 className="card-price">{props.price}</h1>
      </header>
      { /* features here */ }
      <div className="card-features">
                <div className="card-storage">{props.storage}</div>
        <div className="card-users-allowed">{props.users} users in total</div>
        <div className="card-send-up">Send up to {props.sendUp}</div>
      </div>
      <button className="card-btn">READ MORE</button>
    </div>
  );
};

export default PricingCard;