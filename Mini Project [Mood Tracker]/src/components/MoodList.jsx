import React from "react";
import "../assets/styles/MoodList.css";
import { timeAgo } from "../utils";
const MoodList = ({ moodList, title }) => {
  return (
    <>
      <div className="moodlist-container">
        <h2>{title}</h2>
        <hr />
        {!moodList.length && <p>No Moods added</p>}
        <div className="moodlist-cards">
          {moodList.map(({ id, mood, date, note }) => {
            return (
              <div className="card-container" key={id}>
                <h1>{mood}</h1>
                {note && <p>{note}</p>}
                <i>{timeAgo(date)}</i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MoodList;
