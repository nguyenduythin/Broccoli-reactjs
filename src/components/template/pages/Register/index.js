import React from "react";
import FooterArea from "../../FooterArea";
import HeaderTemplate from "../../HeaderTemplate";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const Register = ({
  cartItems,
  onRemoveCart,
  handlLogOut,
  loginUser,
  handleRegister,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let history = useHistory();

  const onSubmit = (data) => {


    if (data.password === data.passwordConfirm) {
      console.log("thành côpng----", data);
      handleRegister(data);
      alert("Đăng ký thành công !")
      history.push("/login")

    } else {
      alert(" Mật khẩu nhập lại không khớp !");
    }
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
                    <h1 className="section-title white-color">Register</h1>
                  </div>
                  <div className="ltn__breadcrumb-list">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>Register</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BREADCRUMB AREA END */}
        {/* LOGIN AREA START (Register) */}
        <div className="ltn__login-area pb-110">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h1 className="section-title">
                    Register <br />
                    Your Account
                  </h1>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.{" "}
                    <br />
                    Sit aliquid, Non distinctio vel iste.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                <div className="account-login-inner">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="ltn__form-box contact-form-box"
                  >
                    {errors?.fsname?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <input
                      type="text"
                      {...register("fsname", { required: true })}
                      placeholder="First Name"
                    />
                    {errors?.lsname?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <input
                      type="text"
                      {...register("lsname", { required: true })}
                      placeholder="Last Name"
                    />
                    {errors?.email?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <input
                      {...register("email", { required: true })}
                      type="text"
                      placeholder="Email*"
                    />
                    {errors?.password?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      placeholder="Password*"
                    />
                    {errors?.passwordConfirm?.type === "required" && (
                      <span style={{ color: "red" }}>
                        This field is required
                      </span>
                    )}
                    <input
                      {...register("passwordConfirm", { required: true })}
                      type="password"
                      placeholder="Confirm Password*"
                    />

                    <label className="checkbox-inline">
                      <input type="checkbox" defaultValue />I consent to Herboil
                      processing my personal data in order to send personalized
                      marketing material in accordance with the consent form and
                      the privacy policy.
                    </label>
                    <label className="checkbox-inline">
                      <input type="checkbox" defaultValue />
                      By clicking "create account", I consent to the privacy
                      policy.
                    </label>
                    <div className="btn-wrapper">
                      <button
                        className="theme-btn-1 btn reverse-color btn-block"
                        type="submit"
                      >
                        CREATE ACCOUNT
                      </button>
                    </div>
                  </form>
                  <div className="by-agree text-center">
                    <p>By creating an account, you agree to our:</p>
                    <p>
                      <a href="#">
                        TERMS OF CONDITIONS &nbsp; &nbsp; | &nbsp; &nbsp;
                        PRIVACY POLICY
                      </a>
                    </p>
                    <div className="go-to-btn mt-50">
                      <Link to="/login">ALREADY HAVE AN ACCOUNT ?</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* LOGIN AREA END */}
      </div>

      <FooterArea />
    </>
  );
};

export default Register;
