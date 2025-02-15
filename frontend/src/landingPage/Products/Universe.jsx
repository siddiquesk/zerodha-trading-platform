import React from "react";

function Universe() {
  let style1 = {
    width: "195px",
    height: "54px",
    margin: "20px 20px",
    textAlign: "center",
    color: "#424242",
    cursor: "pointer", // Pointer cursor on hover
    transition: "opacity 0.3s ease-in-out", // Smooth effect
  };

  let hoverStyle = {
    opacity: "0.6", // Hover pe halka blur effect
  };

  let style2 = {
    fontSize: "13px",
    fontWeight: "400",
    color: "#424242",
    opacity: "0.7",
  };

  return (
    <>
      <div className="container mt-3 p-5">
        <div className="row text-center p-5">
          <h2 className="mb-4">The Zerodha Universe</h2>
          <p className="fs-5 mt-1 mb-5">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>

          <div className="col-4">
            <img
              src="media/z1.png"
              alt="z1"
              style={style1}
              onMouseOver={(e) => (e.target.style.opacity = "0.6")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            />
            <p style={style2}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-4">
            <img
              src="media/z2.svg"
              alt="z2"
              style={style1}
              onMouseOver={(e) => (e.target.style.opacity = "0.6")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            />
            <p style={style2}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </div>

          <div className="col-4">
            <img
              src="media/z3.svg"
              alt="z3"
              style={style1}
              onMouseOver={(e) => (e.target.style.opacity = "0.6")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            />
            <p style={style2}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>

          <div className="col-4">
            <img
              src="media/z4.png"
              alt="z4"
              style={style1}
              onMouseOver={(e) => (e.target.style.opacity = "0.6")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            />
            <p style={style2}>
              Our asset management venture that is creating simple and
              transparent index funds to help you save for your goals.
            </p>
          </div>

          <div className="col-4">
            <img
              src="media/z5.png"
              alt="z5"
              style={style1}
              onMouseOver={(e) => (e.target.style.opacity = "0.6")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            />
            <p style={style2}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
            <button className="btn btn-primary  fs-5 mt-4 rounded-sm">
              Signup Now for free
            </button>
          </div>

          <div className="col-4">
            <img
              src="media/z6.png"
              alt="z6"
              style={style1}
              onMouseOver={(e) => (e.target.style.opacity = "0.6")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            />
            <p style={style2}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Universe;
