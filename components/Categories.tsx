'use client";'
import { motion } from "framer-motion";
import categoryCars from "../public/prop.webp";
import categoryAppliances from "../public/prop.webp";
import categoryElectronics from "../public/prop.webp";
import categoryFurniture from "../public/prop.webp";
import Image from "next/image";

const categories = [
  { name: "Cars & Vehicles", count: "3,200+", image: categoryCars },
  { name: "Appliances", count: "1,800+", image: categoryAppliances },
  { name: "Electronics", count: "4,500+", image: categoryElectronics },
  { name: "Furniture", count: "2,100+", image: categoryFurniture },
];
const Categories = () => {
  return (
    
      <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Popular Categories
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Explore thousands of listings across the most popular second-hand categories.
          </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => (
            <div key={cat.name}>
              <Image
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-1">
                  {cat.name}
                </h3>
                <p className="text-sm text-primary-foreground/70">{cat.count} listings</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};
export default Categories;