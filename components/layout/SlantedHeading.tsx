import React from 'react';

interface SlantedHeadingProps {
  text: string;
  backgroundColor?: string;
  textColor?: string;
  angle?: number;
}

export const SlantedHeading: React.FC<SlantedHeadingProps> = ({
  text,
  backgroundColor = 'bg-red-600',
  textColor = 'text-white',
  angle = 10
}) => {
  return (
    <div
      className={`${backgroundColor} ${textColor} p-5 w-full max-w-[600px] relative`}
      style={{
        clipPath: `polygon(0 0, 100% 0, calc(100% - ${angle}vw) 100%, 0 100%)`,
      }}
    >
      <h1 className="text-4xl font-bold">{text}</h1>
    </div>
  );
};

// export default function Component() {
//   return (
//     <div>
//       <SlantedHeading text="PROGRAMS WE OFFER" />
//     </div>
//   );
// }