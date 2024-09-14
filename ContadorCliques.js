import React, { useContext, useEffect } from "react";
import { cliqueContext } from "./App";

const contadorCliques = () => {
  const [cliques, setCliques] = useContext(cliqueContext);
  return (
    <div>
      <button onClick={() => setCliques(cliques + 1)}>Clique aqui</button>
      <label>{cliques} cliques efetuados....</label>
    </div>
  );
};

export default contadorCliques;
