import React from "react";
import { getInitials } from "../utils";
import "..styles/style.css";

const Avatar = ({ userName = "" }) => {
  const userInitials = getInitials(userName);
  return (
    <>
      <div className="avatar__circle">{userInitials}</div>
    </>
  );
};

export default Avatar;
