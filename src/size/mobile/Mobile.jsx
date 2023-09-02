import HomeXS from "./home/HomeXS";
import LandaXS from "./landa/LandaXS";

export default function Mobile(props) {
  return (
    <>
    {
      props.page!="L" 
        ? <HomeXS />
        : <LandaXS />
    }
    </>
  );
}
