import React from "react";
function Hero() {
  return (
    <>
      <div className="container p-5 mt-5 mb-4">
        <div className="row d-flex justify-content-center">
          <div className="col text-center col-sm-12">
            <img src="media/J.jpg" alt="Hero" className="w-75 mb-3" />
            <h1 className="mt-5  fs-1" style={{ color: "#424242" }}>
              Invest in everything
            </h1>
            <p className=" fs-4" style={{ color: "#424242" }}>
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
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

export default Hero;
