import React, { useState } from "react";
import HandleUserCrud from "../handlers/handleUserCrud";
import { User } from "../models/user";

const ReadUser: React.FC = () => {
  const [id, setId] = useState("");
  const [user, setUser] = useState<User | null>(null);

  const handleUserCrud = new HandleUserCrud();

  const handleRead = async () => {
    const user = await handleUserCrud.read(id);
    setUser(user || null);
  };

  return (
    <div>
      <h1>Read User</h1>
      <div>
        <label>User ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleRead}>Read</button>
      </div>
      {user && (
        <div>
          <h2>User Details</h2>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Mobile: {user.mobile}</p>
          <p>Email: {user.email}</p>
          <p>Occupation: {user.occupation}</p>
        </div>
      )}
    </div>
  );
};

export default ReadUser;
