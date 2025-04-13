import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="text-center p-8">
      <h1 className="text-2xl font-bold mb-6">Unit converter</h1>
        <div className="space-y-0.5 flex flex-col items-center">
          {/* <Link href="/length">Convert Length</Link>
          <Link href="/weight">Convert Weight</Link>
          <Link href="/temperature">Convert Temperature</Link>*/}

          <Link href="/length" className="border border-blue-500 px-6 py-3 rounded-md text-blue-600 hover:bg-blue-100 transition-colors duration-200 w-60 text-center">
            Convert Length
          </Link>
          <Link href="/weight" className="border border-blue-500 px-6 py-3 rounded-md text-blue-600 hover:bg-blue-100 transition-colors duration-200 w-60 text-center">
            Convert Weight
          </Link>
          <Link href="/temperature" className="border border-blue-500 px-6 py-3 rounded-md text-blue-600 hover:bg-blue-100 transition-colors duration-200 w-60 text-center">
            Convert Temperature
          </Link>
         
        </div>
    </main>
  );
}

