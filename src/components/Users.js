import React from "react";
import { Link } from "react-router-dom";
import FetchClient from "./fetchUser";
const Users = () => {
  return (
    <div>
      <div>
        <Link to="/" className="btn waves-effect waves-light">
          <i className="material-icons">Home</i>
        </Link>
        <FetchClient />
      </div>
    </div>
  );
};

export default Users;
