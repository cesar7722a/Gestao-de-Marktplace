import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import { LayourtRooter } from "./components/Layourt";
import { EditeProdutos } from "./pages/edite-produto";
import { AddProduto } from "./pages/addProduto";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<LayourtRooter />}>
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/edite-produto/:id" element={<EditeProdutos />} />
        </Route>
        <Route path="/add-produto" element={<AddProduto />} />
      </Routes>
    </BrowserRouter>
  );
}
