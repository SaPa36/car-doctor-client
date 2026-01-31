import React from "react";

import login from "../../assets/images/login/login.svg"
import { Link } from "react-router-dom";

const Register = () => {

    const handleRegister = e =>{
        e.preventDefault();
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <h1 className="text-5xl font-bold">Register now!</h1>
                <label className="label">Name</label>
                <input type="text" name="name" className="input" placeholder="Name" />

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
                  Already Have an account?
                  <Link to={"/login"}>
                    <span className="text-blue-400 font-bold"> Login</span>
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

export default Register;
