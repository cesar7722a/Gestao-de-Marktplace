import { Outlet } from "react-router-dom";
import { Header } from "./Header";

export function LayourtRooter() {
  return (
    <div className="space-y-12">
      <Header />
      <Outlet />
    </div>
  );
}
