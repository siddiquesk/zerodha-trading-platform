import React from "react";

function RigtImage({ imageurl, productName, productDes, tryDemo }) {
  return (
    <>
      <div className="container px-2">
        <div className="row p-3">
          <div className="col-6 mt-5 p-5 mb-5">
            <h2 className="mt-5 mb-4">{productName}</h2>
            <p style={{ fontSize: "17px" }}>{productDes}</p>
            <a
              href={tryDemo}
              style={{
                textDecoration: "none",
                fontSize: "17px",
                fontWeight: "500",
              }}>
              Learn More <i class="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div className="col-6 mb-5">
            <img src={imageurl} alt="image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default RigtImage;
