import React, { useState, useRef } from 'react';

export const HoverCard = ({ title, description, className = '', children, effectType = 'lift' }) => {
  const effectClasses = {
    lift: 'hover-lift',
    glow: 'hover-glow',
    expand: 'hover-expand',
    rotate: 'transition-transform duration-300 hover:rotate-2',
  };

  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-md transition duration-300 ${effectClasses[effectType]} ${className}`}
    >
      {children ? children : (
        <>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </>
      )}
    </div>
  );
};

export const MagneticButton = ({ children, className = '', strength = 40 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const maxDistance = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const normalizedDistance = Math.min(distance / maxDistance, 1);

    const effectStrength = strength * (1 - normalizedDistance);

    setPosition({
      x: distanceX * effectStrength / 100,
      y: distanceY * effectStrength / 100
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <button
      ref={buttonRef}
      className={`transition-transform duration-200 ease-out rounded-lg py-3 px-6 bg-black text-white ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};

export const ButtonGlow = ({ children, className = '', glowColor = 'rgba(66, 153, 225, 0.6)' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`relative overflow-hidden rounded-lg py-3 px-6 bg-blue-600 text-white transition-all duration-300 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            boxShadow: `0 0 15px 5px ${glowColor}`,
            animation: 'pulse 1.5s infinite',
          }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};
