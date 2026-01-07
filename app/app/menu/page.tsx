type MenuItem = {
  id: number;
  name: string;
  description?: string;
  price: number;
};

export default async function MenuPage() {
  const res = await fetch("http://localhost:3000/api/menu", {
    cache: "no-store",
  });

  const menu: MenuItem[] = await res.json();

  return (
    <main className="min-h-screen px-6 py-12">
      <h1 className="mb-10 text-center font-bold">
        Our Menu
      </h1>

      <div className="container max-w-3xl space-y-6">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex items-start justify-between rounded-lg border border-gray-200 dark:border-gray-700 p-4"
          >
            <div className="pr-4">
              <h2 className="text-lg font-semibold">
                {item.name}
              </h2>

              {item.description && (
                <p className="mt-1 text-lg text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              )}
            </div>

            <span className="shrink-0 text-2xl font-semibold">
              ${item.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
