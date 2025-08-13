import ProductCard from "@/components/ProductCard";

interface Product {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
}

export default function Home() {

  const products: Product[] = [
    {
      name: "Luxury Hair Oil",
      price: 2200,
      originalPrice: 2800,
      image: "/images/1.avif",
    },
    {
      name: "Organic Face Cream",
      price: 2300,
      originalPrice: 3000,
      image: "/images/2.avif",
    },
    {
      name: "Rose Gold Lipstick",
      price: 2400,
      originalPrice: 2600,
      image: "/images/3.avif",
    },
    {
      name: "Spa Gift Set",
      price: 2500,
      originalPrice: 3200,
      image: "/images/4.avif",
    },
    {
      name: "Revitalizing Shampoo",
      price: 1500,
      originalPrice: 1800,
      image: "/images/5.avif",
    },
    {
      name: "Nourishing Conditioner",
      price: 1600,
      originalPrice: 1900,
      image: "/images/6.avif",
    },
    {
      name: "Hydrating Serum",
      price: 2800,
      originalPrice: 3500,
      image: "/images/7.avif",
    },
    {
      name: "Matte Lipstick",
      price: 1200,
      originalPrice: 1500,
      image: "/images/8.avif",
    },
  ];

  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero */}
      <section
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="bg-black/40 p-6 rounded-xl max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to Nida Beauty Salon
          </h1>
          <p className="text-lg md:text-xl text-white mb-6">
            Your beauty, our passion — Experience premium salon care
          </p>
          <button className="bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary)] px-6 py-3 rounded-lg font-semibold">
            Book Appointment
          </button>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 px-4 md:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-2 text-foreground">
          Our Best-Selling Favourites
        </h2>
        <p className="text-lg text-center text-foreground max-w-2xl mx-auto mb-12">
          Handpicked just for you — discover the products our customers can’t stop talking about.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} originalPrice={p.originalPrice ?? p.price} />
          ))}
        </div>
      </section>
    </main>
  );
}

