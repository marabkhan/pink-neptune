import React from "react";
import "~/index.css";
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';


type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  format?: string; 
};

const images: ImageMetadata[] = [image1, image2, image3, image4, image5, ];

const ImageGallery = () => {
  return (
    <div className="flex justify-center gap-6 p-6">
      {images.map((image, index) => (
        <div
          key={index}
          className="group relative w-[300px] h-[400px] flex flex-col perspective"
        >
          <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
            {/* Front Side */}
            <div className="absolute w-full h-full backface-hidden">
              <img
                src={image.src} 
                alt={`Event ${index + 1}`}
                className="rounded-lg shadow-md object-cover w-[300px] h-[400px]"
              />
            </div>
            {/* Back Side */}
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
