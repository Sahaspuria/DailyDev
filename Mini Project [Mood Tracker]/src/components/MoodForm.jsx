import React, { useRef, useState } from "react";
import "../assets/styles/MoodForm.css";

function MoodForm({ onAddMood }) {
  const [mood, setMood] = useState("");
  const inputRef = useRef({});

  const handleAddMood = (e) => {
    e.preventDefault();

    if (!mood) return alert("Please enter a mood.");
    const note = inputRef.current.value;
    const newMood = {
      id: Date.now(),
      mood,
      note,
      date: new Date().toISOString(),
    };
    onAddMood(newMood);
    setMood("");
    inputRef.current.value = "";
  };

  return (
    <div>
      <h1>How are you feeling?</h1>
      <form action="" onSubmit={handleAddMood}>
        <label htmlFor="mood">
          <select
            className="mood-list"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
          >
            <option value="">Select mood</option>
            <option value="😊">Happy</option>
            <option value="😔">Sad</option>
            <option value="😡">Angry</option>
            <option value="😴">Tired</option>
            <option value="😎">Cool</option>
          </select>
        </label>
        <label htmlFor="mood-note">
          <input
            ref={inputRef}
            className="mood-input"
            type="text"
            // value={note}
            // onChange={(e) => setNote(e.target.value)}
            placeholder="Wanna say something?"
          />
        </label>
        <button type="submit">Add +</button>
      </form>
    </div>
  );
}

export default MoodForm;
