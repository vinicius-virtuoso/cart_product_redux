import { Header } from "@/components/Header";
import { Wrapper } from "@/components/cart/Wrapper";

export default function Home() {
  return (
    <main className="w-full h-screen bg-zinc-950 overflow-hidden relative">
      <Header />
      <Wrapper />
    </main>
  );
}
