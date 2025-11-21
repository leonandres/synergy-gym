import Image from "next/image";

export default function Home() {
  return (
    <main className = "flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Welcome to My Next.js App</h1>
      <Image
        src="/images/sample.jpg"
        alt="Sample Image"
        width={600}
        height={400}
      />
    </main>
  );
}
