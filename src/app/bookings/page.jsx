import MyBookingCard from '@/components/bookings/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { CalendarPlus } from '@phosphor-icons/react/dist/ssr';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;

    const res = await fetch(`http://localhost:8000/bookings/${user?.id}`);
    const bookings = await res.json();

    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
                My Bookings
            </h2>

            {bookings.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/10 bg-white py-20 text-center dark:border-white/10 dark:bg-[#111827]">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10">
                        <CalendarPlus size={32} className="text-emerald-400" weight="light" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-700 dark:text-slate-200">
                        No bookings yet
                    </h3>
                    <p className="mb-6 max-w-xs text-sm text-slate-400">
                        You have not booked any facility yet. Explore available facilities and make your first booking.
                    </p>
                    <Link
                        href="/facilities"
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-[#0A0E1A] transition-opacity hover:opacity-90"
                    >
                        <CalendarPlus size={16} weight="bold" />
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
    );
};

export default MyBookingPage;
