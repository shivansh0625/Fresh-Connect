import Hero from '../components/home/Hero';
import About from '../components/home/About';
import WhyChoose from '../components/home/WhyChoose';
import HowItWorks from '../components/home/HowItWorks';
import FeaturedProduce from '../components/home/FeaturedProduce';
import Pricing from '../components/home/Pricing';
import Testimonials from '../components/home/Testimonials';
import CTA from '../components/home/CTA';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <WhyChoose />
      <HowItWorks />
      <FeaturedProduce />
      <Pricing />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;
