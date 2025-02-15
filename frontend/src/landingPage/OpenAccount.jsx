import React from "react";

function OpenAccount() {
  return (
    <>
      <div className="container p-5  mb-4">
        <div className="row d-flex justify-content-center">
          <div className="col text-center col-sm-12">
            <h1 className="mt-5  fs-1" style={{ color: "#424242" }}>
              Open a Zerodha account
            </h1>
            <p className=" fs-5" style={{ color: "#424242" }}>
              Modern platforms and apps, ₹0 investments, and flat ₹20 intraday
              and F&O trades.
            </p>
            <button className="btn btn-primary  fs-5 mt-4 rounded-sm">
              Signup Now for free
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenAccount;
