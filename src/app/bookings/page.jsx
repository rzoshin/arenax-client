import MyBookingCard from '@/components/bookings/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { CalendarPlusIcon, CalendarBlankIcon } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@heroui/react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;

    const {token} = await auth.api.getToken(
      {headers: await headers()});

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.id}`, 
        {
            headers: { authorization: `Bearer ${token}`}});
            
    const bookings = await res.json();

    return (
        <div className="min-h-screen bg-base">
      <div className="mx-auto max-w-7xl px-4 py-12">

        {/* Page header */}
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-[rgba(0,160,110,0.30)] dark:border-[rgba(0,229,160,0.25)] bg-[rgba(0,160,110,0.08)] dark:bg-[#00E5A0]/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#007A55] dark:bg-[#00E5A0] animate-pulse" />
              <span className="text-[#007A55] dark:text-[#00E5A0] text-xs font-bold uppercase tracking-[0.15em]">
                Owner Dashboard
              </span>
            </div>
            <h1 className="text-4xl font-black text-primary tracking-tight">
              My Bookings
            </h1>
            <p className="text-muted text-sm mt-1">
              {bookings.length > 0
                ? `You have ${bookings.length} booking${bookings.length > 1 ? "s" : ""}`
                : "Manage and track your facility bookings"}
            </p>
          </div>

          <Link
            href="/facilities"
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-xl bg-[#00916A] dark:bg-[#00E5A0] px-5 py-2.5 text-sm font-semibold text-white dark:text-[#0A0E1A] hover:opacity-90 transition-opacity"
          >
            <CalendarPlusIcon size={16} weight="bold" />
            Book a Facility
          </Link>
        </div>

        {bookings.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card py-24 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#00916A]/10 dark:bg-[#00E5A0]/10">
              <CalendarBlankIcon size={36} className="text-[#00916A] dark:text-[#00E5A0]" weight="light" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">No bookings yet</h3>
            <p className="mb-8 max-w-xs text-sm text-muted leading-relaxed">
              You haven't booked any facility yet. Explore available venues and
              lock in your first session.
            </p>
            <Link
              href="/facilities"
              className="inline-flex items-center gap-2 bg-[#00916A] dark:bg-[#00E5A0] rounded-xl px-6 py-3 text-sm text-white dark:text-[#0A0E1A] font-semibold hover:opacity-90 transition-opacity"
            >
              <CalendarPlusIcon size={16} weight="bold" />
                Explore Facilities
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
                    {bookings.map((booking) =>
                        <MyBookingCard key={booking._id} booking={booking} />
                    )}
                </div>
        )}
      </div>
    </div>
    );
};

export default MyBookingPage;
