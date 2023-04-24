import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-center ">hello world!</h1>
      <div className="text-center"></div>
    </main>
  );
}
