import HomeMD from "./home/HomeMD";
import LandaMD from "./landa/LandaMD";

export default function Tablet(props) {
  return (
    <>
    {
      props.page!="L" 
        ? <HomeMD />
        : <LandaMD />
    }
    </>
  );
}
