import React from "react";
import "@styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="NotFound">
      <h1 className="title">404</h1>
      <h2 className="subtitle">Page not found!</h2>
      <p className="description">
        Try using the button below to go the main page
      </p>
      <button
        className="primary-button not-found"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Back to page
      </button>
    </div>
  );
};

export default NotFound;
