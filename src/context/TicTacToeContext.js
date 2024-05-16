import React, { createContext, useState } from "react";

export const TicTacToeContext = createContext();
TicTacToeContext.displayName = "TicTacToeContext";

const TicTacToeContextProvider = ({ children }) => {
  const [playerList, setPlayerList] = useState([]);

  return (
    <TicTacToeContext.Provider value={{ playerList, setPlayerList }}>
      {children}
    </TicTacToeContext.Provider>
  );
};

export default TicTacToeContextProvider;
