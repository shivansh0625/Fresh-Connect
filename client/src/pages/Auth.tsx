import { useParams, useLocation } from 'wouter';
import { useEffect } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignupForm from '../components/auth/SignupForm';

const Auth = () => {
  const { type } = useParams();
  const [, setLocation] = useLocation();
  
  useEffect(() => {
    // Redirect to login if an invalid auth type is provided
    if (type !== 'login' && type !== 'signup') {
      setLocation('/auth/login');
    }
  }, [type, setLocation]);

  return (
    <section className="py-16 bg-neutral-cream min-h-[calc(100vh-64px)]">
      <div className="container mx-auto px-4 max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          {type === 'login' ? <LoginForm /> : <SignupForm />}
        </div>
      </div>
    </section>
  );
};

export default Auth;
