import React, { useEffect, useState } from "react";
import MoodList from "../components/MoodList";

const LOCAL_STORAGE_KEY = "myMoodsState";

const History = () => {
  const moodsArr = () => {
    const savedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedItems ? JSON.parse(savedItems) : [];
  };

  return (
    <>
      <MoodList title={"My Past Moods:"} moodList={moodsArr()} />
    </>
  );
};

export default History;
