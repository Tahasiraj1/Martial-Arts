import React from 'react';

interface TriangleProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
  opacity?: string;
  direction?: 'up' | 'down' | 'left' | 'right'; // Triangle orientation
}

export const Triangle: React.FC<TriangleProps> = ({
  backgroundColor = 'bg-red-700',
  width = 'w-[800px]',
  height = 'h-[600px]',
  opacity = 'opacity-20',
  direction = 'up',
}) => {
  // Define clip-path styles for different directions
  const directionStyles: { [key: string]: string } = {
    up: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    down: 'polygon(0% 0%, 50% 100%, 100% 0%)',
    left: 'polygon(0% 50%, 100% 0%, 100% 100%)',
    right: 'polygon(0% 0%, 100% 50%, 0% 100%)',
  };

  return (
    <div
      className={`${backgroundColor} ${width} ${height} ${opacity} flex items-center justify-center absolute inset-x-0 -z-10 bottom-0`}
      style={{
        clipPath: directionStyles[direction],
      }}
    >
    </div>
  );
};
