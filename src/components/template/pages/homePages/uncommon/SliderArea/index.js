import React from "react";
import Slider from "react-slick";

const SliderArea = () => {

  
  const setting = {
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    dots: true,
    fade: true,
    cssEase: "linear",
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <a className="slick-prev">
        <i className="fas fa-arrow-left" alt="Arrow Icon"></i>
      </a>
    ),
    nextArrow: (
      <a className="slick-next">
        <i className="fas fa-arrow-right" alt="Arrow Icon"></i>
      </a>
    ),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="ltn__slider-area ltn__slider-3  section-bg-1">
        <div className="ltn__slide-one-active slick-slide-arrow-1 slick-slide-dots-1">
          {/* ltn__slide-item */}
          <Slider {...setting}>
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
              <div className="ltn__slide-item-inner">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <div className="slide-video mb-50 d-none">
                            <a
                              className="ltn__video-icon-2 ltn__video-icon-2-border"
                              href="https://www.youtube.com/embed/tlThdr3O5Qo"
                              data-rel="lightcase:myCollection"
                            >
                              <i className="fa fa-play" />
                            </a>
                          </div>
                          <h6 className="slide-sub-title animated">
                            <img
                              src="/assets/img/icons/icon-img/1.png"
                              alt="#"
                            />{" "}
                            100% genuine Products
                          </h6>
                          <h1 className="slide-title animated ">
                            Tasty &amp; Healthy <br /> Organic Food
                          </h1>
                          <div className="slide-brief animated d-none">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="shop.html"
                              className="theme-btn-1 btn btn-effect-1 text-uppercase"
                            >
                              Explore Products
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img">
                        <img src="/assets/img/slider/23.png" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ltn__slide-item */}
            <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3">
              <div className="ltn__slide-item-inner  text-right">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12 align-self-center">
                      <div className="slide-item-info">
                        <div className="slide-item-info-inner ltn__slide-animation">
                          <h6 className="slide-sub-title animated">
                            <img
                              src="/assets/img/icons/icon-img/1.png"
                              alt="#"
                            />{" "}
                            100% genuine Products
                          </h6>
                          <h1 className="slide-title animated ">
                            Our Garden's Most <br /> Favorite Food
                          </h1>
                          <div className="slide-brief animated">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div className="btn-wrapper animated">
                            <a
                              href="shop.html"
                              className="theme-btn-1 btn btn-effect-1 text-uppercase"
                            >
                              Explore Products
                            </a>
                            <a
                              href="about.html"
                              className="btn btn-transparent btn-effect-3 text-uppercase"
                            >
                              LEARN MORE
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="slide-item-img slide-img-left">
                        <img src="/assets/img/slider/21.png" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default SliderArea;
