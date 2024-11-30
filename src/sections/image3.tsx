import React from "react";
import "~/index.css";
import { flyer1, flyer2, flyer3, flyer4, flyer5, flyer6 } from "~/assets/index.js";


type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  format?: string; 
};

const images: ImageMetadata[] = [flyer1, flyer2, flyer3, flyer4, flyer5, flyer6, flyer5, flyer6, flyer5, flyer6, flyer5, flyer6];

const ImageGallery = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative flex flex-col w-full sm:w-[calc(50%-1.5rem)] md:w-[300px] h-[400px] perspective"
        >
          <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            <div className="absolute w-full h-full backface-hidden">
              <img
                src={image.src} 
                alt={`Event ${index + 1}`}
                className="rounded-lg shadow-md object-cover w-full h-full"
              />
            </div>

            <div className="absolute w-full h-full bg-red-500 text-white flex flex-col items-center justify-center rounded-lg shadow-md transform rotate-y-180 backface-hidden">
              <p className="text-lg font-semibold">Event {index + 1}</p>
              <p className="text-sm">Description of Event {index + 1}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
