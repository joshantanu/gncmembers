import React from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { signInWithGoogle } from "../firebase/firebase.utils";

function Header() {
  return (
    <header className="App-header">
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            Ganesh Nabhangan
          </Col>
          <Col md="auto">Variable width content</Col>
          <Col xs lg="2">
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link href="/home">Login</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
      </Container>

      <Button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE </Button>
    </header>
  );
}
export default Header;