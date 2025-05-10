import { Link } from 'wouter';

const CTA = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-white">Ready to Transform Your Fresh Produce Business?</h2>
        <p className="text-white text-lg mb-8 max-w-3xl mx-auto opacity-90">
          Join thousands of buyers and sellers already benefiting from direct connections, transparent pricing, and fresher produce.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/auth/signup" className="bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-neutral-cream transition duration-300">Sign Up Now</Link>
          <Link href="#" className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-light hover:border-primary-light transition duration-300">Contact Sales</Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
