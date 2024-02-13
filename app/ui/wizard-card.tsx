'use client'
import React, { useState } from 'react';

const Card = ({ card }: { card: { image: any; name: string; description: string } }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);

  return (
    <div className="relative w-64 h-96 m-4 cursor-pointer" onClick={toggleFlip}>
      <div className="w-full h-full bg-center bg-cover rounded-lg shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
           style={{ backgroundImage: `url(${card.image})` }}>
        {isFlipped && (
          <div className="absolute w-full h-full p-4 flex flex-col justify-between bg-black bg-opacity-75 text-white rounded-lg">
            <h2 className="text-xl font-bold">{card.name}</h2>
            <p>{card.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;