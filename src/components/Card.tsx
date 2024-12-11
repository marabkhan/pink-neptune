import React from "react";

type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  format?: string;
};

type CardProps = {
  frontImage: ImageMetadata;
  altText: string;
  title: string;
  description: string;
};

const Card = ({ frontImage, altText, title, description }: CardProps) => {
  return (
    <div className="group relative flex flex-col w-full sm:w-[calc(50%-1.5rem)] md:w-[300px] h-[400px] perspective">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
        {/* front */}
        <div className="absolute w-full h-full backface-hidden">
          <img
            src={frontImage.src}
            alt={altText}
            width={frontImage.width}
            height={frontImage.height}
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </div>

        {/* back */}
        <div className="absolute w-full h-full bg-red-500 text-white flex flex-col items-center justify-center rounded-lg shadow-md transform rotate-y-180 backface-hidden">
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
