import { Link } from 'wouter';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">How Fresh Connect Works</h2>
          <div className="w-20 h-1 bg-primary-accent mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Our platform makes buying and selling fresh produce simple, transparent, and beneficial for everyone involved.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto z-10 relative">
                <span className="text-white text-3xl font-bold">1</span>
              </div>
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-primary-light -z-10"></div>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">Sign Up & Choose Role</h3>
            <p>Create your account and select whether you're a seller (farmer, distributor) or buyer (restaurant, hotel, retailer).</p>
          </div>
          
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto z-10 relative">
                <span className="text-white text-3xl font-bold">2</span>
              </div>
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-primary-light -z-10"></div>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">Connect & Trade</h3>
            <p>Sellers list their produce with current prices and inventory. Buyers browse, compare, and place orders directly.</p>
          </div>
          
          <div className="text-center">
            <div className="relative mb-6">
              <div className="w-20 h-20 bg-primary-light rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-3xl font-bold">3</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">Delivery & Growth</h3>
            <p>Coordinate delivery options, track orders, and build lasting relationships that help both businesses grow.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/auth/signup" className="btn-accent">Start Your Journey</Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
