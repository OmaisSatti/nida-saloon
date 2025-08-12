import ProductCard from "@/components/ProductCard";

export default function SkinCare() {
    
    const products = [
        {
            id: 1,
            name: "Hydrating Face Cream",
            price: 22.99,
            image: "/images/skincare/sc1.avif",
        },
        {
            id: 2,
            name: "Vitamin C Serum",
            price: 30.0,
            image: "/images/skincare/sc2.avif",
        },
        {
            id: 3,
            name: "Aloe Vera Gel",
            price: 12.5,
            image: "/images/skincare/sc3.avif",
        },
        {
            id: 4,
            name: "Anti-Aging Night Cream",
            price: 28.99,
            image: "/images/skincare/sc4.avif",
        },
        {
            id: 5,
            name: "Sunscreen SPF 50",
            price: 18.0,
            image: "/images/skincare/sc5.avif",
        },
        {
            id: 6,
            name: "Rose Water Toner",
            price: 14.75,
            image: "/images/skincare/sc6.avif",
        },
        {
            id: 7,
            name: "Charcoal Face Mask",
            price: 16.5,
            image: "/images/skincare/sc7.avif",
        },
        {
            id: 8,
            name: "Exfoliating Scrub",
            price: 13.99,
            image: "/images/skincare/sc8.avif",
        },
        {
            id: 9,
            name: "Brightening Lotion",
            price: 19.0,
            image: "/images/skincare/sc9.avif",
        },
        {
            id: 10,
            name: "Hyaluronic Acid Serum",
            price: 25.5,
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
