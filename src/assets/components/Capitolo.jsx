import { Container, Row } from "react-bootstrap";

export default function Capitolo(props) {
  

  return (
    <>
      <Container>
        <Row className="h3">
          {props.capitolo.titolo}
        </Row>
      </Container>
    </>
  );
}
