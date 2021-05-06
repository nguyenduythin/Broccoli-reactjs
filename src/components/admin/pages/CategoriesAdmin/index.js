import React from "react";
import HeaderAdmin from "../../HeaderAdmin";
import NavAdmin from "../../NavAdmin";
import { Link } from "react-router-dom";
const CategoriesAdmin = ({dataCate,onHandleDelCate}) => {
  return (
    <>
      <div>
        <HeaderAdmin />

        <div className="container-fluid" style={{ marginTop: "15px" }}>
          <div className="row">
            <NavAdmin />
            {/* content admin */}
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <h2 style={{ width: "300px", marginRight: "0", float: "left" }}>
                Categories Data
              </h2>{" "}
              <Link to={"/addcate"}>
                <button
                  className="btn-success btn-add-admin"
                
                >
                  Addnew
                </button>
              </Link>
              <div className="table-responsive">
                <table className="table table-striped table-sm">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Name Cate</th>
                     

                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataCate.map((dataC, index) => (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{dataC.name}</td>
                      
                        <td>{dataC.quantity}</td>

                        <td>
                          <Link to={`/editcate/${dataC.id}`}>
                            <button>
                              <i className="far fa-edit" />
                            </button>
                          </Link>

                          <button
                            style={{ marginLeft: "10px" }}
                             onClick={() => onHandleDelCate(dataC.id)}
                          >
                            <i className="fas fa-trash-alt" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
            {/* content admin */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoriesAdmin;
