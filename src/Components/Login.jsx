import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/Slices/userSlice";
import { useNavigate } from "react-router-dom";
import Constants from "../utils/constants";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = Constants.BASE_URL;
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const API_URL = `${BASE_URL}/auth/login`;
      const response = await axios.post(
        API_URL,
        { email, password },
        { withCredentials: true },
      );
      console.log("response---3--3-3-3-", response.data);
      dispatch(addUser(response.data));
      return navigate("/");
    } catch (error) {
      setError(error?.response?.data?.message);
      console.error(error?.response?.data?.message);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center my-10">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend text-2xl font-bold">Login</legend>

          <label className="label text-md font-bold">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
          />

          <label className="label text-md font-bold">Password</label>
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />

          <button className="btn btn-neutral mt-4" onClick={handleLogin}>
            Login
          </button>
        </fieldset>
      </div>
      {error && <div className="text-center text-red-500 my-10">{error}</div>}
    </>
  );
};

export default Login;
