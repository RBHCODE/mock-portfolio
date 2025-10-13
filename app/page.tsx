
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-black flex items-center justify-center overflow-hidden 
    flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-2xl w-full">
       <Hero />
      </div>
    </main>
  );
}
