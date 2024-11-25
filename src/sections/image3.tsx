  import React from "react";
  import "~/index.css";

  const ImageGallery = () => {
    const images: string[] = [
      "https://cdn.discordapp.com/attachments/1299578941278781461/1309759330316455996/IMG_6234.jpg?ex=6744116e&is=6742bfee&hm=6b4d21eccfbc6f7851cef0026128989faa4633326e3f626b9c607ae7df3b92e1&",
      "https://cdn.discordapp.com/attachments/1299578941278781461/1309759330802733126/Untitled_Artwork.jpg?ex=6744116e&is=6742bfee&hm=9f830d3314e6e9681f8a100b3930fc03406f7c1c2f0dabe5c016b39953020546&",
      "https://cdn.discordapp.com/attachments/1299578941278781461/1309759331092271174/8_pm_doors_9_pm_music.jpg?ex=6744116e&is=6742bfee&hm=54caac3ce4b49116229e4162dddf1517ee45900d983dc26c3609d434cde82bfd&",
      "https://cdn.discordapp.com/attachments/1299578941278781461/1309759331331342437/IMG_6831.jpg?ex=6744116e&is=6742bfee&hm=2a828b59b22cba3444c563df65532fd4a632358dc7868dfcd02a8c8963de79ed&",
      "https://cdn.discordapp.com/attachments/1299578941278781461/1309759330576367638/Planet_Arcadia4.jpg?ex=6744116e&is=6742bfee&hm=ed167a4ab568c2b8d79f3d1b83c429462f71e84d90f247c49af53641b426e1af&",
    ];

    const rowCount = 3;
    const groupedRows = Array.from({ length: rowCount }, () => [] as string[]);
    images.forEach((image, index) => {
      groupedRows[index % rowCount].push(image);
    });

    return (
      <div className="flex justify-center gap-6 p-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="group relative w-[300px] h-[400px] flex flex-col perspective"
          >
            <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-180">
              <div className="absolute w-full h-full backface-hidden">
                <img
                  src={src}
                  alt={`Image ${index}`}
                  className="rounded-lg shadow-md object-fit w-[300px] h-[400px]"
                />
              </div>
              <div className="absolute w-full h-full bg-red-500 text-white flex items-center justify-center rounded-lg shadow-md transform rotate-y-180 backface-hidden">
                <p className="text-lg font-semibold">Event Info</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default ImageGallery;
