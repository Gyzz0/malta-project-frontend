import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { notAuthPost } from "../js/not_auth";
import Capitolo from "../components/Capitolo";

export default function Manuale(props) {
  const [capitoli, setCapitoli] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(0);
  const [selectedParagraph, setSelectedParagraph] = useState(0);

  const defaultClass = "clickable bg-nero text-biancoSporco";
  const active = defaultClass + " bg-borgogna";
  const notActive = defaultClass + " hover-bg-borgogna";

  useEffect(() => {
    generateCapitoli();
  }, []);  
  
  useEffect(() => {
    setSelectedParagraph(0);
  }, [selectedChapter]);

  return (
    <Container fluid>
      <Row>
        <Col xl={2}>
          <ListGroup>
            {capitoli.map((item, index) => {
              return (
                <ListGroupItem
                  key={item.titolo}
                  onClick={() => {
                    setSelectedChapter(index);
                  }}
                  className={selectedChapter != index ? notActive : defaultClass}
                >
                  {item.titolo}
                  <ListGroup hidden={selectedChapter != index} className="mt-1">
                    {item.paragrafi.map((parag, pindex) => {
                      return (
                        <ListGroupItem
                          key={parag.titolo}
                          className={
                            selectedParagraph != pindex ? notActive : active
                          }
                          onClick={() => {
                            setSelectedParagraph(pindex);
                          }}
                        >
                          {parag.titolo}
                        </ListGroupItem>
                      );
                    })}
                  </ListGroup>
                </ListGroupItem>
              );
            })}
          </ListGroup>
        </Col>
        <Col>
          {capitoli[selectedChapter] != null ? (
            <Capitolo capitolo={capitoli[selectedChapter]} paragrafo={selectedParagraph}/>
          ) : null}
        </Col>
      </Row>
    </Container>
  );

  async function generateCapitoli() {
    const c = JSON.parse(
      await notAuthPost("trattato/getChapters", { tipo: "MANUALE" })
    );
    let paragraphs = [];

    for (let i = 0; i < c.length; i++) {
      paragraphs.push(
        JSON.parse(
          await notAuthPost("trattato/getParagraphs", { idTrattato: c[i].id })
        )
      );
    }

    let chapters = c.map((item, index) => {
      return {
        titolo: item.titolo,
        testo: item.testo,
        paragrafi: paragraphs[index],
      };
    });
    setCapitoli(chapters);
  }
}
