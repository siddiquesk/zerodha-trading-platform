import React from "react";

function Education() {
  return (
    <>
      <div className="container  mt-3  p-3">
        <div className="row p-3">
          <div className="col-6">
            <img src="media/education.svg" alt="education" />
          </div>
          <div className="col-6 p-4">
            <h2
              style={{
                color: "#424242",
                marginTop: "10px",
                marginBottom: "16px",
              }}>
              Free and open market education
            </h2>
            <p
              style={{
                color: "#424242",
                fontSize: "18px",
                margin: "30px 0px",
              }}>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#387ed1",
              }}
              className="fs-5">
              varsity <i class="fa-solid fa-arrow-right-long"></i>
            </a>
            <p
              style={{
                color: "#424242",
                fontSize: "18px",
                margin: "15px 0px",
              }}>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontWeight: "500",
                color: "#387ed1",
              }}
              className="fs-6">
              Trading Q&A <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
