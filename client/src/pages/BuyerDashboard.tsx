import { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import ProductCard from '../components/dashboard/ProductCard';
import { useToast } from '@/hooks/use-toast';

// Mock products data for UI display - in production we would fetch from API
const products = [
  {
    id: 1,
    name: "Organic Bell Peppers",
    category: "Vegetables",
    image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: 3.99,
    unit: "lb",
    farm: "Green Valley Farm",
    distance: "12 miles",
    updatedAt: "1h ago",
    badge: "Organic"
  },
  {
    id: 2,
    name: "Honeycrisp Apples",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: 4.50,
    unit: "lb",
    farm: "Orchard Hills Farm",
    distance: "8 miles",
    updatedAt: "3h ago",
    badge: "Popular"
  },
  {
    id: 3,
    name: "Fresh Cilantro",
    category: "Herbs",
    image: "https://images.unsplash.com/photo-1590759485418-80708a515bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    price: 2.25,
    unit: "bunch",
    farm: "Sunshine Herbs",
    distance: "15 miles",
    updatedAt: "5h ago",
    badge: "Limited"
  }
];

const BuyerDashboard = () => {
  const [activeTab, setActiveTab] = useState('browse');
  const [category, setCategory] = useState('all');
  const [distance, setDistance] = useState('50');
  const [sortBy, setSortBy] = useState('relevance');
  const [cartItems, setCartItems] = useState<any[]>([]);
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? {...item, quantity: item.quantity + 1} : item
      ));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="py-8 bg-neutral-cream min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <Sidebar 
            role="buyer" 
            username="Restaurant Name"
            cartCount={cartItems.reduce((total, item) => total + item.quantity, 0)}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          
          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-2xl font-bold mb-6 font-heading">Browse Fresh Produce</h2>
            
            {/* Filters */}
            <div className="bg-white p-4 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <label htmlFor="category" className="block text-sm font-medium mb-2">Category:</label>
                  <select 
                    id="category" 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="all">All Categories</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="herbs">Herbs</option>
                    <option value="organic">Organic</option>
                  </select>
                </div>
                
                <div className="mb-4 md:mb-0">
                  <label htmlFor="distance" className="block text-sm font-medium mb-2">Distance:</label>
                  <select 
                    id="distance" 
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="10">Within 10 miles</option>
                    <option value="25">Within 25 miles</option>
                    <option value="50">Within 50 miles</option>
                    <option value="100">Within 100 miles</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="sort" className="block text-sm font-medium mb-2">Sort By:</label>
                  <select 
                    id="sort" 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="distance">Distance</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
            
            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <a href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-primary hover:text-white transition duration-300">&laquo;</a>
                <a href="#" className="px-3 py-1 border border-gray-300 rounded-md bg-primary text-white">1</a>
                <a href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-primary hover:text-white transition duration-300">2</a>
                <a href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-primary hover:text-white transition duration-300">3</a>
                <span className="px-3 py-1 text-gray-500">...</span>
                <a href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-primary hover:text-white transition duration-300">10</a>
                <a href="#" className="px-3 py-1 border border-gray-300 rounded-md text-gray-500 hover:bg-primary hover:text-white transition duration-300">&raquo;</a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
