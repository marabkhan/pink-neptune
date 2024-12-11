import React from "react";
import "~/index.css";
import Card from "~/components/Card";
import { previousEventFlyers } from "../constants";

const ImageGallery = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {previousEventFlyers.map((image, index) => (
        <Card
          key={index}
          frontImage={image.src}
          altText={image.alt}
          title={image.title}
          description={image.description}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
