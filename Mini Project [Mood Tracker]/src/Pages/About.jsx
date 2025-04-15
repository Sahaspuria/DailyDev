import React from "react";
import "../assets/styles/about.css";
const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About This Web App</h1>
      </header>

      <main className="about-main">
        <h2>Mood Tracker App</h2>
        <p>
          Mood Tracker App is a practice project where you can record and track
          your daily mood. This app allows users to select their mood from a
          dropdown, optionally add a note, and then save the entry. Each day,
          users can view their mood and note, and revisit previous entries in
          the "History" page.
        </p>

        <h2>Technologies Used</h2>
        <ul className="tech-list">
          <li>Moment.js</li>
          <li>React JS</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>useRef, useState, useEffect</li>
          <li>React Router v7 for navigation</li>
          <li>LocalStorage to persist data</li>
        </ul>

        <h2>How to Use?</h2>
        <div className="usage-instructions">
          <p>
            Select your mood from the dropdown menu, add an optional note to
            describe your mood (or leave it blank), and then click the "Add"
            button to save your mood for the day.
          </p>
        </div>

        <h2>Why No Delete Button?</h2>
        <p>
          I have intentionally not added a delete button because the goal of
          this app is to track your true feelings. Deleting your bad moods can
          give a false picture of your emotional state. I want you to be honest
          with your emotions and record your mood as it is, whether it's good or
          bad.
        </p>
      </main>
    </div>
  );
};

export default About;
