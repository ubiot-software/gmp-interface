import React from "react";
import "@styles/RequestAccess.scss";
import infoImg from "@assets/info.svg";

const RequestAccess = () => {
  return (
    <div className="RequestAccess">
      <img src={infoImg} />
      <p>
        <span>Connect your wallet</span> to use the app
      </p>
    </div>
  );
};

export default RequestAccess;
