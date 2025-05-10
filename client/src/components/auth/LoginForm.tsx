import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/lib/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{email?: string; password?: string}>({});
  const { toast } = useToast();
  const { login } = useAuth();
  const [, setLocation] = useLocation();

  const validateForm = () => {
    let tempErrors: {email?: string; password?: string} = {};
    let isValid = true;
    
    if (!email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = 'Email address is invalid';
      isValid = false;
    }
    
    if (!password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    }
    
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        await login(email, password);
        
        // For demo, direct to buyer dashboard
        // In a real app, this would depend on user type from API response
        setLocation('/buyer-dashboard');
        
        toast({
          title: "Login successful",
          description: "Welcome back to Fresh Connect!",
        });
      } catch (error) {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold font-heading mb-2">Welcome Back</h2>
        <p className="text-gray-600">Log in to your Fresh Connect account</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="loginEmail" className="block text-gray-700 mb-2 font-medium">Email Address</label>
          <input 
            type="email" 
            id="loginEmail" 
            name="email" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="loginPassword" className="block text-gray-700 font-medium">Password</label>
            <a href="#" className="text-sm text-primary hover:underline">Forgot Password?</a>
          </div>
          <input 
            type="password" 
            id="loginPassword" 
            name="password" 
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>
        
        <div className="mb-6">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">Remember me</span>
          </label>
        </div>
        
        <button 
          type="submit" 
          className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-primary-light transition duration-300"
        >
          Log In
        </button>
        
        <div className="text-center mt-4 text-sm">
          Don't have an account? <Link href="/auth/signup" className="text-primary hover:underline">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
