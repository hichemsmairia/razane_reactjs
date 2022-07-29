import { useNavigate } from "react-router";
import React from "react";
import { auth } from "../../config/firebase";

export default () => {
  const navigate = useNavigate();
  const logout = () => {
    auth
      .signOut()
      .then(() => {
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="app-header header-shadow"
      >
        <h4 style={{ marginLeft: "2vw" }}> Smart Company</h4>

        <div className="widget-content-left">
          <div className="btn-group">
            <div
              onClick={() => {
                logout();
              }}
              style={{
                cursor: "pointer",
                padding: "0px 10px",
                background: "lightgrey",
                borderRadius: "20px",
                border: "none",
                outline: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span>logout</span>
              <i style={{ marginLeft: "10px" }} class="las la-lock"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
