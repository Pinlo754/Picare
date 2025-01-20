import React, { useState } from 'react';
import { Image } from '../types/Image';

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Handle left and right navigation
  const handlePrev = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the selected image
  const selectedImage = images[selectedIndex];

  // Determine which thumbnails to show
  const start = Math.max(0, selectedIndex - 1);
  const end = Math.min(images.length, start + 4);
  const visibleThumbnails = images.slice(start, end);

  return (
    <div className="flex flex-col items-center">
      {/* Selected Image */}
      <div className="m-5 mb-7 relative">
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-white bg-opacity-1 text-black text-2xl font-bold px-4 py-2 rounded-full z-10"
        >
          ‹
        </button>
        <img
          src={selectedImage.src}
          alt="Selected"
          className="w-fit aspect-square rounded-lg shadow-md object-cover"
        />
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white bg-opacity-1 text-black text-2xl font-bold px-4 py-2 rounded-full z-10"
        >
          ›
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide w-full px-4">
        {visibleThumbnails.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(start + index)}
            className={`flex-shrink-0 flex-grow-0 basis-1/4 border-2 rounded-md overflow-hidden focus:outline-none ${images[start + index] === selectedImage
                ? 'border-green-500 border-spacing-2 p-'
                : 'border-transparent'
              }`}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${start + index}`}
              className="w-full h-auto aspect-square object-cover"
            />
          </button>
        ))}
      </div>

    </div>
  );
};

export default ImageGallery;
