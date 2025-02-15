import React from "react";

function Hero5() {
  return (
    <>
      <section className="container-fluid" id="support-hero">
        <div className="pt-5 " id="support-title">
          <h4>Support Portal</h4>
          <a href="#" className="fs-5">
            Track Ticket
          </a>
        </div>
        <div className="row p-3 mb-5 px-5">
          <div className="col-7 p-5" id="search">
            <h4 className="py-3">
              Search for an answer or browse help topics to create a ticket
            </h4>
            <input
              type="text"
              id="input"
              placeholder="Eg : How do i activate F&Q,why is my order getting rejected"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
            <br />
            <a href="#">Track account opening </a>
            <a href="#">Track segment activation</a>
            <a href="#"> Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
          <div className="col-5 p-5" id="feature">
            <h4>Featured</h4>
            <a href="#">
              1.MCX - Revision in Trading Hours from March 10, 2025
            </a>{" "}
            <br />
            <a href="#">2.Latest Intraday leverages and Square-off timings</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero5;
