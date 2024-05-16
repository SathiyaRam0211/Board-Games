import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TicTacToe from "./components/ticTacToe/TicTacToe";
import PlayGame from "./components/ticTacToe/PlayGame";
import TicTacToeContextProvider from "./context/TicTacToeContext";

const AppRoutes = () => {
  return (
    <TicTacToeContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Dashboard}></Route>
          <Route path="/tictactoe" exact Component={TicTacToe}></Route>
          <Route path="/tictactoe/play" exact Component={PlayGame}></Route>
        </Routes>
      </BrowserRouter>
    </TicTacToeContextProvider>
  );
};

export default AppRoutes;
