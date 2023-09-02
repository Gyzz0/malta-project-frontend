import { Col } from "react-bootstrap";

export default function NavbarHomeMD(props) {
  const sezioni = [
    "Manuale",
    "Regolamento",
    "Logo",
    "Disclaimer",
    "Ringraziamenti",
  ];

  const defaultClass = "clickable text-center h5 d-inline-block py-2 rounded";
  const active = defaultClass + " text-rossoSangue bg-biancoSporco border-rossoSangue";
  const notActive = defaultClass + " hover-bg-borgogna";

  return (
    <>
      {sezioni.map((item, index) => {
        return item != "Logo" ? (
          <Col
            key={index}
            md={index != 0 ? { span: 2 } : { span: 2, offset: 1 }}
            xl={index != 3 ? { offset: 1, span: 1 } : { span: 1 }}
            className={props.selected == index ? active : notActive}
            onClick={() => props.change(index)}
          >
            {item}
          </Col>
        ) : (
          <Col 
            key={index}
            md={2} 
            xl={4} 
            className={defaultClass} 
            onClick={() => props.change(2)}
          >
            <img width={420} height={50} />
          </Col>
        );
      })}
    </>
  );
}
