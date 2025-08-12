// components/ProductCard.tsx
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <div className="bg-background rounded-xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 25vw"
          priority // optional: for images above the fold
        />
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-[var(--secondary)] mb-4">{price} PKR</p>
        <button className="mt-auto bg-primary text-foreground hover:bg-secondary px-4 py-2 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
