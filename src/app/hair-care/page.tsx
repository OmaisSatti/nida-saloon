import ProductCard from "@/components/ProductCard";

export default function HairCare() {
  
  const products = [
    {
      id: 1,
      name: "Argan Oil Shampoo",
      price: 15.99,
      image: "/images/haircare/hc1.avif",
    },
    {
      id: 2,
      name: "Keratin Conditioner",
      price: 18.49,
      image: "/images/haircare/hc2.avif",
    },
    {
      id: 3,
      name: "Hair Growth Serum",
      price: 25.0,
      image: "/images/haircare/hc3.avif",
    },
    {
      id: 4,
      name: "Coconut Hair Mask",
      price: 20.0,
      image: "/images/haircare/hc4.avif",
    },
    {
      id: 5,
      name: "Anti-Frizz Spray",
      price: 12.99,
      image: "/images/haircare/hc5.avif",
    },
    {
      id: 6,
      name: "Volumizing Mousse",
      price: 14.5,
      image: "/images/haircare/hc6.avif",
    },
    {
      id: 7,
      name: "Heat Protectant",
      price: 16.75,
      image: "/images/haircare/hc7.avif",
    },
    {
      id: 8,
      name: "Deep Repair Treatment",
      price: 22.99,
      image: "/images/haircare/hc8.avif",
    },
    {
      id: 9,
      name: "Color Protect Shampoo",
      price: 15.5,
      image: "/images/haircare/hc9.avif",
    },
    {
      id: 10,
      name: "Herbal Hair Oil",
      price: 10.0,
      image: "/images/haircare/hc10.avif",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">Hair Care</h1>
      <p className="text-muted-foreground mb-8">
        Explore our premium hair care products to keep your hair healthy, shiny,
        and full of life.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}
