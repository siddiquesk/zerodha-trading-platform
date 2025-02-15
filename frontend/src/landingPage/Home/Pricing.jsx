import React from "react";

function Pricing() {
  return (
    <>
      <div className="container mt-4 mb-5 p-3">
        <div className="row p-3">
          <div className="col-6 p-3">
            <h2 style={{ color: "#424242" }} className="mb-2">
              Unbeatable pricing
            </h2>
            <p className="p-1">
              We pioneered the concept of discount broking and price
              transparency in India. Flat fees and no hidden charges.
            </p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#387ed1",
                marginLeft: "10px",
                fontSize: "18px",
              }}>
              See Pricing <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-6  d-flex justify-content-center p-2">
            <img
              src="media/pricing1.svg"
              alt="price1"
              style={{ width: "35%" }}
            />
            <img
              src="media/pricing2.svg"
              alt="price2"
              style={{ width: "35%" }}
            />
            <img
              src="media/princin3.svg"
              alt="price3"
              style={{ width: "35%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
