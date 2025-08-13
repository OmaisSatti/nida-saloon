import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice: number; // New prop for cut price
  image: string;
}

export default function ProductCard({ name, price, originalPrice, image }: ProductCardProps) {
  // Calculate discount percentage
  const discount = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <div
      className="
        rounded-xl overflow-hidden flex flex-col 
        backdrop-blur-md 
        border border-[var(--card-border)] 
        shadow-lg 
        bg-[var(--card-bg)] 
        hover:scale-105 hover:shadow-xl 
        transition-all duration-300
      "
      style={{
        boxShadow: `0 8px 20px var(--shadow-color)`,
      }}
    >
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 50vw, 
                 25vw"
        />

        {/* Discount Badge */}
        {discount > 0 && (
          <span className="absolute top-3 right-3 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-lg shadow-lg">
            {discount}% OFF
          </span>
        )}
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">{name}</h3>
        
        <div className="flex items-center gap-3 mb-4">
          <p className="text-[var(--secondary)] font-medium">{price} PKR</p>
          {originalPrice > price && (
            <span className="text-gray-400 line-through">{originalPrice} PKR</span>
          )}
        </div>

        <button className="mt-auto bg-[var(--primary)] text-[var(--foreground)] hover:bg-[var(--secondary)] px-4 py-2 rounded-lg transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
