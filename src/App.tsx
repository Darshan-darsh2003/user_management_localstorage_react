import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./pages/UserList";
import CreateUser from "./pages/CreateUser";
import ReadUser from "./pages/ReadUser";
import UpdateUser from "./pages/UpdateUser";
import DeleteUser from "./pages/DeleteUser";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">User List</Link>
            </li>
            <li>
              <Link to="/create">Create User</Link>
            </li>
            <li>
              <Link to="/read">Read User</Link>
            </li>
            <li>
              <Link to="/update">Update User</Link>
            </li>
            <li>
              <Link to="/delete">Delete User</Link>
            </li>
          </ul>
        </nav> */}

        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/read" element={<ReadUser />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/delete" element={<DeleteUser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
``;
