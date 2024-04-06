import Image from 'next/image';

export default function TrendCardPlaceholder() {
  return (
    <div className="flex items-center rounded-lg border border-gray-200 bg-white p-3 shadow-lg transition-all">
      <div className="mr-2 h-10 w-10 animate-pulse rounded-full bg-gray-200" />
      <div className="mb-3 flex flex-col items-start justify-center gap-3">
        <div className="h-5 w-20 animate-pulse rounded-md bg-gray-200" />
        <div className="h-4 w-40 animate-pulse rounded-md bg-gray-200" />
      </div>
      {/* <div className="h-4 w-full animate-pulse rounded-md bg-gray-200 sm:w-80" /> */}
    </div>
  );
}
