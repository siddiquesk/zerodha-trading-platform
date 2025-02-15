import React from "react";

function LeftImage({
  imageurl,
  productName,
  productDes,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container">
        <div className="row mb-3">
          <div className="col-7 p-3 mb-4">
            <img src={imageurl} alt="image" style={{ width: "95%" }} />
          </div>
          <div className="col-1 mb-3"></div>
          <div className="col-4 p-4 mt-3 mb-4">
            <h2 className="mb-4">{productName}</h2>
            <p style={{ fontSize: "17px", marginBottom: "10px" }}>
              {productDes}
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href={tryDemo}
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "18px",
                  marginTop: "5px",
                }}>
                Try Demo <i class="fa-solid fa-arrow-right-long"></i>
              </a>
              <a
                href={learnMore}
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  fontWeight: "500",
                }}>
                Learn More <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <a href={googlePlay}>
                <img src="media/googleplay.svg" alt="googleplay" />
              </a>
              <a href={appStore}>
                <img src="media/appstore.svg" alt="appstore" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftImage;
