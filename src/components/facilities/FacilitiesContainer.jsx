"use client";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import FacilityCard from "@/components/facilities/FacilityCard";

const FacilitiesContainer = ({ facilities }) => {

  const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentFacilities =
    facilities.slice(itemOffset, endOffset);

  const pageCount =
    Math.ceil(facilities.length / itemsPerPage);

  const handlePageClick = (event) => {

    const newOffset =
      (event.selected * itemsPerPage) %
      facilities.length;

    setItemOffset(newOffset);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <div>

      {/* GRID */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
        "
      >

        {currentFacilities.map((facility) => (

          <FacilityCard
            key={facility._id}
            facility={facility}
          />

        ))}

      </div>

      {/* PAGINATION */}
      <div className="mt-16 flex justify-center">

        <ReactPaginate

          breakLabel="..."

          nextLabel="›"

          previousLabel="‹"

          onPageChange={handlePageClick}

          pageRangeDisplayed={3}

          pageCount={pageCount}

          renderOnZeroPageCount={null}

          containerClassName="
            flex
            items-center
            gap-3
          "

          pageClassName=""

          pageLinkClassName="
            flex
            items-center
            justify-center
            w-11
            h-11
            rounded-2xl
            bg-[#111827]
            border
            border-[#1C2438]
            text-[#94A3B8]
            font-medium
            transition-all
            duration-300
            hover:border-[#00E5A0]
            hover:text-[#00E5A0]
            hover:shadow-lg
            hover:shadow-[#00E5A0]/10
          "

          activeLinkClassName="
            !bg-[#00E5A0]
            !text-[#0A0E1A]
            !border-[#00E5A0]
            shadow-lg
            shadow-[#00E5A0]/20
          "

          previousLinkClassName="
            flex
            items-center
            justify-center
            w-11
            h-11
            rounded-2xl
            bg-[#111827]
            border
            border-[#1C2438]
            text-[#E2E8F0]
            text-xl
            transition-all
            duration-300
            hover:border-[#00E5A0]
            hover:text-[#00E5A0]
          "

          nextLinkClassName="
            flex
            items-center
            justify-center
            w-11
            h-11
            rounded-2xl
            bg-[#111827]
            border
            border-[#1C2438]
            text-[#E2E8F0]
            text-xl
            transition-all
            duration-300
            hover:border-[#00E5A0]
            hover:text-[#00E5A0]
          "

          disabledLinkClassName="
            opacity-40
            cursor-not-allowed
          "

          breakLinkClassName="
            text-[#64748B]
            px-2
          "
        />

      </div>

    </div>
  );
};

export default FacilitiesContainer;