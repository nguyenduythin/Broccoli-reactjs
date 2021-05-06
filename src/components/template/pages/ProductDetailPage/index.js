import FooterArea from "../../FooterArea";

import HeaderTemplate from "../../HeaderTemplate";
import ModalArea from "../homePages/uncommon/ModalArea";
import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import Slider from "react-slick";
import { useForm } from "react-hook-form";

const ProductDetailPage = ({
  dataProduct,
  onAddCart,
  cartItems,
  onRemoveCart,
  setCartItems,
  qty,
  setQty,

  viewP,
  loginUser,
  handlLogOut,
  dataCate,
  handleAddComment,
  dataComment,
  onAddCartDetail,
}) => {
  let { id } = useParams();
  const productDetail = dataProduct.find((item) => item.id === id);
  const listCate = dataCate.find((x) => x.id === productDetail.categoriesID);

  const relateProduct = dataProduct.filter(
    (x) => x.categoriesID === listCate.id
  );

  const relateProductMinus = relateProduct.filter(
    (x) => x.id !== productDetail.id
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // comment
  const onadd = (data) => {
    handleAddComment(data);
  };
  const commentByProduct = dataComment.filter(
    (x) => x.idProduct === productDetail.id
  );
  // comment end

  //cart

  //cart

  const setting = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingImg = {
    rtl: false,
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
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
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <HeaderTemplate
          cartItems={cartItems}
          loginUser={loginUser}
          handlLogOut={handlLogOut}
          onRemoveCart={onRemoveCart}
        />

        {/* BREADCRUMB AREA START */}
        <div
          className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
          style={{ backgroundImage: "url(/assets/img/bg/9.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                  <div className="section-title-area ltn__section-title-2">
                    <h6 className="section-subtitle ltn__secondary-color">
                      // Welcome to our company
                    </h6>
                    <h1 className="section-title white-color">
                      Product Details
                    </h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>Product Details</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* SHOP DETAILS AREA START */}
        <div className="ltn__shop-details-area pb-85">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <div className="ltn__shop-details-inner mb-60">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ltn__shop-details-img-gallery">
                        <div className="ltn__shop-details-large-img">
                          <div className="single-large-img">
                            <a
                              href="/assets/img/product/1.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img src={productDetail.image} alt="Image" />
                            </a>
                          </div>
                          {/* <div className="single-large-img">
                            <a
                              href="/assets/img/product/2.png"
                              data-rel="lightcase:myCollection"
                            >
                              <img
                                src="/assets/img/product/2.png"
                                alt="Image"
                              />
                            </a>
                          </div> */}
                        </div>
                        <div className="ltn__shop-details-small-img slick-arrow-2 slick-initialized slick-slider">
                          <Slider {...settingImg}>
                            <div className="single-small-img">
                              <img
                                src="/assets/img/product/1.png"
                                alt="Image"
                              />
                            </div>
                            <div className="single-small-img">
                              <img
                                src="/assets/img/product/2.png"
                                alt="Image"
                              />
                            </div>
                            <div className="single-small-img">
                              <img
                                src="/assets/img/product/3.png"
                                alt="Image"
                              />
                            </div>
                            <div className="single-small-img">
                              <img
                                src="/assets/img/product/4.png"
                                alt="Image"
                              />
                            </div>
                            <div className="single-small-img">
                              <img
                                src="/assets/img/product/4.png"
                                alt="Image"
                              />
                            </div>
                          </Slider>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="modal-product-info shop-details-info pl-0">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                            </li>
                            <li className="review-total">
                              {" "}
                              <a href="#"> ( 95 Reviews )</a>
                            </li>
                          </ul>
                        </div>
                        <h3>{productDetail.name}</h3>
                        <div className="product-price">
                          <span>
                            $
                            {new Intl.NumberFormat("ja-JP").format(
                              productDetail.price
                            )}
                          </span>
                          {/* <del>$65.00</del> */}
                        </div>
                        <div className="modal-product-meta ltn__product-details-menu-1">
                          <ul>
                            <li>
                              <strong>Categories:</strong>
                              <span>
                                <a>{listCate.name}</a>
                              </span>
                            </li>
                          </ul>
                        </div>
                        <div className="ltn__product-details-menu-2">
                          <form onSubmit={onAddCartDetail}>
                            <ul>
                              <li>
                                <div className="cart-plus-minus">
                                  <div
                                    class="dec qtybutton"
                                    onClick={() =>
                                      setQty(qty < 2 ? 1 : qty - 1)
                                    }
                                  >
                                    -
                                  </div>
                                  <input
                                    type="text"
                                    id="quantity"
                                    defaultValue={qty}
                                    className="cart-plus-minus-box"
                                    onBlur={(e) =>
                                      setQty(
                                        e.target.value < 1 ? 1 : e.target.value
                                      )
                                    }
                                  />
                                  <div
                                    class="inc qtybutton"
                                    onClick={() => setQty(parseInt(qty) + 1)}
                                  >
                                    +
                                  </div>
                                </div>
                              </li>
                              <li>
                                <a
                                  href=""
                                  className="theme-btn-1 btn btn-effect-1"
                                  title="Add to Cart"
                                  data-toggle="modal"
                                  data-target="#add_to_cart_modal"
                                  onClick={() => onAddCartDetail(productDetail)}
                                >
                                  <i className="fas fa-shopping-cart" />
                                  <span>ADD TO CART</span>
                                </a>
                              </li>
                            </ul>
                          </form>
                        </div>
                        <div className="ltn__product-details-menu-3">
                          <ul>
                            <li>
                              <a
                                href="#"
                                className
                                title="Wishlist"
                                data-toggle="modal"
                                data-target="#liton_wishlist_modal"
                              >
                                <i className="far fa-heart" />
                                <span>Add to Wishlist</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className
                                title="Compare"
                                data-toggle="modal"
                                data-target="#quick_view_modal"
                              >
                                <i className="fas fa-exchange-alt" />
                                <span>Compare</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <hr />
                        <div className="ltn__social-media">
                          <ul>
                            <li>Share:</li>
                            <li>
                              <a href="#" title="Facebook">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Twitter">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Linkedin">
                                <i className="fab fa-linkedin" />
                              </a>
                            </li>
                            <li>
                              <a href="#" title="Instagram">
                                <i className="fab fa-instagram" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <hr />
                        <div className="ltn__safe-checkout">
                          <h5>Guaranteed Safe Checkout</h5>
                          <img
                            src="/assets/img/icons/payment-2.png"
                            alt="Payment Image"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shop Tab Start */}
                <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2">
                  <div className="ltn__shop-details-tab-menu">
                    <div className="nav">
                      <a
                        className="active show"
                        data-toggle="tab"
                        href="#liton_tab_details_1_1"
                      >
                        Description
                      </a>
                      <a
                        data-toggle="tab"
                        href="#liton_tab_details_1_2"
                        className
                      >
                        Reviews
                      </a>
                    </div>
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade active show"
                      id="liton_tab_details_1_1"
                    >
                      <div className="ltn__shop-details-tab-content-inner">
                        <h4 className="title-2">Mô tả sản phẩm</h4>
                        <p>{productDetail.description}</p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="liton_tab_details_1_2">
                      <div className="ltn__shop-details-tab-content-inner">
                        <h4 className="title-2">Customer Reviews</h4>
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                            </li>
                            <li className="review-total">
                              {" "}
                              <a href="#"> ( 95 Reviews )</a>
                            </li>
                          </ul>
                        </div>
                        <hr />
                        {/* comment-area */}
                        <div className="ltn__comment-area mb-30">
                          <div className="ltn__comment-inner">
                            <ul>
                              {commentByProduct.map((data) => (
                                <li key={data.id}>
                                  <div className="ltn__comment-item clearfix">
                                    <div className="ltn__commenter-img">
                                      <img
                                        src="/assets/img/testimonial/1.jpg"
                                        alt="Image"
                                      />
                                    </div>
                                    <div className="ltn__commenter-comment">
                                      <h6>
                                        <a href="#">{data.name}</a>
                                      </h6>
                                      <div className="product-ratting">
                                        <ul>
                                          <li>
                                            <a href="#">
                                              <i className="fas fa-star" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <i className="fas fa-star" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <i className="fas fa-star" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <i className="fas fa-star-half-alt" />
                                            </a>
                                          </li>
                                          <li>
                                            <a href="#">
                                              <i className="far fa-star" />
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                      <p>{data.content}</p>
                                      <span className="ltn__comment-reply-btn">
                                        September 3, 2020
                                      </span>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* comment-reply */}
                        <div className="ltn__comment-reply-area ltn__form-box mb-30">
                          <form onSubmit={handleSubmit(onadd)}>
                            <h4 className="title-2">Add a Review</h4>
                            <div className="mb-30">
                              <div className="add-a-review">
                                <h6>Your Ratings:</h6>
                                <div className="product-ratting">
                                  <ul>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="fas fa-star-half-alt" />
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="far fa-star" />
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="input-item input-item-textarea ltn__custom-icon">
                              <input
                                type="text"
                                hidden
                                {...register("idProduct")}
                                value={productDetail.id}
                              />
                              {errors?.content?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <textarea
                                {...register("content", { required: true })}
                                placeholder="Type your comments...."
                              />
                            </div>
                            <div className="input-item input-item-name ltn__custom-icon">
                              {errors?.name?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <input
                                {...register("name", { required: true })}
                                type="text"
                                placeholder="Type your name...."
                              />
                            </div>
                            <div className="input-item input-item-email ltn__custom-icon">
                              {errors?.email?.type === "required" && (
                                <span style={{ color: "red" }}>
                                  This field is required
                                </span>
                              )}
                              <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Type your email...."
                              />
                            </div>
                            <label className="mb-0">
                              <input type="checkbox" name="agree" /> Save my
                              name, email, and website in this browser for the
                              next time I comment.
                            </label>
                            <div className="btn-wrapper">
                              <button
                                className="btn theme-btn-1 btn-effect-1 text-uppercase"
                                type="submit"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Shop Tab End */}
              </div>
              <div className="col-lg-4">
                <aside className="sidebar ltn__shop-sidebar ltn__right-sidebar">
                  {/* Top Rated Product Widget */}
                  <div className="widget ltn__top-rated-product-widget">
                    <h4 className="ltn__widget-title ltn__widget-title-border">
                      Top Rated Product
                    </h4>
                    <ul>
                      {dataProduct.slice(0, 3).map((top) => (
                        <li key={top.id}>
                          <div className="top-rated-product-item clearfix">
                            <div className="top-rated-product-img">
                              <a href="product-details.html">
                                <Link to={`/shopdetail/${top.id}`}>
                                  <img src={top.image} alt="#" />{" "}
                                </Link>
                              </a>
                            </div>
                            <div className="top-rated-product-info">
                              <div className="product-ratting">
                                <ul>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="fas fa-star" />
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <Link to={`/shopdetail/${top.id}`}>
                                <h6>
                                  <a href="product-details.html">{top.name}</a>
                                </h6>

                                <div className="product-price">
                                  <span>
                                    {" "}
                                    $
                                    {new Intl.NumberFormat("ja-JP").format(
                                      top.price
                                    )}
                                  </span>
                                  <del>$65.00</del>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </li>
                      ))}{" "}
                    </ul>
                  </div>
                  {/* Banner Widget */}
                  <div className="widget ltn__banner-widget">
                    <a href="shop.html">
                      <img src="/assets/img/banner/2.jpg" alt="#" />
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/* SHOP DETAILS AREA END */}
        {/* PRODUCT SLIDER AREA START */}
        <div className="ltn__product-slider-area ltn__product-gutter pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2">
                  <h6 className="section-subtitle ltn__secondary-color">
                    // cars
                  </h6>
                  <h1 className="section-title">
                    Related Products<span>.</span>
                  </h1>
                </div>
              </div>
            </div>
            <div className="row ltn__related-product-slider-one-active slick-arrow-1 slick-initialized slick-slider">
              <Slider {...setting}>
                {/* ltn__product-item */}
                {relateProductMinus.map((relate) => (
                  <div className="col-lg-12" key={relate.id}>
                    <div className="ltn__product-item ltn__product-item-3 text-center">
                      <div className="product-img">
                        <Link to={`/shopdetail/${relate.id}`}>
                          <img src={relate.image} alt="#" />
                        </Link>
                        <div className="product-badge">
                          <ul>
                            <li className="sale-badge">New</li>
                          </ul>
                        </div>
                        <div className="product-hover-action">
                          <ul>
                            <li>
                              <a
                                href="#"
                                title="Quick View"
                                data-toggle="modal"
                                data-target="#quick_view_modal"
                              >
                                <i className="far fa-eye" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Add to Cart"
                                data-toggle="modal"
                                data-target="#add_to_cart_modal"
                              >
                                <i className="fas fa-shopping-cart" />
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                title="Wishlist"
                                data-toggle="modal"
                                data-target="#liton_wishlist_modal"
                              >
                                <i className="far fa-heart" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="product-info">
                        <div className="product-ratting">
                          <ul>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fas fa-star-half-alt" />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="far fa-star" />
                              </a>
                            </li>
                          </ul>
                        </div>
                        <Link to={`/shopdetail/${relate.id}`}>
                          <h2 className="product-title">
                            <a href="product-details.html">{relate.name}</a>
                          </h2>
                          <div className="product-price">
                            <span>
                              {" "}
                              $
                              {new Intl.NumberFormat("ja-JP").format(
                                relate.price
                              )}
                            </span>
                            <del>$162.00</del>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                {/* ltn__product-item */}
              </Slider>
              {/*  */}
            </div>
          </div>
        </div>
        {/* PRODUCT SLIDER AREA END */}
      </div>
      <ModalArea viewP={viewP} />
      <FooterArea />
    </>
  );
};

export default ProductDetailPage;
