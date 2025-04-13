import React from 'react';
import { useScrollAnimation } from '~/hooks/useScrollAnimation';

export const FadeInSection = ({
  children,
  className = '',
  threshold = 0.1,
  direction = 'up',
  delay = 0,
  distance = 50
}) => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold });

  const getDirectionTransform = () => {
    if (direction === 'none') return '';

    const directionMap = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
    };

    return directionMap[direction];
  };

  return (
    <div
      ref={elementRef}
      className={`transition-all ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getDirectionTransform(),
        transitionProperty: 'opacity, transform',
        transitionDuration: '0.8s',
        transitionTimingFunction: 'ease-out',
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export const StaggeredReveal = ({
  children,
  className = '',
  itemClassName = '',
  staggerDelay = 100,
  threshold = 0.1,
}) => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold });

  return (
    <div ref={elementRef} className={className}>
      {React.Children.map(children, (child, index) => (
        <div
          className={`transition-all ${itemClassName}`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transitionProperty: 'opacity, transform',
            transitionDuration: '0.5s',
            transitionTimingFunction: 'ease-out',
            transitionDelay: `${isVisible ? index * staggerDelay : 0}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export const ScrollProgress = ({
  color = '#3b82f6',
  height = 4,
  zIndex = 50,
}) => {
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 w-full"
      style={{ height: `${height}px`, zIndex }}
    >
      <div 
        className="h-full"
        style={{
          width: `${scrollProgress}%`,
          backgroundColor: color,
          transition: 'width 0.1s',
        }}
      />
    </div>
  );
};
