import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-yellow-100 p-8">
      <h1 className="text-4xl font-bold mb-4 text-black">🚀 My First Next.js App</h1>
      <p className="text-lg mb-6 text-black">Hello world! I customized this myself 🎉</p>

      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={120}
        height={40}
        priority
      />
    </main>
  );
}
