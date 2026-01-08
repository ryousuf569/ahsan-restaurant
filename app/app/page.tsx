import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=2944+Trombley+Street+Regina+SK";

  return (
    <>
      {/* Header */}
      <header className="w-full border-b border-app bg-app">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/company logo.webp"
              alt="King Chicken logo"
              width={200}
              height={150}
              priority
            />
          </div>

          <div className="flex items-center gap-8">
            <Link
              href="/menu"
              className="rounded-full bg-accent px-6 py-3 text-white font-medium shadow-md transition hover:opacity-90"
            >
              Menu
            </Link>

            <Link
              href="/order"
              className="rounded-full bg-accent px-6 py-3 text-white font-medium shadow-md transition hover:opacity-90"
            >
              Order Pickup
            </Link>
          </div>
        </nav>
      </header>

      {/* Main */}
      <main className="flex flex-col gap-32 pb-32">
        {/* HERO */}
          <section className="relative overflow-hidden">
            {/* Background image */}
            <Image
              src="/images/landing_shot.png"
              alt="Mediterranean food"
              fill
              priority
              className="object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45" />

            {/* Bottom fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#fdf8f2]" />

            {/* Content */}
            <div className="relative mx-auto max-w-6xl px-6 py-28">
              <div className="mx-auto max-w-2xl text-center">
                <h1 className="text-white">
                  Relaxed dining space serving familiar Mediterranean eats
                </h1>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/order"
                    className="rounded-full bg-accent px-6 py-3 text-white font-medium shadow-md transition hover:opacity-90"
                  >
                    Order Pickup
                  </Link>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white/90 px-6 py-3 font-medium text-black shadow-md transition hover:bg-white"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </section>

        {/* HOW PICKUP WORKS */}
        <section className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10">How Pickup Works</h2>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Order Online",
                text: "Browse our menu and place your pickup order online.",
              },
              {
                title: "Prepared Fresh",
                text: "Every order is cooked fresh once it’s placed.",
              },
              {
                title: "Pick Up & Enjoy",
                text: "Stop by, grab your order, and enjoy — no waiting.",
              },
            ].map((step, i) => (
              <div key={step.title} className="surface p-8">
                <span className="text-lg uppercase tracking-wide text-accent font-medium">
                  Step {i + 1}
                </span>

                <h3 className="mt-2 text-lg uppercase font-bold tracking-tight">
                  {step.title}
                </h3>

                <p className="mt-4 text-muted text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* POPULAR ITEMS */}
        <section className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex items-end justify-between">
            <h2>Popular Items</h2>
            <Link href="/order" className="text-accent underline">
              View full menu
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                name: "Fried Chicken Combo",
                description: "Golden crispy chicken with seasoned fries",
              },
              {
                name: "Spicy Chicken Sandwich",
                description: "Crispy chicken with bold heat and house sauce",
              },
              {
                name: "Chicken Tenders",
                description: "Juicy tenders, perfect for sharing",
              },
            ].map((item) => (
              <div key={item.name} className="surface p-8">
                <h3>{item.name}</h3>
                <p className="mt-3 text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LOCATION & HOURS */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            
            {/* LEFT: TEXT */}
            <div>
              <h2 className="mb-6">Location & Hours</h2>

              <p className="text-muted">
                2944 Trombley Street, Regina, SK
              </p>

              <div className="mt-4 text-muted">
                <p>Mon–Fri: 11:00 AM – 9:00 PM</p>
                <p>Sat–Sun: 12:00 PM – 10:00 PM</p>
                <p className="mt-3 font-medium text-app">
                  Pickup only
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block font-medium underline underline-offset-4 hover:opacity-80 transition"
              >
                Get directions on Google Maps
              </a>
            </div>

            {/* RIGHT: MAP */}
            <div className="w-full h-[320px] md:h-[380px] rounded-2xl overflow-hidden shadow-md">
              <iframe
                title="Restaurant location map"
                src="https://www.google.com/maps?q=2944+Trombley+Street+Regina+SK&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
        </section>

        {/* SOCIAL PROOF */}
        <section className="mx-auto max-w-6xl px-6">
          <h2 className="mb-10">What Customers Are Saying</h2>

          <div className="grid gap-10 md:grid-cols-2">
            <blockquote className="surface p-8">
              <p className="italic">
                “Best fried chicken in the city. Always hot and fresh.”
              </p>
              <span className="mt-3 block text-sm text-muted">
                — Google Review
              </span>
            </blockquote>

            <blockquote className="surface p-8">
              <p className="italic">
                “Quick pickup, friendly staff, and amazing flavor.”
              </p>
              <span className="mt-3 block text-sm text-muted">
                — Yelp Review
              </span>
            </blockquote>
          </div>

          <div className="mt-8 flex gap-6">
            <a
              href="https://www.google.com/search?q=king+chicken+restaurant"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View on Google
            </a>

            <a
              href="https://www.yelp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              View on Yelp
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
