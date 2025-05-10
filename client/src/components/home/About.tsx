const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">About Fresh Connect</h2>
          <div className="w-20 h-1 bg-primary-accent mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            We're transforming how fresh produce moves from farms to kitchens, creating a more sustainable and efficient food system.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-neutral-cream rounded-lg p-6 shadow-md transform hover:scale-105 transition duration-300">
            <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">Our Mission</h3>
            <p>To create a sustainable ecosystem where farmers receive fair prices and buyers access the freshest produce possible.</p>
          </div>
          
          <div className="bg-neutral-cream rounded-lg p-6 shadow-md transform hover:scale-105 transition duration-300">
            <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">Our Community</h3>
            <p>A growing network of local farmers, restaurants, hotels, and retailers committed to quality and sustainability.</p>
          </div>
          
          <div className="bg-neutral-cream rounded-lg p-6 shadow-md transform hover:scale-105 transition duration-300">
            <div className="bg-primary-light inline-block p-3 rounded-full text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 font-heading">Our Impact</h3>
            <p>Reduced food miles, less waste, and stronger local economies through direct farm-to-table connections.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
