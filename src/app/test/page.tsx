import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="text-center">
        <div className="font-mono">
          <p>Test Page </p>
        </div>
      </div>
    </main>
  );
}
