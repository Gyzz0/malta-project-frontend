import { OverlayTrigger, Popover } from "react-bootstrap";
import * as icons from "react-bootstrap-icons";

const Icon = ({ iconName, ...props }) => {
  const BootstrapIcon = icons[iconName];
  return <BootstrapIcon {...props} />;
};

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
    <OverlayTrigger trigger="click" placement={props.placement} overlay={popover} rootClose>
      {props.icon}
    </OverlayTrigger>
  );  
}
