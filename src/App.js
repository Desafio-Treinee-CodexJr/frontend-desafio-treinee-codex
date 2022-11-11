import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageRoutes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <PageRoutes/>
    </BrowserRouter>
  );
}

export default App;
