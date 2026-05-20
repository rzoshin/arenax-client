import MyFacilityCard from '@/components/facilities/MyFacilityCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Link from 'next/link';
import { PlusCircle } from '@phosphor-icons/react/dist/ssr';

const ManageFacilityPage = async () => {
    const session = await auth.api.getSession({ headers: await headers() });
    const user = session?.user;    

    const {token} = await auth.api.getToken(
      {headers: await headers()});
    const res = await fetch(`http://localhost:8000/facilities?ownerEmail=${user.email}`,
        {
            headers: {
      authorization: `Bearer ${token}`
    }
        }
    );
    const facilities = await res.json();

    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            <h2 className="mb-6 text-2xl font-bold text-slate-800 dark:text-slate-100">
                Manage Facilities
            </h2>

            {facilities.length === 0 ? (
                <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-black/10 bg-white py-20 text-center dark:border-white/10 dark:bg-[#111827]">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-400/10">
                        <PlusCircle size={32} className="text-emerald-400" weight="light" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-700 dark:text-slate-200">
                        No facilities yet
                    </h3>
                    <p className="mb-6 max-w-xs text-sm text-slate-400">
                        You have not created any facility yet. Start by adding your first one.
                    </p>
                    <Link
                        href="/add-facility"
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-[#0A0E1A] transition-opacity hover:opacity-90"
                    >
                        <PlusCircle size={16} weight="bold" />
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
    );
};

export default ManageFacilityPage;
