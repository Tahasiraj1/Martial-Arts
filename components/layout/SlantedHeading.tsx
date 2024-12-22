import React from 'react';

interface SlantedHeadingProps {
  text: string;
  paragraph?: string;
  backgroundColor?: string;
  textColor?: string;
  angle?: number;
  width?: string
}

export const SlantedHeading: React.FC<SlantedHeadingProps> = ({
  text,
  paragraph,
  backgroundColor = 'bg-red-700',
  textColor = 'text-white',
  angle = 10,
  width = 'max-w-[600px]',
}) => {
  return (
    <div
      className={`${backgroundColor} ${textColor} p-5 w-full ${width} relative`}
      style={{
        clipPath: `polygon(0 0, 100% 0, calc(100% - ${angle}vw) 100%, 0 100%)`,
      }}
    >
      <div className='flex flex-col'>
        <h1 className="text-4xl font-semibold uppercase ">{text}</h1>
        <p className="text-lg font-semibold uppercase ">{paragraph}</p>
      </div>
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