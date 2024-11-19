import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Produtos } from "./pages/Produtos";
import { LayourtRooter } from "./components/Layourt";
import { EditeProdutos } from "./pages/edite-produto";
import { AddProduto } from "./pages/addProduto";
import { ErrorPage } from "./pages/error-page";
import { PrivateRouter } from "./components/private-router";
import { useState } from "react";
import { DashBord } from "./pages/dash-bord";

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Login
              setIsAuthenticated={setIsAuthenticated}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route element={<LayourtRooter />}>
          <Route
            path="/"
            element={
              <PrivateRouter isAuthenticated={isAuthenticated}>
                <Produtos />
              </PrivateRouter>
            }
          />
          <Route
            path="/edite-produto/:id"
            element={
              <PrivateRouter isAuthenticated={isAuthenticated}>
                <EditeProdutos />
              </PrivateRouter>
            }
          />
          <Route path="/dash-bord" element={<DashBord />} />
        </Route>

        <Route
          path="/add-produto"
          element={
            <PrivateRouter isAuthenticated={isAuthenticated}>
              <AddProduto />
            </PrivateRouter>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRouter isAuthenticated={isAuthenticated}>
              <ErrorPage />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
