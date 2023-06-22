import React, { useContext, useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import GigHive from "../../img/GigHive.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { Context } from "../store/appContext";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "/src/firebase.js";
import "../../styles/signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <>
      <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-0 border-primary"></div>
              <Card className="shadow">
                <Card.Body className="card-body-signpage">
                  <div className="mt-3">
                    <h2 className="fw-bold mb-2 text-uppercase text-center">
                      <img src={GigHive} alt="" height={55} />
                    </h2>

                    <span className=" signup-white-text text-center">
                      <strong>Please Enter your Info</strong>
                    </span>
                    <div className="mb-3 justify-content-center">
                      <Form>
                        <Form.Group
                          className="mb-3 formsi"
                          controlId="formBasicEmail"
                        >
                          <Form.Label className="text-center login-gold-text">
                            Name
                          </Form.Label>
                          <Form.Control
                            className="forms"
                            type="text"
                            placeholder="Your Last Name"
                            id="lastName"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 formsi "
                          controlId="formBasicEmail"
                        >
                          <Form.Label className="text-center login-gold-text">
                            Username
                          </Form.Label>
                          <Form.Control
                            className="forms"
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <Form.Group
                          className="mb-3 formsi"
                          controlId="formBasicEmail"
                        >
                          <Form.Label className="text-center login-gold-text">
                            Email
                          </Form.Label>
                          <Form.Control
                            className="forms"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </Form.Group>

                        <Form.Group
                          className="mb-3 formsi"
                          controlId="formBasicPassword"
                        >
                          <Form.Label className="login-gold-text">
                            Password
                          </Form.Label>
                          <Form.Control
                            className="forms"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                          />
                        </Form.Group>
                        <div className="signup-white-text justify-content-center align-items-center">
                          <Button
                            className="gold-btn signs"
                            type="submit"
                            onClick={registerWithEmailAndPassword}
                          >
                            Sign Up
                          </Button>
                        </div>
                        <div className="signup-white-text justify-content-center align-items-center">
                          <Button
                            className="gold-btn signs"
                            type="submit"
                            onClick={signInWithGoogle}
                          >
                            Sign Up with Google
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center  login-white-text">
                          Already have an account?{" "}
                          <Link to="/login" className=" login-gold-text">
                            <a className="login-link">Login</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
