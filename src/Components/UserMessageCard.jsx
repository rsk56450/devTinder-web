import React from 'react'

const UserMessageCard = ({ connection }) => {
    return (
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={connection?.photoUrl} alt={`${connection?.firstName}`} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {connection?.firstName} {connection?.lastName} - {connection?.age} years old - {connection?.gender}
          </h2>
          <p>{connection?.about}</p>
        </div>
      </div>
    );
};
  
export default UserMessageCard;