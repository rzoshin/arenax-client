import MyFacilityCard from '@/components/facilities/MyFacilityCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { PlusCircleIcon, BuildingsIcon } from '@phosphor-icons/react/dist/ssr';

const ManageFacilityPage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;    

    const {token} = await auth.api.getToken(
      {headers: await headers()});
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities?ownerEmail=${user.email}`,
        {
            headers: {
      authorization: `Bearer ${token}`
    }
        }
    );
    const facilities = await res.json();

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
              My Facilities
            </h1>
            <p className="text-muted text-sm mt-1">
              {facilities.length > 0
                ? `Managing ${facilities.length} facilit${facilities.length > 1 ? "ies" : "y"}`
                : "Add and manage your sports venues"}
            </p>
          </div>

          <Link
            href="/add-facility"
            className="inline-flex items-center gap-2 self-start sm:self-auto rounded-xl bg-[#00916A] dark:bg-[#00E5A0] px-5 py-2.5 text-sm font-semibold text-white dark:text-[#0A0E1A] hover:opacity-90 transition-opacity"
          >
            <PlusCircleIcon size={16} weight="bold" />
            Add New Facility
          </Link>
        </div>

        {facilities.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-card py-24 text-center">
            <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#00916A]/10 dark:bg-[#00E5A0]/10">
              <BuildingsIcon size={36} className="text-[#00916A] dark:text-[#00E5A0]" weight="light" />
            </div>
            <h3 className="mb-2 text-xl font-bold text-primary">No facilities yet</h3>
            <p className="mb-8 max-w-xs text-sm text-muted leading-relaxed">
              You havent listed any facility yet. Add your first venue and
              start receiving bookings today.
            </p>
            <Link
              href="/add-facility"
              className="inline-flex items-center gap-2 rounded-xl bg-[#00916A] dark:bg-[#00E5A0] px-6 py-3 text-sm font-semibold text-white dark:text-[#0A0E1A] transition-opacity hover:opacity-90"
            >
              <PlusCircleIcon size={16} weight="bold" />
              Create Your First Facility
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
                    {facilities.map(facility =>
                        <MyFacilityCard key={facility._id} facility={facility} />
                    )}
                </div>
        )}
      </div>
    </div>
    );
};

export default ManageFacilityPage;
