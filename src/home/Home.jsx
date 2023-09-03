import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import NavbarHome from "../assets/model/NavbarHome";
import Manuale from "../assets/model/Manuale";
import Welcome from "./Welcome";

export default function Home() {
  const [schermata, setSchermata] = useState(2);

  return (
    <Container fluid>
      <Row className="d-inline">
        <NavbarHome selected={schermata} change={setSchermata}/>
      </Row>
      <Row className="mt-2">
        {
          schermata == 0
            ? <Manuale />
            : schermata == 1
              ? null //Regolamento
              : schermata == 3 
                ? null //Discalimer
                : schermata == 4
                  ?  null //Ringraziamenti
                  : <Welcome />
        }
      </Row>
    </Container>
  );
}
