import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router";
import React from "react";
import { auth } from "../../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "../../assets/icons/register.png";

export default () => {
  const [showpass, setshowpass] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");

  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    // Create a new user with email and password using firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        toast.success("account created , please login");
        if (auth) {
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <ToastContainer />
      <div className="content" style={{ paddingTop: "15vh" }}>
        <div className="container">
          {" "}
          <div className="row">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="col-md-6"
            >
              <span style={{ textAlign: "center" }}>
                {" "}
                <img
                  src={Register}
                  style={{ height: "20vh" }}
                  alt="sdsd"
                  className="img-fluid"
                />
              </span>
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="row justify-content-center">
                    <h4>Register</h4>
                  </div>
                  <form onSubmit={(e) => handleRegister(e)}>
                    <div className="form_item">
                      <span>Email</span>
                      <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                      />
                    </div>

                    <br />
                    <div className="form_item">
                      <span>Name</span>
                      <input
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                      />
                    </div>
                    <br />
                    <div className="form_item">
                      <span>lastName</span>
                      <input
                        value={lastname}
                        onChange={(e) => setlastname(e.target.value)}
                      />
                    </div>
                    <br />
                    <div className="form_password_item">
                      <div className="pas_part">
                        <span>Password</span>
                        <input
                          value={password}
                          onChange={(e) => setpassword(e.target.value)}
                          type={showpass ? "text" : "password"}
                        />
                      </div>
                      {showpass ? (
                        <i
                          onClick={() => setshowpass(!showpass)}
                          class="las la-eye"
                        ></i>
                      ) : (
                        <i
                          onClick={() => setshowpass(!showpass)}
                          class="las la-eye-slash"
                        ></i>
                      )}
                    </div>

                    <button type="submit" className="btn btn-block btn-primary">
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
