import React from 'react';
import { useScrollAnimation } from '~/hooks/useScrollAnimation';
import { GradientText } from './TextEffect';

const EffectSection = ({ title, description, children, className = '', textAlign = 'text-center' }) => {
  const { isVisible, elementRef } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section
      ref={elementRef}
      className={`py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className={`mb-10 ${textAlign}`}>
          <GradientText
            text={title}
            fromColor="from-blue-600"
            toColor="to-purple-600"
            className="text-[40px] md:text-[50px] font-bold mb-4 text-left"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        <div className="mt-8">
          {children}
        </div>
      </div>
    </section>
  );
};

export default EffectSection;
