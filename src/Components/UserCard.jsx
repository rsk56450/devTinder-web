import React from "react";

const UserCard = ({ user }) => {
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
          <button className="btn btn-primary btn-outline">Intrested</button>
          <button className="btn btn-primary">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
