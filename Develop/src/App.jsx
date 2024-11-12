import HeaderAndNav from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <HeaderAndNav />
      <Outlet />
      <Footer />
    </>
  );
}
