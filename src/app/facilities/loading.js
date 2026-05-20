export default function Loading() {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title skeleton */}
        <div className="h-12 w-72 bg-[#111827] rounded-2xl mb-12 animate-pulse" />

        {/* Search + filter skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="h-12 flex-1 bg-[#111827] rounded-2xl animate-pulse" />
          <div className="h-12 w-48 bg-[#111827] rounded-2xl animate-pulse" />
        </div>

        {/* Card grid skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-3xl overflow-hidden border border-[#1C2438] bg-[#111827] animate-pulse"
            >
              {/* Image area */}
              <div className="aspect-video bg-[#1C2438]" />
              {/* Content */}
              <div className="p-5 space-y-4">
                <div className="h-6 w-3/4 bg-[#1C2438] rounded-xl" />
                <div className="space-y-2">
                  <div className="h-3 w-full bg-[#1C2438] rounded" />
                  <div className="h-3 w-5/6 bg-[#1C2438] rounded" />
                  <div className="h-3 w-2/3 bg-[#1C2438] rounded" />
                </div>
                <div className="flex gap-4">
                  <div className="h-4 w-24 bg-[#1C2438] rounded" />
                  <div className="h-4 w-20 bg-[#1C2438] rounded" />
                </div>
                <div className="pt-4 border-t border-[#1C2438] flex justify-between items-center">
                  <div className="space-y-1">
                    <div className="h-3 w-20 bg-[#1C2438] rounded" />
                    <div className="h-6 w-28 bg-[#1C2438] rounded" />
                  </div>
                  <div className="h-10 w-28 bg-[#1C2438] rounded-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
