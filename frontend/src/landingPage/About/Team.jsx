import React from "react";

function Team() {
  return (
    <>
      <div className="container p-5">
        <div className="row p-3 m-1">
          <h2 className="d-flex justify-content-center align-items-center">
            People
          </h2>
        </div>
        <div className="row  mt-5 mx-5 mb-5">
          <div className="col-6 mt-5 mb-3">
            <img
              src="/media/nitinkumar.jpg"
              alt="nitin"
              className="rounded-circle mx-5"
              style={{ height: "325px" }}
            />
            <h3 className=" mt-3 fs-5 text-center">Nithin Kamath</h3>
            <p className=" mt-2 fs-6 text-center">Founder, CEO</p>
          </div>
          <div className="col-6 mt-5 mb-3">
            <p>
              Nithin Kamath Founder, CEO Nithin bootstrapped and founded Zerodha
              in 2010 to overcome the hurdles he faced during his decade long
              stint as a trader. Today, Zerodha has changed the landscape of the
              Indian broking industry.
            </p>
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>Playing basketball is his zen.</p>
            <p id="nithin">
              Connect on <a href="#">Homepage</a>/ <a href="#">TradingQnA</a>/
              <a href="#">Twitter</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
