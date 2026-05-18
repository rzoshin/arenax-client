"use client";

import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import FacilityCard from "@/components/facilities/FacilityCard";

const FacilitiesContainer = ({ facilities }) => {
  const itemsPerPage = 6;

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentFacilities = facilities.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(facilities.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % facilities.length;

    setItemOffset(newOffset);
  };

  return (
    <div>
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentFacilities.map((facility) => (
          <FacilityCard
            key={facility._id}
            facility={facility}
          />
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-12 flex justify-center">

        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}

          containerClassName="flex items-center gap-2"

          pageClassName="w-10 h-10"

          pageLinkClassName="
            flex items-center justify-center
            w-10 h-10
            rounded-xl
            border border-gray-200
            text-gray-700
            hover:bg-indigo-500
            hover:text-white
            transition
          "

          activeLinkClassName="
            bg-indigo-600
            text-white
            border-indigo-600
          "

          previousLinkClassName="
            flex items-center justify-center
            w-10 h-10
            rounded-xl
            border border-gray-200
            hover:bg-gray-100
          "

          nextLinkClassName="
            flex items-center justify-center
            w-10 h-10
            rounded-xl
            border border-gray-200
            hover:bg-gray-100
          "

          breakLinkClassName="px-2"
        />
      </div>
    </div>
  );
};

export default FacilitiesContainer;