import ProductCard from "@/components/ProductCard";

export default function HairCare() {
  
  const products = [
    {
      id: 1,
      name: "Argan Oil Shampoo",
      price: 1599,
      originalPrice: 1999,
      image: "/images/haircare/hc1.avif",
    },
    {
      id: 2,
      name: "Keratin Conditioner",
      price: 1849,
      image: "/images/haircare/hc2.avif",
    },
    {
      id: 3,
      name: "Hair Growth Serum",
      price: 2500,
      originalPrice: 3000,
      image: "/images/haircare/hc3.avif",
    },
    {
      id: 4,
      name: "Coconut Hair Mask",
      price: 2000,
      image: "/images/haircare/hc4.avif",
    },
    {
      id: 5,
      name: "Anti-Frizz Spray",
      price: 1299,
      originalPrice: 1599,
      image: "/images/haircare/hc5.avif",
    },
    {
      id: 6,
      name: "Volumizing Mousse",
      price: 1455,
      image: "/images/haircare/hc6.avif",
    },
    {
      id: 7,
      name: "Heat Protectant",
      price: 1675,
      originalPrice: 1899,
      image: "/images/haircare/hc7.avif",
    },
    {
      id: 8,
      name: "Deep Repair Treatment",
      price: 2299,
      image: "/images/haircare/hc8.avif",
    },
    {
      id: 9,
      name: "Color Protect Shampoo",
      price: 1555,
      image: "/images/haircare/hc9.avif",
    },
    {
      id: 10,
      name: "Herbal Hair Oil",
      price: 1199,
      originalPrice: 1499,
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
        {products.map(({ id, name, price, originalPrice, image }) => (
          <ProductCard
            key={id}
            name={name}
            price={price}
            originalPrice={originalPrice ?? price}
            image={image}
          />
        ))}
      </div>
    </div>
  );
}
