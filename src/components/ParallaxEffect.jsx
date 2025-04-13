import React, { useRef, useEffect, useState } from 'react';

export const Parallax = ({ children, speed = 0.2, className = '', direction = 'vertical' }) => {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();
      const elementPosition = rect.top + window.scrollY;
      const windowPosition = window.scrollY + window.innerHeight;

      // Only apply parallax when element is in viewport
      if (windowPosition > elementPosition && window.scrollY < elementPosition + rect.height) {
        const distance = window.scrollY - elementPosition;
        setOffset(distance * speed);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  const getTransformStyle = () => {
    if (direction === 'horizontal') {
      return { transform: `translateX(${offset}px)` };
    }
    return { transform: `translateY(${offset}px)` };
  };

  return (
    <div ref={elementRef} className={`overflow-hidden ${className}`}>
      <div style={getTransformStyle()}>
        {children}
      </div>
    </div>
  );
};

export const ParallaxLayers = ({ children, speeds = [0.1, 0.2, 0.3], className = '' }) => {
  const containerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {React.Children.map(children, (child, index) => {
        const speed = speeds[index % speeds.length];

        return (
          <div 
            className="absolute inset-0"
            style={{
              transform: `translateY(${scrollPos * speed}px)`,
              zIndex: index,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export const MouseParallax = ({ children, strength = 20, className = '' }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const rect = container.getBoundingClientRect();

    // Calculate mouse position relative to the center of the container
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

    setPosition({ x, y });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`parallax-container ${className}`}
    >
      <div 
        className="parallax-layer"
        style={{
          transform: `translateX(${position.x * strength}px) translateY(${position.y * strength}px)`
        }}
      >
        {children}
      </div>
    </div>
  );
};
