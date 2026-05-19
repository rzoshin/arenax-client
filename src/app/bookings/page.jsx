import MyBookingCard from '@/components/bookings/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const res = await fetch(`http://localhost:8000/bookings/${user?.id}`)
    const bookings = await res.json()
    return (
        <div>
            My Bookings
            {bookings.map((booking) => 
                <MyBookingCard key={booking._id} booking={booking}/>
            )}
        </div>
    );
};

export default MyBookingPage;