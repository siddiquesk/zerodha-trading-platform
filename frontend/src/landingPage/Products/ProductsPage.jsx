import React from "react";
import Hero3 from "./Hero3";
import LeftImage from "./LeftImage";
import RightImage from "./RigtImage";
import Universe from "./Universe";
function ProductsPage() {
  return (
    <>
      <Hero3 />
      <LeftImage
        imageurl="media/kite.png"
        productName="Kite"
        productDes="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImage
        imageurl="media/console.png"
        productName="Console"
        productDes="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.Enjoy the investment experience on your Console and Product service."
        tryDemo="Learn More"
      />
      <LeftImage
        imageurl="media/coin.png"
        productName="Coin"
        productDes="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightImage
        imageurl="media/api.png"
        productName="Kite Connect API"
        productDes="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Kite Connect"
      />
      <LeftImage
        imageurl="media/mobile.png"
        productName="Varsity mobile"
        productDes="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-5 m-3 py-3">
        Want to know more about our technology stack? Check out the{" "}
        <span>Zerodha</span>.tech blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
