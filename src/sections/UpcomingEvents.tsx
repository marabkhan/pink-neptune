import React from "react";

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
            src="https://cdn.discordapp.com/attachments/1299578941278781461/1309759330316455996/IMG_6234.jpg?ex=6744116e&is=6742bfee&hm=6b4d21eccfbc6f7851cef0026128989faa4633326e3f626b9c607ae7df3b92e1&"
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
