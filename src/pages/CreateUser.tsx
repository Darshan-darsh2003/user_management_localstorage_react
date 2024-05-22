import React, { useState } from "react";
import HandleUserCrud from "../handlers/handleUserCrud";
import { User } from "../models/user";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import AppNavbar from "../components/Navbar";

const CreateUser: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | string>("");
  const [mobile, setMobile] = useState<number | string>("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");

  const handleUserCrud = new HandleUserCrud();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user: User = {
      id: "",
      name,
      age: Number(age),
      mobile: Number(mobile),
      email,
      address,
      city,
      state,
      country,
      occupation,
    };
    await handleUserCrud.create(user);
    alert("User created successfully");
    // Reset form fields
    setName("");
    setAge("");
    setMobile("");
    setEmail("");
    setOccupation("");
    setAddress("");
    setCity("");
    setState("");
    setCountry("");
    window.location.href = "/";
  };

  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <h1 className="mb-4">Create User</h1>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formOccupation">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                required
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Create
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default CreateUser;
