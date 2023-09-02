import { Modal } from "react-bootstrap";

export default function GenericModal(props) {
  return (
    <Modal
      show={true}
      onHide={props.handleClose}
      backdrop="static"
      keyboard={props.keyboard!=false?true:false}
      fullscreen
    >
      <Modal.Header closeButton closeVariant="white" className="bg-grigioScuro text-biancoSporco">
        <Modal.Title>{props.titolo}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="bg-grigioScuro text-biancoSporco">
        {props.componente}
      </Modal.Body>
    </Modal>
  );
}
