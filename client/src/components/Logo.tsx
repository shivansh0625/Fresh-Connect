import logoSrc from '@assets/logo.png';

interface LogoProps {
  className?: string;
}

const Logo = ({ className = 'h-10' }: LogoProps) => {
  return (
    <img 
      src={logoSrc} 
      alt="Fresh Connect Logo" 
      className={className} 
    />
  );
};

export default Logo;
