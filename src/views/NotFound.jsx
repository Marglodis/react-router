import React from "react";
import notfound from "../assets/img/sad.png";
const NotFound = () => {
  return (
    <div className="home">
      <h1>404 Page Not Found</h1>
      <div className="notfound">
      
        <img src={notfound} alt="notfound" />
      </div>
    </div>
  );
};

export default NotFound;
