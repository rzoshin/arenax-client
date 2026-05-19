import BookingCard from "@/components/bookings/BookingCard";
import Image from "next/image";
import Link from "next/link";

const FacilityDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/facilities/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC] dark:bg-[#060A10]">
        <p className="text-[#64748B]">Facility not found.</p>
      </div>
    );
  }

  const facility = await res.json();

  const {
    facilityName,
    facilityType,
    image,
    location,
    pricePerHour,
    capacity,
    availableTimeSlots,
    description,
  } = facility;

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#060A10] transition-colors duration-300">

      {/* Back nav */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <Link
          href="/facilities"
          className="inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#00E5A0] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Facilities
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[500px] overflow-hidden">
        <Image
          src={image}
          alt={facilityName}
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A10]/80 via-[#060A10]/20 to-transparent" />

        {/* Facility type badge on image */}
        <div className="absolute bottom-6 left-6 flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-[#00E5A0] text-[#0A0E1A] text-xs font-bold uppercase tracking-wider">
            {facilityType}
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* LEFT — details */}
          <div className="flex-1 min-w-0">

            {/* Location */}
            <div className="flex items-center gap-1.5 text-[#64748B] text-sm mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 flex-shrink-0" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F1F5F9] mb-4 transition-colors duration-300">
              {facilityName}
            </h1>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E2E8F0] dark:border-[#1C2438] bg-white dark:bg-[#111827] text-sm text-[#64748B] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00E5A0]" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" />
                </svg>
                {capacity} Players
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E2E8F0] dark:border-[#1C2438] bg-white dark:bg-[#111827] text-sm text-[#64748B] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00E5A0]" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {availableTimeSlots?.length} Time Slots
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E2E8F0] dark:border-[#1C2438] bg-white dark:bg-[#111827] text-sm font-semibold text-[#00E5A0] transition-colors duration-300">
                ৳ {pricePerHour} / hour
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[#E2E8F0] dark:bg-[#1C2438] mb-8 transition-colors duration-300" />

            {/* Overview */}
            <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-3 transition-colors duration-300">
              Overview
            </h2>
            <p className="text-[#475569] leading-relaxed mb-8">
              {description}
            </p>

            {/* Time slots */}
            <h2 className="text-xl font-bold text-[#0F172A] dark:text-[#F1F5F9] mb-4 transition-colors duration-300">
              Available Time Slots
            </h2>
            <div className="flex flex-wrap gap-2">
              {availableTimeSlots?.map((slot, i) => (
                <span
                  key={i}
                  className="
                    px-4 py-2 rounded-lg text-sm font-medium
                    border border-[#00E5A0]/25 bg-[#00E5A0]/8
                    text-[#00E5A0]
                  "
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — booking card */}
          <div className="w-full lg:w-[340px] flex-shrink-0">
            <div className="sticky top-24">
              <BookingCard facility={facility} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetailsPage;
