import React from 'react'
import {Link} from "react-router-dom"
const NavAdmin = () => {
    return (
        <>
           <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                  <Link className="nav-link active" to={"/admin"}>
                   
                      <i className="fas fa-house-user"></i>
                        Dashboard
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/admin'}>
                      <span data-feather="file" />
                      Products
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/adminuser'}>
                      <span data-feather="file" />
                      Users
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/admincate'}>
                      <span data-feather="file" />
                      Categories
                    </Link>
                  </li>
                 
                  <li className="nav-item">
                    <Link className="nav-link" to={'/admininvoice'}>
                      <span data-feather="file" />
                      Invoices 
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/adminContact'}>
                      <span data-feather="file" />
                      Contact
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={'/adminComment'}>
                      <span data-feather="file" />
                      Comment
                    </Link>
                  </li>
                </ul>
           
              </div>
            </nav>
            
        </>
    )
}

export default NavAdmin
