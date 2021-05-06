import React from "react";
import FooterArea from "../../FooterArea";
import HeaderTemplate from "../../HeaderTemplate";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const ContactPage = ({ cartItems, onRemoveCart, loginUser, handlLogOut,handleAddContact }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    handleAddContact(data)
  };
  return (
    <>
      <HeaderTemplate
        loginUser={loginUser}
        handlLogOut={handlLogOut}
        cartItems={cartItems}
        onRemoveCart={onRemoveCart}
      />

      <div>
        {/* BREADCRUMB AREA START */}
        <div
          className="ltn__breadcrumb-area ltn__breadcrumb-area-2 ltn__breadcrumb-color-white bg-overlay-theme-black-90 bg-image"
          style={{ backgroundImage: "url(./assets/img/bg/9.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__breadcrumb-inner ltn__breadcrumb-inner-2 justify-content-between">
                  <div className="section-title-area ltn__section-title-2">
                    <h6 className="section-subtitle ltn__secondary-color">
                      // Welcome to our company
                    </h6>
                    <h1 className="section-title white-color">Contact Us</h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>Contact</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* CONTACT ADDRESS AREA START */}
        <div className="ltn__contact-address-area mb-90">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                  <div className="ltn__contact-address-icon">
                    <img src="./assets/img/icons/10.png" alt="Icon Image" />
                  </div>
                  <h3>Email Address</h3>
                  <p>
                    info@webmail.com <br />
                    jobs@webexample.com
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                  <div className="ltn__contact-address-icon">
                    <img src="./assets/img/icons/11.png" alt="Icon Image" />
                  </div>
                  <h3>Phone Number</h3>
                  <p>
                    +0123-456789 <br /> +987-6543210
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                  <div className="ltn__contact-address-icon">
                    <img src="./assets/img/icons/12.png" alt="Icon Image" />
                  </div>
                  <h3>Office Address</h3>
                  <p>
                    18/A, New Born Town Hall <br />
                    New York, US
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT ADDRESS AREA END */}
        {/* CONTACT MESSAGE AREA START */}
        <div className="ltn__contact-message-area mb-120 mb--100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__form-box contact-form-box box-shadow white-bg">
                  <h4 className="title-2">Get A Quote</h4>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item input-item-name ltn__custom-icon">   {errors?.nameContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                          <input
                            {...register("nameContact",{required:true})}
                            type="text"
                            placeholder="Enter your name"
                          />
                        
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-email ltn__custom-icon">{errors?.emailContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                          <input
                            {...register("emailContact",{required:true})}
                            type="email"
                            placeholder="Enter email address"
                          />
                           
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item">     {errors?.serviceContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                          <select
                            className="nice-select"
                            {...register("serviceContact",{required:true})}
                          >
                            <option value="">Select Service Type</option>
                            <option value="Gardening">Gardening </option>
                            <option value="Landscaping">Landscaping </option>
                            <option value="Vegetables Growing">
                              Vegetables Growing
                            </option>
                            <option value="Land Preparation">
                              Land Preparation
                            </option>
                          </select>
                     
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item input-item-phone ltn__custom-icon">    {errors?.phoneContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                          <input
                            {...register("phoneContact",{required:true})}
                            type="text"
                            placeholder="Enter phone number"
                          />
                       
                        </div>
                      </div>
                    </div>
                    <div className="input-item input-item-textarea ltn__custom-icon">  {errors?.messageContact?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                      <textarea
                        {...register("messageContact",{required:true})}
                        placeholder="Enter message"
                      />
                     
                    </div>
                    <p>
                      <label className="input-info-save mb-0">
                        <input type="checkbox" name="agree" /> Save my name,
                        email, and website in this browser for the next time I
                        comment.
                      </label>
                    </p>
                    <div className="btn-wrapper mt-0">
                      <button
                        className="btn theme-btn-1 btn-effect-1 text-uppercase"
                        type="submit"
                      >
                        get an free service
                      </button>
                    </div>
                    <p className="form-messege mb-0 mt-20" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT MESSAGE AREA END */}
        {/* GOOGLE MAP AREA START */}
        <div className="google-map mb-120">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            frameBorder={0}
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
        {/* GOOGLE MAP AREA END */}
      </div>

      <FooterArea />
    </>
  );
};

export default ContactPage;
