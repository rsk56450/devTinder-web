import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Constants from '../utils/constants';
import { addFeed } from '../utils/Slices/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed?.data);

  const getFeed = async() => {
    try {
     const res = await axios.get(`${Constants.BASE_URL}/user/requests/feed` , { withCredentials: true })
      if (res.status == 200) {
      dispatch(addFeed(res.data));
     }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (feed) return;
      getFeed()
    
  },[])

  return (
    <>
    <div className="flex flex-col items-center justify-center gap-4 my-10">
  {feed?.map((user) => (
    <UserCard key={user._id} user={user} />
  ))}
</div>
    </>
  )
}

export default Feed