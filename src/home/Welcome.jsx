import { Col, Container, Row} from "react-bootstrap";
import UserForms from "../assets/model/UserForms";

export default function Welcome() {

  return (
    <Container fluid>
      <Row>
        <Col xl={{span:6, offset:1}}><img width={920} height={460}/></Col>
        <Col xl={{offset:1, span:3}}><UserForms /></Col>
      </Row>
      <Row className="mt-2">
        <Col xl={{offset:1}}>Messaggio di benvenuto e descrizione della landa</Col>
      </Row>
    </Container>
  );
}
