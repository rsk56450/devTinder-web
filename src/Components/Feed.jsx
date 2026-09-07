import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Constants from '../utils/constants';
import { addFeed } from '../utils/Slices/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const dispatch = useDispatch();
  const feed = useSelector((state) => state.feed);


  const getFeed = async() => {
    try {
      const res = await axios.get(`${Constants.BASE_URL}/user/requests/feed`, { withCredentials: true })
      console.log("res -------  ", res);
      if (res.status == 200) {
      dispatch(addFeed(res.data?.data));
     }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (feed && feed.length > 0) return;
      getFeed()
    
  },[])

  return feed && feed.length > 0 ? (
    <>
    <div className="flex flex-col items-center justify-center gap-4 my-10">
  {feed?.map((user) => (
    <UserCard key={user._id} user={user} />
  ))}
</div>
    </>
  ) : (
    <div className="flex flex-col items-center justify-center gap-4 my-10">
      <h1 className="text-2xl font-bold">No feed found</h1>
    </div>
  )
}

export default Feed