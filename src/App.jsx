import { useEffect, useState } from "react";
import Switch from "./size/Switch";

export default function App() {
  const [page, setPage] = useState("H");

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      setPage("L");
    }
  });

  return <Switch page={page} />;
}
