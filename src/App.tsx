import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import { LayourtRooter } from "./components/Layourt";
import { EditeProdutos } from "./pages/edite-produto";
import { AddProduto } from "./pages/addProduto";
import { ErrorPage } from "./pages/error-page";
import { PrivateRouter } from "./components/private-router";
import { useContext, useState } from "react";
import { ContextUser } from "./context/context-user";

export function App() {
  const contextUser = useContext(ContextUser);
  if (!contextUser) {
    throw new Error(
      "Lista de PRODUTOS deve ser usada dentro de um MyContextProvider"
    );
  }
  const { users } = contextUser;
  const find = users.find((a) => a.isLogado === true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<LayourtRooter />}>
          <Route
            path="/"
            element={
              <PrivateRouter isAuthenticated={isAuthenticated}>
                <Produtos />
              </PrivateRouter>
            }
          />
          <Route path="/edite-produto/:id" element={<EditeProdutos />} />
        </Route>
        <Route path="/add-produto" element={<AddProduto />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
