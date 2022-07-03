import React from "react";
import s from "./Header.module.css";
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Row>
      <Col>
        return <div className={s.root}>Todo list</div>
      </Col>
    </Row>
  );
}

export default Header;
