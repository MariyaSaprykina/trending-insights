'use client';

import {useEffect, useState} from 'react';
import {Menu, X} from 'lucide-react';
import {navItems} from './nav-bar';
import Link from 'next/link';
import {cn} from '@/lib/utils';

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);

  // prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          'fixed right-3 top-3 z-40 rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 focus:outline-none active:bg-gray-300 lg:hidden',
          open && 'hover:bg-gray-100 active:bg-gray-200'
        )}
      >
        {open ? (
          <X className="h-5 w-5 text-gray-600" />
        ) : (
          <Menu className="h-5 w-5 text-gray-600" />
        )}
      </button>
      <nav
        className={cn(
          'fixed inset-0 z-20 hidden w-full bg-white px-5 py-16 lg:hidden',
          open && 'block'
        )}
      >
        <ul className="grid divide-y divide-gray-200">
          {navItems.map(({name, slug}) => (
            <li key={slug} className="py-3">
              <Link
                href={`/${slug}`}
                onClick={() => setOpen(false)}
                className="flex w-full font-semibold capitalize"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
