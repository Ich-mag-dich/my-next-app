import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-center mt-32">hello world!</h1>
      <div className="text-center">
        <div className="font-mono">
          <Link href="/todo">📝 Click Me!</Link>
        </div>
        <div>
          <Link href="/weather">🌤️ Weather!</Link>
        </div>
        <div>
          <Link href="/calendar">🗓️ Calendar!</Link>
        </div>
      </div>
    </main>
  );
}
