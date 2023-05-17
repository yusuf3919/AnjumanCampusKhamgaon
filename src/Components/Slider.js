import React, { useState, useEffect } from 'react';

const Slider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(
        (currentImageIndex) => (currentImageIndex + 1) % images.length
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images]);

  const handlePrev = () => {
    setCurrentImageIndex(
      (currentImageIndex) =>
        (currentImageIndex + images.length - 1) % images.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex(
      (currentImageIndex) => (currentImageIndex + 1) % images.length
    );
  };

  return (
    <div className="relative w-full h-full sm:h-72 md:h-80 lg:h-96">
      <img
        src={images[currentImageIndex]}
        alt="corrupt"
        className="w-[100%] max-w-[896] h-[100%] max-h-[600] object-container"
      />
      <div className="sm:p-6 block justify-between items-center object-cover">
        <button
          className="absolute top-[50%] text-4xl h-12 w-12 text-red opacity-50 hover:opacity-100 bg-white rounded-full"
          onClick={handlePrev}
        >
          {'<'}
        </button>
        <button
          className="absolute top-[50%] right-[1.5%] text-4xl h-12 w-12 text-red opacity-50 hover:opacity-100 rounded-full bg-white"
          onClick={handleNext}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default Slider;
