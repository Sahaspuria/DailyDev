import React from "react";
import Avatar from "./Avatar";
import "..styles/style.css";

const ProfileCard = ({ userName }) => {
  return (
    <>
      <div className="card">
        <Avatar userName={userName} />
        <p className="avatar__label">{userName}</p>
      </div>
    </>
  );
};

export default ProfileCard;
