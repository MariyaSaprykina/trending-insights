import {TrendCardProps} from '@/types';
import Image from 'next/image';

export default function TrendCard({keyword, link}: TrendCardProps) {
  return (
    <div className="flex items-center rounded-md border border-gray-200 bg-white p-3 shadow-lg">
      <Image
        src="/logo.png"
        alt="Precedent logo"
        width="30"
        height="30"
        className="mr-2 h-10 w-10 animate-pulse rounded-full"
      ></Image>
      <div>
        <div className="flex flex-col items-start justify-center">
          <p className="font-semibold text-blue-800">{keyword}</p>
          <a
            href={link}
            rel="noopener noreferrer"
            target="_blank"
            className="line-clamp-1 text-left text-sm text-gray-500 underline-offset-2 transition-all hover:text-gray-800 hover:underline"
            style={{overflowWrap: 'anywhere'}}
          >
            view trend
          </a>
        </div>
      </div>
    </div>
  );
}
