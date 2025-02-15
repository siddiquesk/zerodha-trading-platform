import React from "react";

function Charges() {
  return (
    <>
      <div className="container p-3">
        <div className="row text-center p-3">
          <div className="col-4 p-3">
            <img src="media/pricing1.svg" alt="price" />
            <h2 className="mt-1 mb-3">Free equity delivery</h2>
            <p>
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/pricing2.svg" alt="price" />
            <h2 className="mt-1 mb-2">Intraday and F&O trades</h2>
            <p>
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/princin3.svg" alt="price" />
            <h2 className="mt-1 mb-3">Free direct MF</h2>
            <p>
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charges;
