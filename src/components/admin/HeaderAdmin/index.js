import React from "react";
import {Link} from "react-router-dom"
const HeaderAdmin = () => {

  const handleChange = (value) => {
    console.log(value);
  };
  
  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to={"/"}>
          Broccoli Manager
        </Link>

        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <div className="nav-link">
              <input
                className="input-search-admin"
                onChange={handleChange}
                type="text"
                placeholder={"search....."}
              />
              <span>Thin duy</span> | Sign out
            </div>
          </li>
        </ul>
      </header>
    </>
  );
};

export default HeaderAdmin;
