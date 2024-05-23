import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HandleUserCrud from "../handlers/handleUserCrud";
import { User } from "../models/user";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import AppNavbar from "../components/Navbar";

const UpdateUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: "",
    occupation: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleUserCrud = new HandleUserCrud();

  useEffect(() => {
    const fetchUser = async () => {
      const user = await handleUserCrud.read(id ?? "");
      if (user) {
        setFormData({
          name: user.name,
          age: user.age.toString(),
          mobile: user.mobile,
          email: user.email ?? "",
          address: user.address ?? "",
          city: user.city ?? "",
          state: user.state ?? "",
          country: user.country ?? "",
          occupation: user.occupation ?? "",
        });
      }
    };

    fetchUser();
  }, [id]);

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    const age = Number(formData.age);
    const mobile = formData.mobile;

    if (formData.name.length < 2)
      newErrors.name = "Name must be at least 2 characters long";
    if (isNaN(age) || age < 1)
      newErrors.age = "Age must be a number greater than 0";
    if (!/^\d{10}$/.test(mobile))
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const updatedUser: Partial<User> = {
      ...formData,
      age: Number(formData.age),
      mobile: formData.mobile,
    };

    await handleUserCrud.update(id ?? "", updatedUser);
    alert("User updated successfully");
    window.location.href = "/";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
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
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </Form.Group>

            <Form.Group as={Col} controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              {errors.age && (
                <small className="text-danger">{errors.age}</small>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formMobile">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              {errors.mobile && (
                <small className="text-danger">{errors.mobile}</small>
              )}
            </Form.Group>

            <Form.Group as={Col} controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <small className="text-danger">{errors.email}</small>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formAddress">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && (
                <small className="text-danger">{errors.address}</small>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
              {errors.city && (
                <small className="text-danger">{errors.city}</small>
              )}
            </Form.Group>

            <Form.Group as={Col} controlId="formState">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
              {errors.state && (
                <small className="text-danger">{errors.state}</small>
              )}
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formCountry">
              <Form.Label>Country</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                name="country"
                value={formData.country}
                onChange={handleChange}
              />
              {errors.country && (
                <small className="text-danger">{errors.country}</small>
              )}
            </Form.Group>

            <Form.Group as={Col} controlId="formOccupation">
              <Form.Label>Occupation</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter occupation"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
              />
              {errors.occupation && (
                <small className="text-danger">{errors.occupation}</small>
              )}
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
