import { useState } from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import ProductTable from '../components/dashboard/ProductTable';
import { useToast } from '@/hooks/use-toast';

// Mock products data for UI display - in production we would fetch from API
const sellerProducts = [
  {
    id: 1,
    name: "Organic Tomatoes",
    variety: "Heirloom Mix",
    category: "Vegetables",
    image: "https://pixabay.com/get/gb02aaff1f6b9cedaa0697aa11f732b7c758e6bcd780d81bcbd63c9a7acdc43b075543dfa5d832dc5b5d6833364d2333802bde58f90da4c2c0a732c75482fcc26_1280.jpg",
    price: 3.49,
    unit: "lb",
    stock: 45,
    status: "Active"
  },
  {
    id: 2,
    name: "Organic Carrots",
    variety: "Rainbow Variety",
    category: "Vegetables",
    image: "https://pixabay.com/get/g0b2204c3de3fe420f282d7a3081286be6aec4bfdd140b104ac38b901596178e2d0f41245b77333b707f259bb4ab88f5f541e0f2d1ab1f6abd124215b9ed05237_1280.jpg",
    price: 2.99,
    unit: "bunch",
    stock: 28,
    status: "Active"
  },
  {
    id: 3,
    name: "Strawberries",
    variety: "Sweet Variety",
    category: "Fruits",
    image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    price: 5.99,
    unit: "pint",
    stock: 12,
    status: "Low Stock"
  },
  {
    id: 4,
    name: "Baby Spinach",
    variety: "Tender Leaves",
    category: "Greens",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    price: 4.99,
    unit: "lb",
    stock: 0,
    status: "Out of Stock"
  }
];

const SellerDashboard = () => {
  const [activeTab, setActiveTab] = useState('products');
  const [showAddProductForm, setShowAddProductForm] = useState(false);
  const [products, setProducts] = useState(sellerProducts);
  const { toast } = useToast();

  const handleAddProduct = (formData: any) => {
    // In a real application, this would send data to an API
    const newProduct = {
      id: Date.now(),
      name: formData.productName,
      variety: formData.variety || "Standard",
      category: formData.productCategory,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100", // Placeholder image
      price: parseFloat(formData.productPrice),
      unit: formData.priceUnit,
      stock: parseInt(formData.productQuantity),
      status: parseInt(formData.productQuantity) > 10 ? "Active" : parseInt(formData.productQuantity) > 0 ? "Low Stock" : "Out of Stock"
    };
    
    setProducts([...products, newProduct]);
    setShowAddProductForm(false);
    
    toast({
      title: "Product added",
      description: `${formData.productName} has been added to your inventory.`,
    });
  };

  const handleDeleteProduct = (productId: number) => {
    setProducts(products.filter(product => product.id !== productId));
    
    toast({
      title: "Product deleted",
      description: "The product has been removed from your inventory.",
    });
  };

  return (
    <div className="py-8 bg-neutral-cream min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <Sidebar 
            role="seller" 
            username="Farm Name"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          
          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold font-heading">My Products</h2>
              <button 
                onClick={() => setShowAddProductForm(!showAddProductForm)}
                className="bg-primary-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-primary transition duration-300 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                {showAddProductForm ? 'Cancel' : 'Add New Product'}
              </button>
            </div>
            
            {/* Add Product Form */}
            {showAddProductForm && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4 font-heading">Add New Product</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const formValues = Object.fromEntries(formData.entries());
                  handleAddProduct(formValues);
                }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="productName" className="block text-gray-700 mb-2 font-medium">Product Name</label>
                      <input 
                        type="text" 
                        id="productName" 
                        name="productName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                        required 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="productCategory" className="block text-gray-700 mb-2 font-medium">Category</label>
                      <select 
                        id="productCategory" 
                        name="productCategory" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                        required
                      >
                        <option value="">Select a category</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Herbs">Herbs</option>
                        <option value="Greens">Greens</option>
                        <option value="Roots">Root Vegetables</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="productPrice" className="block text-gray-700 mb-2 font-medium">Price</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">$</span>
                        <input 
                          type="number" 
                          step="0.01" 
                          id="productPrice" 
                          name="productPrice" 
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                          required 
                        />
                        <select 
                          id="priceUnit" 
                          name="priceUnit" 
                          className="px-2 py-2 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                        >
                          <option value="lb">/lb</option>
                          <option value="bunch">/bunch</option>
                          <option value="pint">/pint</option>
                          <option value="each">/each</option>
                          <option value="basket">/basket</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="productQuantity" className="block text-gray-700 mb-2 font-medium">Available Quantity</label>
                      <div className="flex">
                        <input 
                          type="number" 
                          id="productQuantity" 
                          name="productQuantity" 
                          className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                          required 
                        />
                        <select 
                          id="quantityUnit" 
                          name="quantityUnit" 
                          className="px-2 py-2 border border-l-0 border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
                        >
                          <option value="lbs">lbs</option>
                          <option value="bunches">bunches</option>
                          <option value="pints">pints</option>
                          <option value="units">units</option>
                          <option value="baskets">baskets</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="productDescription" className="block text-gray-700 mb-2 font-medium">Description</label>
                    <textarea 
                      id="productDescription" 
                      name="productDescription" 
                      rows={4} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2 font-medium">Product Image</label>
                    <div className="flex items-center justify-center px-6 py-6 border-2 border-gray-300 border-dashed rounded-lg">
                      <div className="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <p className="mt-1 text-sm text-gray-600">Drag and drop your image here, or <span className="text-primary">browse</span></p>
                        <p className="text-xs text-gray-500 mt-1">Supported formats: JPG, PNG. Max size: 5MB</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input type="checkbox" id="organicProduct" name="organicProduct" className="mr-2" />
                    <label htmlFor="organicProduct" className="text-gray-700">This is an organic product</label>
                  </div>
                  
                  <div className="flex justify-end">
                    <button 
                      type="button" 
                      className="px-6 py-2 border border-gray-300 rounded-lg mr-2 hover:bg-gray-50 transition duration-300"
                      onClick={() => setShowAddProductForm(false)}
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit" 
                      className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition duration-300"
                    >
                      Add Product
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* Products Table */}
            <ProductTable 
              products={products} 
              onDelete={handleDeleteProduct} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDashboard;
