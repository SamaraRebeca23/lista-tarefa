import { useState } from "react";
import "./App.css";
import Listatarefas from "./componentes/Listatarefas"

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Listatarefas />
    </>
  );
}

export default App;
