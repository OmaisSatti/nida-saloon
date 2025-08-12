import InfoCard from "@/components/InfoCard";
import Image from "next/image";

export default function About() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero / Banner */}
      <section
        className="relative w-full h-[50vh] flex items-center justify-center bg-cover bg-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1585139391200-b3b89438a497?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <InfoCard
          title=" About Us"
          description="    Discover the story behind our beauty salon"
        />
      </section>

      {/* About Content */}
      <section className="py-12 px-4 md:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-80">
            <Image
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80"
              alt="Salon Interior"
              fill
              className="rounded-lg shadow-lg object-cover"
              priority
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="mb-4">
              At <span className="font-semibold">Nida Beauty Salon</span>, we
              believe beauty is more than skin deep — it’s about confidence,
              self-care, and feeling your absolute best. Since our opening, we
              have dedicated ourselves to creating a relaxing environment where
              clients can escape, unwind, and indulge in premium salon services.
            </p>
            <p className="mb-4">
              Our team of skilled professionals specializes in a variety of
              treatments, from hair styling and facials to luxurious spa
              therapies. We use only the finest products to ensure you get
              exceptional results every time.
            </p>
            <p>
              Whether you are here for a quick touch-up or a complete
              transformation, our mission is to make you feel pampered and
              valued.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-accent py-16 px-4 md:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4 text-background">Our Mission</h2>
        <p className="max-w-3xl mx-auto text-lg text-background">
          To provide top-quality beauty services in a warm and welcoming
          atmosphere, helping every client leave feeling beautiful, confident,
          and rejuvenated.
        </p>
      </section>
    </main>
  );
}
