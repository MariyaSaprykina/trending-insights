'use client';

import Features from '@/components/features';
import Chart from '@/components/icons/Chart';
import TrendCard from '@/components/trend-card';
import TrendCardPlaceholder from '@/components/trend-card-placeholder';
import {TRENDS} from '@/constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion';
import {link} from 'fs';

export default function Home() {
  return (
    <>
      <div className="w-full max-w-xl px-5 xl:px-0 items-center justify-center">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{animationDelay: '0.15s', animationFillMode: 'forwards'}}
        >
          Building blocks for your Next project
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{animationDelay: '0.25s', animationFillMode: 'forwards'}}
        >
          An opinionated collection of components, hooks, and utilities for your
          Next.js project.
        </p>
      </div>
      <div className="mx-auto mt-6 w-full flex flex-col animate-fade-up items-center justify-center px-5">
        <div className="w-80 sm:w-96 flex flex-col gap-3">
          {TRENDS.map((trend) => (
            <TrendCard
              key={trend.keyword}
              keyword={trend.keyword}
              link={trend.link}
            />
          ))}
          <TrendCardPlaceholder />
          <TrendCardPlaceholder />
          <div className="text-sm text-gray-500 flex flex-col items-center justify-center">
            <p>Want to see more trends?</p>
            <span>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 underline transition-all hover:text-black"
              >
                Subscribe
              </a>{' '}
              to our waiting list
            </span>
          </div>
        </div>
      </div>
      {/* <div className="mx-auto mt-10 w-full max-w-xl px-5 rounded-xl border border-gray-200 bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur"> */}
      <Features />
      {/* </div> */}
    </>
  );
}
