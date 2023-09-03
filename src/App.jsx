import { useEffect, useState } from "react";
import Home from "./home/Home";
import Landa from "./landa/Landa";

export default function App() {
  const [page, setPage] = useState("H");

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setPage("L");
    }
  });

  return <>{page != "L" ? <Home /> : <Landa />}</>;
}
