const WhyChoose = () => {
  return (
    <section className="py-16 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* A diverse array of colorful fresh fruits and vegetables arranged at a farmers market */}
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=750" 
              alt="Fresh produce at farmers market" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">Why Choose Fresh Connect</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-primary-accent rounded-full p-1 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-heading">Fresher Produce</h3>
                  <p>Direct connections mean produce gets from farm to table faster, ensuring peak freshness and flavor.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-accent rounded-full p-1 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-heading">Better Prices</h3>
                  <p>By eliminating middlemen, farmers earn more and buyers pay less for premium quality.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-accent rounded-full p-1 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-heading">Transparent Sourcing</h3>
                  <p>Know exactly where your food comes from and build relationships with producers.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-accent rounded-full p-1 mr-4 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1 font-heading">Sustainable Practices</h3>
                  <p>Support environmentally responsible farming methods and reduce food miles.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
