import React from "react";
import { Navbar, Nav, Container, Form, FormControl } from "react-bootstrap";

interface AppNavbarProps {
  searchTerm?: string;
  handleSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  listPage?: boolean;
}

const AppNavbar = ({ searchTerm, handleSearch, listPage }: AppNavbarProps) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">User Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {listPage && <Nav.Link href="/create">Create User</Nav.Link>}
          </Nav>
          {listPage && (
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search User"
                className="me-2"
                aria-label="Search"
                value={searchTerm ?? ""}
                onChange={handleSearch ?? (() => {})}
              />
            </Form>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
