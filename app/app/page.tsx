import Link from "next/link";

export default function Home() {
return (
  <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 text-center">
    <h1 className="text-4xl font-bold text-black">
      Welcome to King Chicken Restaurant 🐔
    </h1>

    <p className="mt-4 text-lg text-zinc-600">
      Iqbal broke bunior's mouse so this site is poop
    </p>

    {/* Button container */}
    <div className="mt-8 flex gap-4">
      <Link
        href="/menu"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800"
      >
        Go to Menu
      </Link>

      <Link
        href="/order"
        className="rounded-lg bg-black px-6 py-3 text-white hover:bg-zinc-800"
      >
        Order
      </Link>
    </div>
  </main>
  );  
}
