import React from "react";

function Brokrage() {
  let style1 = {
    opacity: "0.8",
  };
  return (
    <>
      <div className="container" style={style1}>
        <div className="row p-4 mt-5 mb-5 text center border-top">
          <div className="col-8 p-3">
            <h3 className="fs-5 mb-2" style={{ color: "#387ed1" }}>
              Brokrage calculated
            </h3>
            <ul className="p-2" style={{ listStyle: "none" }}>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                {" "}
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3 className="fs-5 mx-4 mt-1 mb-2" style={{ color: "#387ed1" }}>
              List of charges
            </h3>
            <ul style={{ listStyle: "none" }}>
              <li>₹100 per order for futures and options.</li>
              <li>
                For a non-PIS account, 0.5% or ₹100 per executed order for
                equity (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
            </ul>
          </div>
          <h5 className="mt-4">Disclimar</h5>
          <p className="mt-1 mb-5">
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
      </div>
    </>
  );
}

export default Brokrage;
