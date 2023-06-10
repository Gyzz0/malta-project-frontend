import { useEffect, useState } from "react";
import { CheckCircleFill, Circle, ExclamationCircleFill } from "react-bootstrap-icons";
import IconTooltip from "./IconTooltip";

export default function IsValideAttribute(props) {
  const [icona, setIcona] = useState(<Circle />);
  const [testo, setTesto] = useState(props.testi[0]);

  
  useEffect(async () => {
    let isValid = props.isValidUsername;

    if (props.isValidUsername == true) {
      setIcona(<CheckCircleFill className="text-verdeMuschio"/>);
      setTesto(props.testi[1]);
    } else if (isValid == false) {
      setIcona(<ExclamationCircleFill className="text-rossoSangue"/>);
      setTesto(props.testi[2]);
    } else {
      setIcona(<Circle />);
      setTesto(props.testi[0]);
    }
  }, [props.isValidUsername]);
  

  return (
    <>
      <IconTooltip icon={icona} placement="left" testo={testo} />
    </>
  );
}
