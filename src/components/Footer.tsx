import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display font-bold text-primary mb-4">
              Default Pathway
            </h3>
            <p className="text-sm opacity-90">
              Helping homeowners sell their houses fast and easy.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="opacity-90 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sell-your-home" className="opacity-90 hover:text-primary transition-colors">
                  Sell Your Home
                </Link>
              </li>
              <li>
                <Link to="/save-your-home" className="opacity-90 hover:text-primary transition-colors">
                  Save Your Home
                </Link>
              </li>
              <li>
                <Link to="/blog" className="opacity-90 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Email: info@defaultpathway.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Main St, City, ST 12345</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="opacity-90 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-90 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-75">
          <p>&copy; {new Date().getFullYear()} Default Pathway. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
