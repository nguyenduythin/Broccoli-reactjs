import { useState } from "react";
import { Link } from "react-router-dom";

const ProductTabArea = ({ dataProduct, onAddCart, dataCate }) => {
  const [listProductCate, setListProductCate] = useState(dataProduct);

  const chooseCate = (idCate) => {
    const filterIdCate = dataProduct.filter(
      (listCate) => listCate.categoriesID === idCate
    );
    setListProductCate(filterIdCate);
  };

  return (
    <>
      <div className="ltn__product-tab-area ltn__product-gutter pt-85 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2 text-center">
                <h1 className="section-title">Our Products</h1>
              </div>
              <div className="ltn__tab-menu ltn__tab-menu-2 ltn__tab-menu-top-right-- text-uppercase text-center">
                <div className="nav">
                  <a className data-toggle="tab" href="" onClick={() => setListProductCate(dataProduct)} >
                    Tất cả
                  </a>
                  {dataCate.map((cate) => (
                    <a
                      key={cate.id}
                      className
                      data-toggle="tab"
                      href=""
                      onClick={() => chooseCate(cate.id)}
                    >
                      {cate.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="tab-content">
                <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                  {/* ltn__product-item */}
                  {listProductCate.slice(0, 8).map((dataP) => (
                    <div
                      className="col-lg-3 col-md-4 col-sm-6 col-6"
                      key={dataP.id}
                    >
                      <div className="ltn__product-item ltn__product-item-3 text-left">
                        <div className="product-img">
                          <a href="product-details.html">
                            <img src={dataP.image} alt="#" />
                          </a>
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
                                  onClick={() => onAddCart(dataP)}
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
                          <Link to={`/shopdetail/${dataP.id}`}>
                            <h2 className="product-title">
                              <Link to={`/shopdetail/${dataP.id}`}>
                                {dataP.name}
                              </Link>
                            </h2>
                            <div className="product-price">
                              <span>
                                $
                                {new Intl.NumberFormat("ja-JP").format(
                                  dataP.price
                                )}
                              </span>
                              <del>$162.00</del>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/*  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductTabArea;
