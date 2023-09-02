import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { notAuthPost } from "../js/not_auth";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";

export default function Capitolo(props) {
  const [sottoparagrafi, setSottoparagrafi] = useState([]);
  const [selectedSubParagraph, setSelectedSubParagraph] = useState(null);

  const defaultClass = "mb-2 rounded border-rossoSangue";
  const active = defaultClass + " bg-nero clickable hover-bg-borgogna";
  const notActive = defaultClass + " bg-borgogna";

  useEffect(() => {
    generateSottoparagrafi();
  }, [props.capitolo.paragrafi[props.paragrafo]]);

  return (
    <>
      {props.paragrafo != null &&
      props.capitolo.paragrafi[props.paragrafo] != null ? (
        <Container>
          <Row className="h3">
            {props.capitolo.titolo} /{" "}
            {props.capitolo.paragrafi[props.paragrafo].titolo}
          </Row>
          <Row
            dangerouslySetInnerHTML={{
              __html: props.capitolo.paragrafi[props.paragrafo].testo,
            }}
          />

          {sottoparagrafi != null
            ? sottoparagrafi.map((item, index) => {
                return (
                  <Row
                    key={index}
                    className={
                      selectedSubParagraph != index ? active : notActive
                    }
                  >
                    <Col
                      xs={12}
                      className="h5 py-2 my-0 clickable"
                      onClick={() => {
                        selectedSubParagraph==index ? setSelectedSubParagraph(null) : setSelectedSubParagraph(index);
                      }}
                    >
                      {selectedSubParagraph != index ? (
                        <ChevronDown />
                      ) : (
                        <ChevronUp />
                      )}
                      {" " + item.titolo}
                    </Col>
                    <Col
                      xs={12}
                      hidden={selectedSubParagraph != index}
                      dangerouslySetInnerHTML={{
                        __html: item.testo,
                      }}
                    />
                  </Row>
                );
              })
            : null}
        </Container>
      ) : null}
    </>
  );

  async function generateSottoparagrafi() {
    if (props.capitolo.paragrafi[props.paragrafo] != undefined)
      setSottoparagrafi(
        JSON.parse(
          await notAuthPost("trattato/getParagraphs", {
            idTrattato: props.capitolo.paragrafi[props.paragrafo].id,
          })
        )
      );
  }
}
