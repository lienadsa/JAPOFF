import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
/*import Categories from "../components/Categories";*/

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex-col min-h-screen items-center justify-center content-center" style={{ backgroundColor: "#EAE4D5"}}>
      <Navbar />
      <h1 className="text-4xl font-bold text-black dark:text-white font-asgard">JAPOFF</h1>
      <div>
      <Hero />  
      {/* <Categories /> */}
     </div>
    </div>
  );
}
