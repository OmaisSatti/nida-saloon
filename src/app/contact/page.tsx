import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import InfoCard from "@/components/InfoCard";

export default function Contact() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-[40vh] flex items-center justify-center bg-cover bg-center text-center px-4"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1600x600.png?text=Contact+Us')",
        }}
      >
        <InfoCard
          title="Contact Us"
          description="We’re here to help and answer your questions."
        />
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Left Side - Contact Form */}
        <div className="bg-card p-8 rounded-xl shadow-md border border-border">
          <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Info */}
        <div className="bg-card p-8 rounded-xl shadow-md border border-border flex flex-col gap-6">
          <h2 className="text-2xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Whether you’re booking an appointment, have a question about our
            services, or simply want to say hi — we’d love to hear from you.
          </p>

          {/* Contact Info Boxes */}
          <div className="flex items-center gap-4 p-4 bg-muted rounded-lg border border-border">
            <div className="p-3 bg-primary text-primary-foreground rounded-full">
              <FaMapMarkerAlt size={20} />
            </div>
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-muted-foreground text-sm">
                123 Main Street, City, Country
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-muted rounded-lg border border-border">
            <div className="p-3 bg-primary text-primary-foreground rounded-full">
              <FaPhoneAlt size={20} />
            </div>
            <div>
              <p className="font-semibold">Phone</p>
              <p className="text-muted-foreground text-sm">+123 456 789</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-muted rounded-lg border border-border">
            <div className="p-3 bg-primary text-primary-foreground rounded-full">
              <FaEnvelope size={20} />
            </div>
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-muted-foreground text-sm">
                contact@zarnabsalon.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

