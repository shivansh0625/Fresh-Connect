import { Link } from 'wouter';

const Hero = () => {
  return (
    <section className="relative bg-neutral-cream pt-24">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold font-heading leading-tight mb-4">
              Connect Directly with <span className="text-primary">Fresh Produce</span>
            </h1>
            <p className="text-lg mb-8">
              Fresh Connect brings farmers and buyers together, cutting out the middleman for fresher produce at better prices.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="/auth/signup" className="btn-primary text-center">Get Started</Link>
              <Link href="#how-it-works" className="btn-secondary text-center">Learn More</Link>
            </div>
          </div>
          <div className="md:w-1/2">
            {/* A farmer holding fresh vegetables in a basket at an organic farm */}
            <img 
              src="https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=750" 
              alt="Farmer with fresh produce" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
