// import React, { useState, useEffect } from "react";
// import { User } from "../models/user";
// import HandleUserCrud from "../handlers/handleUserCrud";

// const UserList: React.FC = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const handleUserCrud = new HandleUserCrud();

//   useEffect(() => {
//     setUsers(handleUserCrud.getUsers());
//   }, []);

//   return (
//     <div>
//       <h1>User List</h1>
//       <div id="user-container">
//         {users.map((user) => (
//           <div key={user.id}>
//             {`ID: ${user.id}, Name: ${user.name}, Age: ${user.age}, Mobile: ${user.mobile}`}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UserList;

import React, { useState, useEffect } from "react";
import { User } from "../models/user";
import HandleUserCrud from "../handlers/handleUserCrud";
import { Container, Button, Table } from "react-bootstrap";
import AppNavbar from "../components/Navbar";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const handleUserCrud = new HandleUserCrud();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setUsers(handleUserCrud.getUsers());
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    handleUserCrud.delete(id);
    setUsers(handleUserCrud.getUsers());
  };

  const handleUpdate = (id: string) => {
    window.location.href = `/update/${id}`;
  };

  return (
    <div>
      {/* Navbar */}
      <AppNavbar
        searchTerm={searchTerm}
        handleSearch={handleSearch}
        listPage={true}
      />

      {/* User Cards */}
      <Container className="mt-4">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user: User) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.mobile}</td>
                <td>
                  <>{user.address ?? ""}</>
                </td>
                <td>
                  <Button
                    variant="warning"
                    className="me-2"
                    onClick={() => {
                      handleUpdate(user.id);
                    }}
                  >
                    Update
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => {
                      handleDelete(user.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default UserList;
