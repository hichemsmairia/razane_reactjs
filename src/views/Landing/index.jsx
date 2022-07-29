import { useNavigate } from "react-router";
import React from "react";
import Landing from "../../assets/icons/landing.png";
export default () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <header id="header-section">
          <nav className="navbar navbar-expand-lg pl-3 pl-sm-0" id="navbar">
            <div className="container">
              <div className="navbar-brand-wrapper d-flex w-100">
                <h2>Smart Company</h2>
              </div>
            </div>
          </nav>
        </header>

        <div className="content">
          <div className="container">
            {" "}
            <div className="row">
              <div className="col-md-6">
                <img
                  src={Landing}
                  alt="sdsd"
                  style={{ marginBottom: "5vh" }}
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 contents">
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h2>Welcome</h2>
                      <h4 className="mb-4">
                        Login to access the main dashboard , or register to
                        create a neww account
                      </h4>
                    </div>
                    <br />
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <button
                        onClick={() => {
                          navigate("/login", { replace: true });
                        }}
                        className="btn btn-info"
                      >
                        login
                      </button>

                      <button
                        onClick={() => {
                          navigate("/register", { replace: true });
                        }}
                        className="btn btn-info"
                      >
                        register
                      </button>
                    </div>

                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
