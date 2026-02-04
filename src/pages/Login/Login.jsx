//import React, { useContext } from "react";

import login from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const Login = () => {

  //const { signIn } = useContext(AuthContext);

  const { signIn } = useAuth();


  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || '/';

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };


        //get jwt token
        //get jwt token
        axios.post('https://car-doctor-server-lemon-two.vercel.app/jwt', user, { withCredentials: true })
          .then(res => {
            console.log(res.data);
            if (res.data.success) {
              //localStorage.setItem('car-doctor-access-token', res.data.token);
              navigate(from, { replace: true });
            }
          });
      })
      .catch(error => console.log(error))

  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />

                <p>
                  Are you new here? Please
                  <Link to={"/register"}>
                    <span className="text-blue-400 font-bold"> Register</span>
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
