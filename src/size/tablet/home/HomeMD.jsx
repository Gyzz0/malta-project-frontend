import { Container, Row } from "react-bootstrap";
import NavbarHomeMD from "./NavbarHomeMD";
import { useState } from "react";

export default function HomeMD() {
  const [schermata, setSchermata] = useState(2);

  return (
    <Container fluid>
      <Row className="my-1">
        <NavbarHomeMD selected={schermata} change={setSchermata} />
      </Row>
      <Row>
        <h1>{schermata}</h1>
      </Row>
    </Container>
  );
}
