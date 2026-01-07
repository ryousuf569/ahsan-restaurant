import Link from "next/link";

export default function Home() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=2944+Trombley+Street+Regina+SK";

  return (
    <>
      {/* Header */}
      <header className="w-full border-b border-gray-200 dark:border-gray-700">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold">
            King Chicken 🐔
          </span>

          <div className="flex items-center gap-6">
            <Link
              href="/menu"
              className="flex h-10 items-center font-medium transition hover:underline"
            >
              Menu
            </Link>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
             className="flex h-10 items-center font-medium transition hover:underline"
              >
                Visit
              </a>
          </div>
      </nav>
    </header>

      {/* Main Content */}
      <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-start px-6 pt-8 text-center">
        <h1 className="font-bold">
          Welcome to King Chicken Restaurant 🐔
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          If you see this, we’re in development at the moment
        </p>
      </main>
    </>
  );
}
