import React, { useEffect } from "react";
import axios from "axios";
import Constants from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setConnections } from "../utils/Slices/connectionSlice";
import UserCard from "./UserCard";
import ConnectionRequestListCompoenent from "./ConnectionRequestListCompoenent";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((state) => state.connection);
  console.log("connections--1213->", connections);
 
  useEffect(() => {
    fetchConnections(dispatch);
  }, []);

  return connections?.length > 0 ? (
    <div className="flex flex-col gap-4 my-4 justify-center items-center">
      <h1>Connections Requests {"(" + connections?.length + ")"}</h1>
      {connections?.map((connection,index) => {
        return (
          <ConnectionRequestListCompoenent
            index={index}
            connection={connection}
          />
        );
      })}
    </div>
  ) : (
    <div>
      <h1>No connections found</h1>
    </div>
  );
};

export const fetchConnections = async (dispatch) => {
  const res = await axios.get(
    `${Constants.BASE_URL}/user/requests/received`,
    {
      withCredentials: true,
    },
  );
  console.log("res--->", res?.data?.data);

  if (res?.status === 200) {
    dispatch(setConnections(res?.data?.data));
  }
};
export default Connections;
