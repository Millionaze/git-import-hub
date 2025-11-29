import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-center mb-8">
            Blog
          </h1>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto">
            This page is under construction. Content will be added soon.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
