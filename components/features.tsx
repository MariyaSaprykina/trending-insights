import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion';

const accordionData = [
  {
    title: 'Uncover the latest Trends in real-time',
    content: 'high growth segment - exploding niche - emerging product',
    link: 'https://trends.google.com/trends/explore?q=Indify',
    image: '/logo.png',
  },
  {
    title: 'Use your own domain',
    content: 'Content for the second accordion item.',
    link: 'https://trends.google.com/trends/explore?q=Indify',
    image: '/logo.png',
  },
  // Add more accordion items as needed
];

export default function Features() {
  return (
    <div className="mx-auto mt-10 w-full max-w-xl px-5 rounded-xl border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
      <Accordion type="single" collapsible>
        {accordionData.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              {item.content}{' '}
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <img src={item.image} alt="Accordion Image" />
              </a>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
