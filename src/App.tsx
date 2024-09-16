import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Produtos } from "./pages/Produtos";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );
}
