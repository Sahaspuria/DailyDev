import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <div>Oops! Page Not found </div>
      <Link to={"/"}>
        <button>
          Go back to the <u>Home</u>
        </button>
      </Link>
    </>
  );
}

export default NotFound;
