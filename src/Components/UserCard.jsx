import axios from "axios";
import React from "react";
import Constants from "../utils/constants";
import { removeFeed } from "../utils/Slices/feedSlice";
import { useDispatch } from "react-redux";

const UserCard = ({ user }) => {
  console.log("user -------  ", user);
  const dispatch = useDispatch();

  const handleSendRequest = async ({status, userId}) => {
    try {
      const res = await axios.post(`${Constants.BASE_URL}/requests/sendConnectionRequest/${status}/${userId}`,{}, { withCredentials: true });
      if (res.status === 200) {
        dispatch(removeFeed(user?._id));
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={user?.photoUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {user?.firstName} {user?.lastName} - {user?.age} years old - {user?.gender}
        </h2>
        <p>{user?.about}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary btn-outline" onClick={() => handleSendRequest({status: "intrested", userId: user?._id})}>Intrested</button>
          <button className="btn btn-primary" onClick={() => handleSendRequest({status: "ignore", userId: user?._id})}>Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
