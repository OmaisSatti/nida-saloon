
import ProductCard from "@/components/ProductCard";

interface Product {
  name: string;
  price: string;
  image: string;
}

export default function Home() {

  const products: Product[] = [
    {
      name: "Luxury Hair Oil",
      price: "$25",
      image: "/images/1.avif",
    },
    {
      name: "Organic Face Cream",
      price: "$40",
      image: "/images/2.avif",
    },
    {
      name: "Rose Gold Lipstick",
      price: "$15",
      image: "/images/3.avif",
    },
    {
      name: "Spa Gift Set",
      price: "$60",
      image: "/images/4.avif",
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
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} {...p} />
          ))}
        </div>
      </section>
    </main>
  );
}
