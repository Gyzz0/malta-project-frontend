import { OverlayTrigger, Tooltip } from "react-bootstrap";

export default function IconTooltip(props) {

  return (
    <>
      <OverlayTrigger
        placement={props.placement}
        overlay={<Tooltip>{props.testo}</Tooltip>}
      >
        {props.icon}
      </OverlayTrigger>
    </>
  );
}
