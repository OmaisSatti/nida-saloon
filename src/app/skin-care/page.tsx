import ProductCard from "@/components/ProductCard";

export default function SkinCare() {
    
  const products = [
    {
      id: 1,
      name: "Hydrating Face Cream",
      price: 2299,
      originalPrice: 2699,
      image: "/images/skincare/sc1.avif",
    },
    {
      id: 2,
      name: "Vitamin C Serum",
      price: 3000,
      image: "/images/skincare/sc2.avif",
    },
    {
      id: 3,
      name: "Aloe Vera Gel",
      price: 1255,
      originalPrice: 1599,
      image: "/images/skincare/sc3.avif",
    },
    {
      id: 4,
      name: "Anti-Aging Night Cream",
      price: 2899,
      image: "/images/skincare/sc4.avif",
    },
    {
      id: 5,
      name: "Sunscreen SPF 50",
      price: 1890,
      originalPrice: 2199,
      image: "/images/skincare/sc5.avif",
    },
    {
      id: 6,
      name: "Rose Water Toner",
      price: 1475,
      image: "/images/skincare/sc6.avif",
    },
    {
      id: 7,
      name: "Charcoal Face Mask",
      price: 1665,
      originalPrice: 1999,
      image: "/images/skincare/sc7.avif",
    },
    {
      id: 8,
      name: "Exfoliating Scrub",
      price: 1399,
      image: "/images/skincare/sc8.avif",
    },
    {
      id: 9,
      name: "Brightening Lotion",
      price: 1990,
      originalPrice: 2399,
      image: "/images/skincare/sc9.avif",
    },
    {
      id: 10,
      name: "Hyaluronic Acid Serum",
      price: 2555,
      image: "/images/skincare/sc10.avif",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-foreground mb-6">Skin Care</h1>
      <p className="text-muted-foreground mb-8">
        Discover our range of skin care essentials to keep your skin glowing,
        healthy, and rejuvenated.
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
