import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-bold underline text-red-700">
        The Rick and Morty
      </h1>
    </section>
  );
}
