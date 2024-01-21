import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import Menus from "./Components/Menus/Menus";
import RightSide from "./Components/Menus/RightSide";
import LeftSize from "./Components/Menus/LeftSize";

export default function Login() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Menus></Menus>
          <Col sm={12} md={6}>
            <LeftSize></LeftSize>
          </Col>
          <Col sm={12} md={6}>
            <RightSide></RightSide>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
