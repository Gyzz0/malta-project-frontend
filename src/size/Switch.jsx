import Home from "../home/Home";
import Landa from "../landa/Landa";

export default function Switch(props) {
   
  return (
    <>
    {
      props.page!="L" 
        ? <Home />
        : <Landa />
    }
    </>
  );
}