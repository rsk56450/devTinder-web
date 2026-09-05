import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Constants from '../utils/constants';
import ToastUi from './ToastUi';
import { fetchConnections } from './Connections';
import { clearConnections } from '../utils/Slices/connectionSlice';
import { useDispatch } from 'react-redux';

const ConnectionRequestListCompoenent = ({ connection, index }) => {
    console.log("request_id--->", connection._id);
    const [showToast, setShowToast] = useState(false);
    const [status, setStatus] = useState("");
    const dispatch = useDispatch();
    useEffect(() => {
        if (showToast) {
            setTimeout(() => {
                setShowToast(false);
                setStatus("");
                dispatch(clearConnections());
                fetchConnections(dispatch);
            }, 1000);
        }
    }, [showToast]);
  
    const toastUi = () => {
        return (
            <ToastUi message={status === "accept" ? "Request accepted successfully" : "Request rejected successfully"} type={status === "accept" ? "success" : "error"} />
        );
    }

    const reviewRequest = async (status , request_id) => { 
        try {
            const res = await axios.post(`${Constants.BASE_URL}/requests/review/${status}/${request_id}` , {}, {
                withCredentials: true,
            });
            console.log("res--->", res);
            if(res?.status === 200) {
                setShowToast(true);
            } else {
                setShowToast(true);
            }
        } catch (error) {
            console.log("error--->", error);
        }
    }
  return showToast ? toastUi() : (
      <div className='flex flex-row gap-4 justify-center items-center border-2 border-gray-300 rounded-md p-4' key={index}>
          <div>
              <img src={connection?.fromUserId?.photoUrl} alt="profile" className='w-10 h-10 rounded-full object-cover object-center justify-center items-center'/>
          </div>
          <div className='flex flex-col gap-2 justify-center items-center'>
              <h1>{connection?.fromUserId?.firstName} {connection?.fromUserId?.lastName}</h1>
          </div>
          <div className='flex flex-row gap-2 justify-center items-center'>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => {
                  reviewRequest("accept", connection._id);
                  setStatus("accept");
              }}>Accept</button>
              <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => {
                  reviewRequest("reject", connection._id);
                  setStatus("reject");
              }}>Reject</button>
          </div>
    </div>
  )
}

export default ConnectionRequestListCompoenent