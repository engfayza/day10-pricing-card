import { useEffect, useState } from "react";
// import { v4 as uuidv4} from uuidv4;
import PricingCard from "./components/Pricing-Card/Pricing-Card";
import "./App.css";

function App() {
  const [selectMonthly, setSelectMonthly] = useState(true);
  console.log(selectMonthly);
  useEffect(() => {
    function CallApi() {
     fetch("http://localhost:3000/pricingCards")
    .then((response) => {
     return response.json();
     })
     .then((setSelectMonthly) => {
    setArrayOfObjects(setSelectMonthly);
    });
    }
    
    CallApi();
     }, []);
    
  return (
   
 

    <div className="PricingApp">
      <div className="app-container">
        {/* Header */}
        <header>
          <h1 className="header-topic">Our Pricing Plan</h1>
          <div className="header-row">
            <p>Annually</p>
            <label className="price-switch">
              <input
                className="price-checkbox"
                onChange={() => {
                  setSelectMonthly((prev) => !prev);
                }}
                type="checkbox"
              />
              <div className="switch-slider"></div>
            </label>
            <p>Monthly</p>
          </div>
        </header>
        {/* Cards here */}
        <div className="pricing-cards">
          <PricingCard
            id="1"
            title="Essential"
            price={selectMonthly ? "20.99" : "188.9"}
            storage="60 GB Storage"
            users="5"
            sendUp="5"
          ></PricingCard>
          <PricingCard
           id="2"
            title="Basics"
            price={selectMonthly ? "34.99" : "349.9"}
            storage="70 GB Storage"
            users="10"
            sendUp="10"
          ></PricingCard>
          <PricingCard
            id="3"
            title="Premium"
            price={selectMonthly ? "79.99" : "499.9"}
            storage="90 GB Storage"
            users="20"
             sendUp="5"
          ></PricingCard>
          
        </div>
      </div>
    </div>
  );
}

export default App;
