import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import OffXL from "./Off";
import { authPost } from "../assets/js/auth";


export default function Landa() {
  const [schermata, setSchermata] = useState("OFF");
  const [idGiocatore, setIdGiocatore] = useState(null);

  useEffect(async() => {
    setIdGiocatore(JSON.parse(await authPost("getIdGiocatoreByToken")))
  
  }, [])
  

  return (
    <Container fluid>
      <Row>
        {
          schermata == "ON"
            ? null //ON
            : <OffXL idGiocatore={idGiocatore}/>
        }
      </Row>
    </Container>
  );
}
