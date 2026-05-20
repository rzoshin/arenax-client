"use client";

import {AlertDialog, Button} from "@heroui/react";
import { TrashIcon } from "@phosphor-icons/react";
import { redirect } from "next/navigation";

export function DeleteAlert({facility}) {
  const {
    _id,
    facilityName,
  } = facility;
   const handleDelete = async () => {

    const {data: tokenData} = await authClient.token();
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${_id}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${tokenData.token}`
        }
    })
    const data = await res.json();
    redirect('/facilities');
  };
  return (
    <AlertDialog>
      <Button variant="danger">
        <TrashIcon size={13} /> Delete
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete facility permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{facilityName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={()=> handleDelete()} slot="close" variant="danger">
                Delete Facility
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}