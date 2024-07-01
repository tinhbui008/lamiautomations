import Carousel from "@/components/Carousel";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <TopBar />
      <Navbar />
      <Carousel />
    </main>
  );
}
