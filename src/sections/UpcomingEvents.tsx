import React from "react";
import image1 from '../assets/image3.jpg';

type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  format?: string; 
};

const image: ImageMetadata[] = [ image1 ];

const ImageGallery = () => {
  
  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex flex-row gap-96 ">
        <div className="flex-grow">
          
          <h2 className="text-5xl font-semibold mb-2">Event Title</h2>
          <p>
            <strong>Location:</strong> Main Hall
          </p>
          <p className="text-bottom">
            <strong>Date:</strong> December 5, 2024
          </p>
          <p className="mt-4">description </p>
        </div>

        <div className="flex-shrink-0">
          <img
            src={image[0].src}
            alt="Event"
            className="w-auto max-h-[35rem] object-cover border-2 border-white"
          />
        </div>
      </div>

      <div className="text-center mt-8"></div>
    </div>
  );
};

export default ImageGallery;
