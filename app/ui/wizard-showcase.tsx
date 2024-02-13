import React from 'react';
import Card from './wizard-card';

const cardsData = [
  {
    name: 'Mythical Dragon',
    description: 'A powerful and ancient creature of legend.',
    image: '/card-1.png',
  },
  {
    name: 'Arcane Wizard',
    description: 'Master of mystical spells and powerful conjurations.',
    image: '/card-2.png',
  },
  {
    name: 'Heavenly Sorceress',
    description: 'A divine being with the power to heal and protect.',
    image: '/card-3.png',
  },
  // Add more card objects here
];

const Showcase = () => {
  return (
    <div className="flex justify-center items-center flex-wrap">
      {cardsData.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Showcase;