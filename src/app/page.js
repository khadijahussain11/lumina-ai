import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase"; 
import Solutions from "@/components/Solutions";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";


export default function Home() {

  return (

    <main>

      <Navbar />

      <Hero />


      <section id="features">
        <Features />
      </section>


      <section id="product">
        <ProductShowcase />
      </section>


      <section id="solutions">
        <Solutions />
      </section>
      <Testimonials />  


      <section id="pricing">
        <Pricing />
      </section>

      <section id="contact">
        <CTA />
      </section>

      <Footer />


    </main>

  );

}