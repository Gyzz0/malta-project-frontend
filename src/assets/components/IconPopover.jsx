import { OverlayTrigger, Popover } from "react-bootstrap";

export default function IconPopover(props) {
  const popover = (
    <Popover>
      {
        props.titolo
          ? <Popover.Header className="bg-nero">{props.titolo}</Popover.Header>
          : null
      }
      <Popover.Body className="bg-grigioScuro text-biancoSporco rounded-bottom">
        {props.testo}
      </Popover.Body>
    </Popover>
  );

  return (
    <OverlayTrigger trigger={"click"} placement={props.placement} overlay={popover} rootClose>
      <span className="clickable hover-text-oroVecchio ms-1">{props.icon}</span>
    </OverlayTrigger>
  );  
}
