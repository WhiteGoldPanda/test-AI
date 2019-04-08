import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Link to="/users">
        <button
          className="btn waves-effect waves-light"
          type="submit"
          name="action"
        >
          <i className="material-icons right">See Users</i>
        </button>
      </Link>
    </div>
  );
};

export default Home;
