import React from "react";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("ke submit");
    navigate("/dahboard");
  };
  return (
    <div className="hero bg-white min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-primary font-bold">
            Selamat Datang Admin Compedia
          </h1>
        </div>
        <div className="card bg-white w-full max-w-sm shrink-0 shadow-custom-shadow border border-primary">
          <form
            id="login-form"
            className="card-body"
            onSubmit={(e) => onSubmit(e)}
          >
            <h1 className="text-textBlack text-xl">Log in Akunmu Disini</h1>
            <div className="form-control">
              <label>
                <span className="label-text text-textBlack">Email</span>
                <span className="label-text text-red">*</span>
              </label>
              <input
                type="email"
                placeholder="Masukkan alamat email anda disini"
                className="input input-bordered bg-white placeholder-hint text-textBlack"
                required
              />
            </div>
            <div className="form-control">
              <label>
                <span className="label-text text-textBlack">Password</span>
                <span className="label-text text-red">*</span>
              </label>
              <input
                type="password"
                placeholder="Masukkan kata sandi anda disini"
                className="input input-bordered bg-white placeholder-hint text-textBlack"
                required
              />
            </div>
            <div className="form-control mt-6">
              <Button
                title={"Masuk"}
                butonType={"submit"}
                formId={"login-form"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
