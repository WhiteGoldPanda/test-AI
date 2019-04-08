import React from "react";
import { Link } from "react-router-dom";

const User = () => {
  return (
    <div>
      <div>
        <Link to="/" className="btn waves-effect waves-light">
          <i className="material-icons">Home</i>
        </Link>
      </div>
    </div>
  );
};

export default User;
