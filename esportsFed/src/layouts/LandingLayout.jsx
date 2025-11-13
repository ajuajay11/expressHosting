import { Outlet } from "react-router-dom";
import Header from "../components/nav/Header";
import Footer from "../components/nav/Footer";
export default function LandingLayout() {
  return (
    <>
      <Header />
        <main>
            <Outlet />
        </main>
      <Footer />
    </>
  );
}
