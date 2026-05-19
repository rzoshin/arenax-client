"use client";

import {AlertDialog, Button} from "@heroui/react";
import { TrashIcon } from "@phosphor-icons/react";
import { redirect } from "next/navigation";

export function CancelBooking({booking}) {
   const {_id, facilityName} = booking;
   const handleDelete = async () => {

    const res = await fetch(`http://localhost:8000/booking/${_id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await res.json();
    redirect('/bookings');
  };
  return (
    <AlertDialog>
      <Button variant="danger">
        <TrashIcon size={13} /> Cancel
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Cancel booking?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently cancel your booking of {facilityName}. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=> handleDelete()} slot="close" variant="danger">
                Cancel Booking
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}