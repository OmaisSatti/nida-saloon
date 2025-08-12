import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border mt-12">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-12 grid gap-8 sm:grid-cols-3">

        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold text-foreground">Salon Store</h2>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
            Your trusted beauty partner for salon-quality products and services.
            Bringing elegance and style to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              className="p-3 bg-muted rounded-full hover:bg-primary transition-colors"
            >
              <FaFacebookF className="text-foreground hover:text-white transition-colors" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              className="p-3 bg-muted rounded-full hover:bg-primary transition-colors"
            >
              <FaInstagram className="text-foreground hover:text-white transition-colors" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              className="p-3 bg-muted rounded-full hover:bg-primary transition-colors"
            >
              <FaTwitter className="text-foreground hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Salon Store. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;


