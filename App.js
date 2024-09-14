import React, { createContext, useState } from "react";
import ContadorCliques from "./ContadorCliques";

export const cliqueContext = createContext([0, () => {}]);

function App() {
  const [cliques, setCliques] = useState(10);
  return (
    <cliqueContext.Provider value={[cliques, setCliques]}>
      <div>
        <ContadorCliques />
      </div>
    </cliqueContext.Provider>
  );
}

export default App;
