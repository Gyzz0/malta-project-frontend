import HomeXL from "./home/HomeXL";
import LandaXL from "./landa/LandaXL";

export default function Website(props) {
   
  return (
    <>
    {
      props.page!="L" 
        ? <HomeXL />
        : <LandaXL />
    }
    </>
  );
}