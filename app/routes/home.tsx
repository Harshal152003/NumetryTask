import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import NavigationBar from "~/component/NavigationBar";
import Footer from "../component/Footer";
import { Outlet } from "react-router";


export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <NavigationBar />
      <div className="flex-grow">
        <Outlet /> {/* This renders the page content dynamically */}
      </div>
      <Footer />
    </div>
      
    </>
  );
}
