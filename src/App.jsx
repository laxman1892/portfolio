import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Body from "./Body";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetching operation
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
  <>
  {isLoading ? <Preloader /> : <Body />}
  </>)
  ;
}

export default App;
