import { Link } from 'wouter';

// Sample featured products - in production we would fetch from API
const featuredProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    description: "Locally grown heirloom varieties, packed with flavor.",
    price: 3.49,
    unit: "lb",
    image: "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    badge: "In Season",
    updatedAt: "Today"
  },
  {
    id: 2,
    name: "Baby Spinach",
    description: "Tender young leaves, perfect for salads and cooking.",
    price: 4.99,
    unit: "lb",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    badge: "Best Seller",
    updatedAt: "Yesterday"
  },
  {
    id: 3,
    name: "Strawberries",
    description: "Sweet, juicy berries picked at peak ripeness.",
    price: 5.99,
    unit: "pint",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    badge: "Limited",
    updatedAt: "2 days ago"
  },
  {
    id: 4,
    name: "Organic Carrots",
    description: "Sweet, crunchy carrots grown in rich soil.",
    price: 2.99,
    unit: "bunch",
    image: "https://pixabay.com/get/gc9597c5fb934ed1c78c242ca14c9e7a94640cfd011f329522bc51fcdbc6459f419b2b2760f0a4c73265bcfd02243c9d173c3295d5b213f2feb3e3505f4a3a46c_1280.jpg",
    badge: "Popular",
    updatedAt: "Today"
  }
];

const FeaturedProduce = () => {
  return (
    <section id="produce" className="py-16 bg-neutral-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Produce</h2>
          <div className="w-20 h-1 bg-primary-accent mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Explore a sample of the fresh, seasonal produce available through our network of trusted farmers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg font-heading">{product.name}</h3>
                  <span className="bg-primary-accent text-white text-sm px-2 py-1 rounded-full">{product.badge}</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-primary-light font-heading font-bold text-xl">${product.price}</span>
                    <span className="text-gray-500 text-sm">/{product.unit}</span>
                  </div>
                  <span className="text-xs text-gray-500">Updated: {product.updatedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/auth/signup" className="btn-secondary">View All Produce</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduce;
