'use client'
import { useState } from "react";
import { Link, Menu, X } from "lucide-react";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="font-display text-2xl font-bold tracking-tight text-foreground">
          
        </a>
        <div className="hidden md:flex items-center gap-8">
          
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground font-asgard">Japoff</h2>
          
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button label="Sign in" />
          <Button label="Sign up" />
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#categories" className="block text-sm font-medium text-muted-foreground">Categories</a>
          <a href="#how-it-works" className="block text-sm font-medium text-muted-foreground">How It Works</a>
          <a href="#why" className="block text-sm font-medium text-muted-foreground">Why Japoff</a>
          <div className="flex gap-2 pt-2">
            <Button label="Sign in" />
            <Button label="Start Trading" />
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;