import React, { useState, useEffect } from 'react';

export const Typewriter = ({ text, speed = 100, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setStartTyping(true);
    }, delay);

    return () => clearTimeout(delayTimer);
  }, [delay]);

  useEffect(() => {
    if (!startTyping) return;

    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text.charAt(index));
        setIndex(prevIndex => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, startTyping]);

  return (
    <span className="inline-block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export const FadeInText = ({ 
  text, 
  direction = 'up', 
  delay = 0, 
  duration = 500,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const getAnimationStyle = () => {
    if (!isVisible) {
      const translateValue = '20px';
      const translateDirection = {
        up: `translateY(${translateValue})`,
        down: `translateY(-${translateValue})`,
        left: `translateX(${translateValue})`,
        right: `translateX(-${translateValue})`,
      };

      return {
        transform: translateDirection[direction],
        opacity: 0,
        transition: `opacity ${duration}ms, transform ${duration}ms`
      };
    }

    return {
      transform: 'translate(0)',
      opacity: 1,
      transition: `opacity ${duration}ms, transform ${duration}ms`
    };
  };

  return (
    <div className={className} style={getAnimationStyle()}>
      {text}
    </div>
  );
};

export const GradientText = ({
  text,
  fromColor = 'from-black',
  toColor = 'to-white',
  className = ''
}) => {
  return (
    <span className={`bg-gradient-to-r !text-[#dbdada] bg-clip-text text-transparent ${className}`}>
      {text}
    </span>
  );
};
