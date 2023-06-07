import './assets/css/colors.css'
import Mobile from './size/mobile/Mobile';
import Tablet from './size/tablet/Tablet';
import Website from './size/website/Website';

export default function App() {
  return (
    <>
    {
      window.innerWidth <  768 
        ? <Mobile /> 
        : window.innerWidth >=  768 && window.innerWidth <  1200 
          ? <Tablet /> 
          : <Website />
    }      
    </>
  );
}
