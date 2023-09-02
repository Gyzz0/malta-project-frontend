import { useEffect, useState } from 'react';
import Mobile from './size/mobile/Mobile';
import Tablet from './size/tablet/Tablet';
import Website from './size/website/Website';

export default function App() {
  const [page, setPage] = useState("H");

  useEffect(() => {
    if(localStorage.getItem("token")!=null){
      setPage("L");
    }
  });

  return (
    <>
    {
      window.innerWidth <  768 
        ? <Mobile page={page} /> 
        : window.innerWidth >=  768 && window.innerWidth <  1200 
          ? <Tablet page={page} /> 
          : <Website page={page} />
    }
    </>
  );
}
