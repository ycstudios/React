import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // Extracts userid from URL

  return (
    <div>
      <h1>User Page</h1>
      <p>User ID: {id}</p>
    </div>
  );
}

export default User;
