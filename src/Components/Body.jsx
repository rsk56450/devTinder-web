import React, { useEffect } from 'react'
import NavbarComponent from './NavbarComponent.jsx';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx';
import axios from 'axios';
import Constants from '../utils/constants.js';
import { useDispatch, useSelector } from 'react-redux';
import {addUser} from "../utils/Slices/userSlice.js"

const Body = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userData = useSelector((state) => state.user);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${Constants.BASE_URL}/profile/getProfile`, {
        withCredentials: true,
      })

      console.log("=-1111--",res?.data)
      dispatch(addUser(res?.data));
      
    }catch(error){
      console.log("----error --- ",error);
      if (error?.response?.status === 401) {
        navigate("/login");
      }
    }
  }

  useEffect(() => {
    if (userData) {
      return
    }
    fetchUser()
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <NavbarComponent />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Body