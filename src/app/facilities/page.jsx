import FacilityCard from '@/components/ui/FacilityCard';
import React from 'react';

const FacilitiesPage = async () => {
    const res = await fetch('http://localhost:8000/facilities');
    const facilities = await res.json();

    return (
        <div className='bg-white'>
            <h1 className='text-5xl'>Explore All Facilities</h1>
            <div className='max-w-7xl mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    facilities.map(facility => <FacilityCard key={facility._id} facility={facility} />)
                }
            </div>   
        </div>
    );
};

export default FacilitiesPage;