import { useState } from "react";
import { Col } from "react-bootstrap";
import GenericModal from "../../../assets/components/GenericModal";
import Manuale from "../../../assets/components/Manuale";

export default function NavbarLandaOffMD(props) {
  const [modalIndex, setModalIndex]=useState(null);

  const sezioni = [
    "Guida",
    "Manuale",
    "Logo",
    "Regolamento",
    "Presenti"
  ];

  const componenti = [
    null,
    <Manuale />,
    null,
    null,
    null,
  ]

  const defaultClass = "text-center h5 d-inline-block py-2 rounded";

  return (
    <>
      {sezioni.map((item, index) => {
        return item != "Logo" ? (
          <Col
            key={index}
            md={{ span: 2 }}
            xl={{ span: 2 }}
            className={defaultClass+" clickable hover-bg-borgogna"}
            onClick={() => setModalIndex(index)}
          >
            {item}
          </Col>
        ) : (
          <Col 
            key={index}
            md={2} 
            xl={4} 
            className={defaultClass}
          >
            <img width={350} height={50} />
          </Col>
        );
      })}

      {
        modalIndex!=null //GUIDA
          ?<GenericModal handleClose={()=>setModalIndex(null)} titolo={sezioni[modalIndex]} componente={componenti[modalIndex]}/>
          :null
      }
    </>
  );
}
