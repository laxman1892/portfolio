import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Body from "./Body";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("DOMContentLoaded", () => {
      setIsLoading(false);
    });
  }, []); // Empty dependency array ensures this runs once on mount

  return <><Body /></>;
}

export default App;
