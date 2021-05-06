import React from "react";

const CountDownArea = () => {
  return (
    <>
      <div className="ltn__call-to-action-area ltn__call-to-action-4 section-bg-1 pt-110 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img src="./assets/img/banner/11.png" alt="#" />
            </div>
            <div className="col-lg-7">
              <div className="call-to-action-inner call-to-action-inner-4 text-color-white--- text-center---">
                <div className="section-title-area ltn__section-title-2 text-center---">
                  <h6 className="ltn__secondary-color">Todays Hot Deals</h6>
                  <h1 className="section-title">
                    Original Stock Honey <br /> Combo Package
                  </h1>
                </div>
                <div
                  className="ltn__countdown ltn__countdown-3 bg-white--"
                  data-countdown="2021/06/25"
                >
                  <div className="single">
                    <h1>66</h1>
                    <p>Days</p>
                  </div>{" "}
                  <div className="single">
                    <h1>11</h1>
                    <p>Hrs</p>
                  </div>{" "}
                  <div className="single">
                    <h1>48</h1>
                    <p>Mins</p>
                  </div>{" "}
                  <div className="single">
                    <h1>40</h1>
                    <p>Secs</p>
                  </div>
                </div>

                <div className="btn-wrapper animated">
                  <a
                    href="shop.html"
                    className="theme-btn-1 btn btn-effect-1 text-uppercase"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CountDownArea;
