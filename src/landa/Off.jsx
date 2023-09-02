import { Container, Row, Col} from "react-bootstrap";
import NavbarLandaOff from "../assets/components/NavbarLandaOff";

export default function Off() {

  return (
    <Container fluid>
      <Row>
        
      </Row>
      <Row>
        <Col xl={2}>S</Col>
        <Col xl={8}>
          <Row className="d-inline">
            <NavbarLandaOff />
          </Row>
          <Row>

          </Row>
        </Col>
        <Col xl={2}>D</Col>
      </Row>
    </Container>
  );
}
