import "./App.css";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Body from "./Body";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Simulate a data fetching operation
    const delayVariable = Math.floor((Math.random()*2000)+1200);
    setTimeout(() => {
      setIsLoading(false);
    }, delayVariable );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
  <>
  {isLoading ? <Preloader /> : <Body />}
  </>)
  ;
}

export default App;
