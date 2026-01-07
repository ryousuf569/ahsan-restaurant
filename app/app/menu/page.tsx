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
    <main className="min-h-screen bg-white px-6 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-black">
        Our Menu
      </h1>

      <div className="mx-auto max-w-3xl space-y-6">
        {menu.map((item) => (
          <div
            key={item.id}
            className="flex justify-between rounded-lg border border-gray-200 p-4"
          >
            <div>
              <h2 className="text-lg font-semibold text-black">
                {item.name}
              </h2>
              {item.description && (
                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              )}
            </div>

            <span className="font-medium text-black">
              ${item.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
