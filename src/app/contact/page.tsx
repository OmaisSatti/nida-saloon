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
          title="   Contact Us"
          description=" We’re here to help and answer your questions."
        />
      </section>

      {/* Contact Info + Form */}
      <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          <p className="mb-4">
            Whether you’re booking an appointment, have a question about our
            services, or simply want to say hi — we’d love to hear from you.
          </p>
          <ul className="space-y-4">
            <li>
              📍 <span className="font-semibold">Address:</span> 123 Main Street, City, Country
            </li>
            <li>
              📞 <span className="font-semibold">Phone:</span> +123 456 789
            </li>
            <li>
              📧 <span className="font-semibold">Email:</span>{" "}
              contact@zarnabsalon.com
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-accent p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1 font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your Message"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
