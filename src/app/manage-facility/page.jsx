import MyFacilityCard from '@/components/facilities/MyFacilityCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const ManageFacilityPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user

    const res = await fetch(`http://localhost:8000/facilities?ownerEmail=${user.email}`)
    const facilities = await res.json();
    return (
        <div className='max-w-7xl mx-auto'>
            Manage Facility
            {facilities.map(facility => 
                <MyFacilityCard key={facility._id} facility={facility} />
            )}
        </div>
    );
};

export default ManageFacilityPage;