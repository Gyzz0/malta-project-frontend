import { Container, Row } from "react-bootstrap";
import NavbarHomeMD from "../../tablet/home/NavbarHomeMD";
import { useState } from "react";
import WelcomeXL from "./WelcomeXL";
import Manuale from "../../../assets/components/Manuale";

export default function HomeXL() {
  const [schermata, setSchermata] = useState(2);

  return (
    <Container fluid>
      <Row className="d-inline">
        <NavbarHomeMD selected={schermata} change={setSchermata}/>
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
                  : <WelcomeXL />
        }
      </Row>
    </Container>
  );
}
