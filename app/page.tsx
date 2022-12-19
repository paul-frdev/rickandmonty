import { Typography } from "@components/Typography/Typography";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <section>
      <Typography variant="title-1" tag="h1">
        The Rick and Morty
      </Typography>
    </section>
  );
}
