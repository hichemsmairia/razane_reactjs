import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router";
import React from "react";
import { auth } from "../../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "../../assets/icons/auth.png";



export default () => {

  // les hooks :  const [email,setEmail] = useState('')
  //  let email = '' 

  //  function semail (x) {
  //    email = x 
  //  }

  const [showpass, setshowpass] = useState(false);


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  
  
  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    await auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        auth.onAuthStateChanged((authUser) => {
          if (authUser) {
            //je vais sauvgardé les donnes utilisateur
            //dans le cookies du sites web 
            localStorage.setItem("user", authUser);
          } else {
            localStorage.removeItem("user");
          }
        });
      })
      .then(() => {
        setTimeout(() => {
         
          navigate("/dashboard", { replace: true });
           navigate(0);
        }, 500);
      })
      //si il'ya une erreur , on va afficher une alert ! 
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <ToastContainer />
      <div className="content" style={{paddingTop:'20vh'}}>
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
                  src={Auth}
                  style={{ height: "12vh" }}
                  alt="sdsd"
                  className="img-fluid"
                />
              </span>
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="row justify-content-center">
                    <h4>Sign In</h4>
                  </div>
                  <form onSubmit={(e) => handleLogin(e)}>
                    <div className="form_item">
                      <span>Email</span>
                      <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
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
                      Log In
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
