import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import Logo from './Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if we're on a dashboard page to change navbar visibility
  const isDashboard = location.includes('dashboard');
  
  if (isDashboard) return null;

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Logo className="h-12 mr-2" />
          <span className="font-heading font-bold text-primary text-xl md:text-2xl hidden sm:inline-block">Fresh Connect</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 text-neutral-dark font-medium">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
          <Link href="/#how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
          <Link href="/#pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link href="/auth/login" className="text-primary font-medium hover:text-primary-light transition-colors hidden md:block">Log In</Link>
          <Link href="/auth/signup" className="bg-primary text-white font-medium px-4 py-2 rounded-lg hover:bg-primary-light transition-colors">Sign Up</Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-neutral-dark"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white pb-4`}>
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link href="/" className="block px-3 py-2 text-base font-medium text-neutral-dark hover:bg-primary hover:text-white rounded-md">Home</Link>
          <Link href="/#about" className="block px-3 py-2 text-base font-medium text-neutral-dark hover:bg-primary hover:text-white rounded-md">About</Link>
          <Link href="/#how-it-works" className="block px-3 py-2 text-base font-medium text-neutral-dark hover:bg-primary hover:text-white rounded-md">How It Works</Link>
          <Link href="/#pricing" className="block px-3 py-2 text-base font-medium text-neutral-dark hover:bg-primary hover:text-white rounded-md">Pricing</Link>
          <Link href="/#contact" className="block px-3 py-2 text-base font-medium text-neutral-dark hover:bg-primary hover:text-white rounded-md">Contact</Link>
          <Link href="/auth/login" className="block px-3 py-2 text-base font-medium text-primary hover:bg-primary hover:text-white rounded-md">Log In</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
