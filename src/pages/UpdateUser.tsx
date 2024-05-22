import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HandleUserCrud from "../handlers/handleUserCrud";
import { User } from "../models/user";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import AppNavbar from "../components/Navbar";

const UpdateUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
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

  useEffect(() => {
    const fetchUser = async () => {
      const user = await handleUserCrud.read(id ?? "");
      if (user) {
        setName(user.name);
        setAge(user.age);
        setMobile(user.mobile);
        setEmail(user.email ?? "");
        setAddress(user.address ?? "");
        setCity(user.city ?? "");
        setState(user.state ?? "");
        setCountry(user.country ?? "");
        setOccupation(user.occupation ?? "");
      }
    };

    fetchUser();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedUser: Partial<User> = {
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
    await handleUserCrud.update(id ?? "", updatedUser);
    alert("User updated successfully");
    window.location.href = "/";
  };

  return (
    <>
      <AppNavbar />
      <Container className="mt-4">
        <h1 className="mb-4">Update User</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUserId">
            <Form.Label>User ID</Form.Label>
            <Form.Control type="text" value={id} readOnly />
          </Form.Group>

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
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
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
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
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
              />
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default UpdateUser;
