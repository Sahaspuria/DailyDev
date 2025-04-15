import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import MoodForm from "../components/MoodForm";
import MoodList from "../components/MoodList";
import { filterOnlyToday } from "../utils";

const LOCAL_STORAGE_KEY = "myMoodsState";

const Home = () => {
  const [moodList, setMoodList] = useState(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : []; // fallback to empty array);
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(moodList));
  }, [moodList]);

  const todaysMood = filterOnlyToday(moodList);
  return (
    <>
      <MoodForm
        onAddMood={(v) => {
          setMoodList((pre) => [...pre, v]);
        }}
      />
      <MoodList moodList={todaysMood} title={"My mood throughout the Day:"} />
    </>
  );
};

export default Home;
