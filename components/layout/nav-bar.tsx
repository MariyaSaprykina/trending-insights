'use client';

import useScroll from '@/lib/hooks/use-scroll';
import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import Image from 'next/image';

export const navItems = [
  {
    name: 'Trends',
    slug: 'trends',
  },
  {
    name: 'About',
    slug: 'about',
  },
];

export default function Navbar() {
  const scrolled = useScroll(50);
  return (
    <div
      className={`fixed top-0 w-full flex justify-center ${
        scrolled
          ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
          : 'bg-white/0'
      } z-30 transition-all`}
    >
      <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <p>Trend Matter</p>
          </Link>
          <NavigationMenuPrimitive.Root
            delayDuration={0}
            className="relative hidden lg:block"
          >
            <NavigationMenuPrimitive.List className="flex flex-row space-x-2 p-4">
              {navItems.map(({name, slug}) => (
                <NavigationMenuPrimitive.Item key={slug} asChild>
                  <Link
                    id={`nav-${slug}`}
                    key={slug}
                    className="rounded-md px-3 py-2 text-base font-medium text-gray-500 transition-colors ease-out hover:text-black"
                    href={`/${slug}`}
                  >
                    {name}
                  </Link>
                </NavigationMenuPrimitive.Item>
              ))}
            </NavigationMenuPrimitive.List>
            {/* <NavigationMenuPrimitive.Viewport className="data-[state=closed]:animate-scale-out-content data-[state=open]:animate-scale-in-content absolute left-0 top-full flex w-[var(--radix-navigation-menu-viewport-width)] origin-[top_center] justify-start rounded-lg border border-gray-200 bg-white shadow-lg" /> */}
          </NavigationMenuPrimitive.Root>
        </div>
      </div>
    </div>
  );
}
