import React from "react";

function Footer() {
  return (
    <>
      <div
        className="container-fluid border-top"
        style={{ backgroundColor: "#fbfbfb" }}>
        <div className="container">
          <div className="row mt-5">
            <div className="col m-2">
              <img
                src="/media/logo.svg"
                alt="logo"
                style={{ width: "50%" }}
                className="mb-2"
              />
              <p
                className="fs-6 my-2"
                style={{
                  color: "#424242",
                  fontWeight: "500",
                  fontSize: "18px",
                }}>
                © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
                <p id="social">
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-twitter"></i>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-linkedin"></i>
                </p>
                <hr />
                <p id="social">
                  <i class="fa-brands fa-youtube"></i>
                  <i class="fa-brands fa-whatsapp"></i>
                  <i class="fa-brands fa-telegram"></i>
                </p>
              </p>
            </div>
            <div className="col ">
              <p
                style={{
                  color: "#424242",
                  fontWeight: "500",
                  fontSize: "18px",
                }}>
                Company
              </p>
              <a href="#">About</a> <br />
              <a href="#">Products</a>
              <br />
              <a href="#">Pricing</a>
              <br />
              <a href="#">Referral programme</a>
              <br />
              <a href="#">Careers</a>
              <br />
              <a href="#">Zerodha.tech</a>
              <br />
              <a href="#">Open source</a>
              <br />
              <a href="#">Press & media</a>
              <br />
              <a href="#">Zerodha Cares (CSR)</a>
              <br />
            </div>
            <div className="col">
              <p
                style={{
                  color: "#424242",
                  fontWeight: "500",
                  fontSize: "18px",
                }}>
                Support
              </p>
              <a href="#">Contact us</a>
              <br />
              <a href="#">Support portal</a>
              <br />
              <a href="#">Z-Connect blog</a>
              <br />
              <a href="#">List of charges</a>
              <br />
              <a href="#">Downloads & resources</a>
              <br />
              <a href="#">Videos</a>
              <br />
              <a href="#">Market overview</a>
              <br />
              <a href="#">How to file a complaint?</a>
              <br />
              <a href="#">Status of your complaints</a>
              <br />
            </div>
            <div className="col">
              <p
                style={{
                  color: "#424242",
                  fontWeight: "500",
                  fontSize: "18px",
                }}>
                Account
              </p>
              <a href="#">Open an account</a> <br />
              <a href="#">Fund transfer</a>
              <br />
            </div>
          </div>
          <div className="mt-5 container text-muted text-jutify" id="para">
            <p>
              Zerodha Broking Ltd.: Member of NSE, BSEMCX SEBI Registration no.:
              INZ000031633 CDSL/NSDL: Depository services through Zerodha
              Broking Ltd. SEBI Registration no.: IN-DP-431-2019 Commodity
              Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025;
              NSE-50001 SEBI Registration no.: INZ000038238 Registered Address:
              Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp.
              Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078,
              Karnataka, India. For any complaints pertaining to securities
              broking please write to complaints@zerodha.com, for DP related to
              dp@zerodha.com.
            </p>
            <p>
              Please ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF Procedure to file a complaint on SEBI
              SCORES: Register on SCORES portal. Mandatory details for filing
              complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail
              ID. Benefits: Effective Communication, Speedy redressal of the
              grievances Smart Online Dispute Resolution | Grievances Redressal
              Mechanism Investments in securities market are subject to market
              risks; read all the related documents carefully before investing.
            </p>
            <p>
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary.
            </p>
            <p>
              " Dear Investor, if you are subscribing to an IPO, there is no
              need to issue a cheque. Please write the Bank account number and
              sign the IPO application form to authorize your bank to make
              payment in case of allotment. In case of non allotment the funds
              will remain in your bank account. As a business we don't give
              stock tips, and have not authorized anyone to trade on behalf of
              others. If you find anyone claiming to be part of Zerodha and
              offering such services, please create a ticket here.
            </p>
          </div>
          <div id="policy">
            <a href="#">Nse</a>
            <a href="#">Bse</a>
            <a href="#">Max</a>
            <a href="#">Terms & condition</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Disclosure</a>
            <a href="#">For invest attention</a>
            <a href="#">Invetser Charter</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
