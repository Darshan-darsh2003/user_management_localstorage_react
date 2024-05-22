import React, { useState } from "react";
import HandleUserCrud from "../handlers/handleUserCrud";

const DeleteUser: React.FC = () => {
  const [id, setId] = useState("");

  const handleUserCrud = new HandleUserCrud();

  const handleDelete = async () => {
    await handleUserCrud.delete(id);
    alert("User deleted successfully");
  };

  return (
    <div>
      <h1>Delete User</h1>
      <div>
        <label>User ID:</label>
        <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default DeleteUser;
