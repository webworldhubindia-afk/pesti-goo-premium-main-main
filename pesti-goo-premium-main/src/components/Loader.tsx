import { useEffect, useState } from 'react';
import loaderImage from '/loader-image.png';

const Loader = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Start fade out animation
          setTimeout(() => {
            setIsFading(true);
            setTimeout(onLoadingComplete, 500);
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-primary transition-opacity duration-500 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
      </div>

      {/* Main Loader Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo Container with Animation */}
        <div className="relative">
          {/* Rotating Ring */}
          <div className="absolute inset-0 -m-4 w-36 h-36 md:w-44 md:h-44 border-4 border-transparent border-t-secondary border-r-secondary/50 rounded-full animate-spin" />
          
          {/* Pulsing Glow */}
          <div className="absolute inset-0 -m-8 w-44 h-44 md:w-52 md:h-52 bg-secondary/20 rounded-full blur-2xl animate-pulse" />
          
          {/* Main Image */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm border-4 border-secondary/30 shadow-2xl">
            <img
              src={loaderImage}
              alt="Pestigo Pest Control"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Company Name */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            Pestigo
          </h1>
          <p className="text-sm md:text-base text-secondary/90 font-medium tracking-wider uppercase">
            Pest Control Services
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 md:w-80 mt-4">
          <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm border border-white/20">
            <div
              className="h-full bg-gradient-to-r from-secondary via-secondary/80 to-secondary rounded-full transition-all duration-300 ease-out shadow-lg shadow-secondary/50"
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Progress Percentage */}
          <div className="flex justify-between items-center mt-3 text-sm">
            <span className="text-primary-foreground/70 font-medium">Loading...</span>
            <span className="text-secondary font-bold">{progress}%</span>
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="flex gap-2 mt-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-secondary rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="absolute bottom-8 text-center px-4">
        <p className="text-primary-foreground/60 text-xs md:text-sm">
          Professional Pest Control Services in Delhi NCR
        </p>
      </div>
    </div>
  );
};

export default Loader;
