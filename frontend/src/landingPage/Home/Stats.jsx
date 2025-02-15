import React from "react";

function Stats() {
  return (
    <>
      <div className="container mt-5 p-3">
        <div className="row p-3 d-flex justify-content-center p-3">
          <div className="col-6 p-3 ">
            <h2 className="mb-5" style={{ color: "#424242" }}>
              Trust with confidence
            </h2>
            <h4 className="mt-2" style={{ color: "#424242" }}>
              Customer-first always
            </h4>
            <p className=" mb-4">
              That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
              crores of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
            <h4 style={{ color: "#424242" }}>No spam or gimmicks</h4>
            <p className=" mb-4">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
            <h4 style={{ color: "#424242" }}>The Zerodha universe</h4>
            <p className=" mb-4">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
            <h4 style={{ color: "#424242" }}>Do better with money</h4>
            <p className=" mb-3">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
          <div className="col-6">
            <img
              src="media/ecosystem.png"
              alt="ecosystem"
              style={{ width: "100%" }}
            />
            <div className="text-center ">
              <a
                href="#"
                className="mx-4 fs-6"
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                  color: "#387ed1",
                }}>
                Explore our products
                <i class="fa-solid fa-arrow-right-long"></i>
              </a>
              <a
                href="#"
                style={{
                  textDecoration: "none",
                  fontWeight: "500",
                  color: "#387ed1",
                }}
                className="fs-6">
                Try Kite demo <i class="fa-solid fa-arrow-right-long"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12  p-5 d-flex justify-content-center">
          <img src="media/press1.png" alt="press" />
        </div>
      </div>
    </>
  );
}

export default Stats;
