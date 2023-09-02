import { Container, Row, Col} from "react-bootstrap";
import NavbarLandaOffMD from "../../tablet/landa/NavbarLandaOffMD";

export default function OffXL() {

  return (
    <Container fluid>
      <Row>
        
      </Row>
      <Row>
        <Col xl={2}>S</Col>
        <Col xl={8}>
          <Row className="d-inline">
            <NavbarLandaOffMD />
          </Row>
          <Row>

          </Row>
        </Col>
        <Col xl={2}>D</Col>
      </Row>
    </Container>
  );
}
