import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

export default function UserForms() {
  const [schermata, setSchermata] = useState(0);

  const defaultClass = "clickable text-center h5 py-2 rounded";
  const active = defaultClass + " bg-rossoSangue";
  const notActive = defaultClass + " hover-bg-borgogna";

  return (
    <Container fluid>
      <Row>
        <Col
          xl={{span:4, offset:1}}
          className={schermata == 0 ? active : notActive}
          onClick={() => {
            setSchermata(0);
          }}
        >
          Gioca
        </Col>
        <Col
          xl={{span:4, offset:2}}
          className={schermata == 1 ? active : notActive}
          onClick={() => {
            setSchermata(1);
          }}
        >
          Registrati
        </Col>
      </Row>
      <Row>{schermata == 1 ? <Signup /> : <Login />}</Row>
    </Container>
  );
}
