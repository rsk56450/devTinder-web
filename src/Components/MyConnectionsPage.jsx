import axios from 'axios';
import React, { useEffect } from 'react'
import Constants from '../utils/constants';
import { setMyConnectionList } from '../utils/Slices/myConnectionList';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from './UserCard';
import UserMessageCard from './UserMessageCard';

const MyConnectionsPage = () => {

    const myConnectionList = useSelector((state) => state.myConnectionList);
    console.log("myConnectionList--->", myConnectionList);

    const dispatch = useDispatch();
    const fetchMyConnectionList = async () => {
        const res = await axios.get(`${Constants.BASE_URL}/user/requests/connections`, {
            withCredentials: true,
        });
        console.log("res--->", res?.data?.data);
        if (res?.status === 200) {
            dispatch(setMyConnectionList(res?.data?.data));
        }
    }
    useEffect(() => {
        fetchMyConnectionList();
    }, []);

    return (
        <>
            <h1 className='text-2xl font-bold'>My Connections</h1>
    <div className='flex flex-col gap-4 my-4 justify-center items-center'>
    {myConnectionList.map((connection) => (
       <UserMessageCard connection={connection} />
    ))}
    </div>
    </>
  )
}

export default MyConnectionsPage