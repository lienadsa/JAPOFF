'use client";'
import Button from "./Button";
import heroImage from "../public/prop.webp";
import Image from "next/image";


const Hero = () => {
  return (
    <section className="relative pt-16 overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
       
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-sm font-medium mb-6" style={{ color: "#703B3B" }}>
              <h1 className="font-display text-2xl font-bold tracking-tight text-foreground font-asgard" style={{ fontSize : "100px"}}>Jakpaoff</h1>
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-foreground mb-6">
              Buy & sell <br />
              <span  style={{ color: "#703B3B" }}>
                pre-owned
              </span> goods
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
               Welcome to Jakpaoff, an e-commerce platform specifically made to facilitate trade in the Nigerian 2nd hand market. Jakpaoff makes second-hand trading fast and effortless. Find great deals on cars, appliances, electronics, and more — all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button label="Browse Listings"/>
              <Button label="Sell Something" />
            </div>
            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <div>
                <span className="block text-2xl font-bold font-display text-foreground">12K+</span>
                Active Listings
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <span className="block text-2xl font-bold font-display text-foreground">8K+</span>
                Happy Traders
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <span className="block text-2xl font-bold font-display text-foreground">98%</span>
                Satisfaction
              </div>
            </div>
          
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
              <Image
                src={heroImage}
                alt="Curated second-hand items"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
         
        </div>
      </div>
    
    </section>
  );
};
export default Hero;