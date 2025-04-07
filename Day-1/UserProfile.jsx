import React, { useState } from "react";

const UserProfile = ({ name, age }) => {
  const [nameValue, setNameValue] = useState(name);
  const [ageValue, setAgeValue] = useState(age);
  return (
    <>
      <h1>{nameValue}</h1>
      <h2>{ageValue}</h2>
      <input
        type="text"
        value={nameValue}
        onChange={(e) => {
          setNameValue(e.target.value);
        }}
      />
      <input
        type="number"
        value={ageValue}
        onChange={(e) => {
          setAgeValue(e.target.value);
        }}
      />
    </>
  );
};

export default UserProfile;
