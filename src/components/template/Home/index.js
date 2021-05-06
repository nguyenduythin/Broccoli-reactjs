import React,{useState} from "react";

import BannerArea from "../pages/homePages/uncommon/BannerArea";
import BannerAreaNone from "../pages/homePages/uncommon/BannerAreaNone";
import BlogArea from "../pages/homePages/BlogArea";
import CartMenu from "../pages/homePages/CartMenu";
import CountDownArea from "../pages/homePages/uncommon/CountDownArea";

import FooterArea from "../FooterArea";
import Header from "../pages/homePages/Hearder";
import MobileMenu from "../pages/homePages/uncommon/MobileMenu";
import ModalArea from "../pages/homePages/uncommon/ModalArea";

import ProductArea from "../pages/homePages/ProductArea";
import ProductTabArea from "../pages/homePages/ProductTabArea";
import SliderArea from "../pages/homePages/uncommon/SliderArea";
import TestimonialArea from "../pages/homePages/uncommon/TestimonialArea";
import VideoPopupArea from "../pages/homePages/uncommon/VideoPopupArea";

const Home = ({ viewP,cartItems,loginUser,handlLogOut,dataProduct ,onRemoveCart,onAddCart,dataCate}) => {

  const handleScrollUp = () => {  
    const scrol = window.scrollY;
    console.log(scrol-scrol);
  
  };
  const [openCart, setOpenCart] = useState("");
  

  return (
    <>
      {/* Body main wrapper start */}
      <div className="body-wrapper">
        {/* HEADER AREA START (header-5) */}
        <Header   loginUser={loginUser} handlLogOut={handlLogOut}   cartItems={cartItems} setOpenCart={setOpenCart} />
        {/* HEADER AREA END */}
        {/* Utilize Cart Menu Start */}
        <CartMenu openCart={openCart}
          cartItems={cartItems}
          setOpenCart={setOpenCart}
          onRemoveCart={onRemoveCart} />
        {/* Utilize Cart Menu End */}
        {/* Utilize Mobile Menu Start */}
        <MobileMenu />
        {/* Utilize Mobile Menu End */}
        <div className="ltn__utilize-overlay" />
        {/* SLIDER AREA START (slider-3) */}
        <SliderArea />
        {/* SLIDER AREA END */}
        {/* BANNER AREA START */}
        <BannerAreaNone />
        {/* BANNER AREA END */}
        {/* BANNER AREA START */}
        <BannerArea />
        {/* BANNER AREA END */}
        {/* PRODUCT TAB AREA START (product-item-3) */}
        <ProductTabArea dataProduct={dataProduct} onAddCart={onAddCart} dataCate={dataCate}/>
        {/* PRODUCT TAB AREA END */}
        {/* COUNTDOWN AREA START */}
        <CountDownArea />
        {/* COUNTDOWN AREA END */}
        {/* PRODUCT AREA START (product-item-3) */}
        <ProductArea dataProduct={dataProduct}  onAddCart={onAddCart}/>
        {/* PRODUCT AREA END */}
        {/* VIDEO AREA START */}
        <VideoPopupArea />

        {/* VIDEO AREA END */}
        {/* TESTIMONIAL AREA START (testimonial-4) */}

        <TestimonialArea />
        {/* TESTIMONIAL AREA END */}
        {/* BLOG AREA START (blog-3) */}
        <BlogArea />
        {/* BLOG AREA END */}

        {/* FOOTER AREA START */}
        <FooterArea />
        {/* FOOTER AREA END */}

        {/* MODAL AREA One START (Quick View Modal) */}
        <ModalArea viewP={viewP} />
        {/* MODAL AREA END */}
      </div>
      {/* Body main wrapper end */}
      {/* preloader area start */}
      <div className="preloader d-none" id="preloader">
        <div className="preloader-inner">
          <div className="spinner">
            <div className="dot1" />
            <div className="dot2" />
          </div>
        </div>
      </div>
      <a
        id="scrollUp"
        style={{ position: "fixed", zIndex: "2147483647" }}
        onClick={() => handleScrollUp()}
      >
        <i className="fa fa-angle-up"></i>
      </a>
    </>
  );
};

export default Home;
