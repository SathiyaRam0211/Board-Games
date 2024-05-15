import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import TicTacToe from "./components/ticTacToe/TicTacToe";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Dashboard}></Route>
        <Route path="/tictactoe" exact Component={TicTacToe}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
