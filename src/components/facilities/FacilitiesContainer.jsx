"use client";
import React, { useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import ReactPaginate from "react-paginate";
import FacilityCard from "@/components/facilities/FacilityCard";
import { FunnelIcon, MagnifyingGlassIcon } from "@phosphor-icons/react";

const FACILITY_TYPES = [
  "All",
  "Football",
  "Cricket",
  "Basketball",
  "Badminton",
  "Tennis",
  "Swimming",
];

const FacilitiesContainer = ({ facilities, initialSearch = "", initialType = "" }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const itemsPerPage = 6;
  const [itemOffset, setItemOffset] = useState(0);

  const updateParams = useCallback(
    (key, value) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value !== "All") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
      params.delete("page");
      setItemOffset(0);
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const handleSearch = useDebouncedCallback((value) => {
    updateParams("search", value);
  }, 400);

  const handleTypeChange = (type) => {
    updateParams("type", type);
  };

  const endOffset = itemOffset + itemsPerPage;
  const currentFacilities = facilities.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(facilities.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % facilities.length;
    setItemOffset(newOffset);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeType = initialType || "All";

  return (
    <div>
      {/* SEARCH + FILTER BAR */}
      <div className="flex flex-col sm:flex-row gap-4 mb-10">
        {/* Search */}
        <div className="relative flex-1">
          <MagnifyingGlassIcon
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B]"
          />
          <input
            type="text"
            placeholder="Search by facility name..."
            defaultValue={initialSearch}
            onChange={(e) => handleSearch(e.target.value)}
            className="
              w-full h-12 pl-11 pr-4 bg-[rgba(0,160,110,0.08)] dark:bg-[#00E5A0]/10 border border-[#1C2438]
              rounded-2xl text-[#E2E8F0] placeholder:text-[#64748B]
              text-sm outline-none
              dark:focus:border-[#00E5A0] focus:ring-1 dark:focus:ring-[#00E5A0]/20
              transition-all duration-300
            "
          />
        </div>

        {/* Facility type filter */}
        <select
          value={activeType}
          onChange={(e) => handleTypeChange(e.target.value)}
          className="
            h-12 px-4 pr-10
            bg-[rgba(0,160,110,0.08)] dark:bg-[#00E5A0]/10 border border-[#1C2438]
            rounded-2xl text-[#64748B] dark:text-[#E2E8F0]
            text-sm outline-none cursor-pointer
            focus:border-[#007A55] focus:ring-[#007A55]/20
            dark:focus:border-[#00E5A0] focus:ring-1 dark:focus:ring-[#00E5A0]/20
            transition-all duration-300
            appearance-none
          "
        >
          {FACILITY_TYPES.map((type) => (
            <option key={type} value={type === "All" ? "" : type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* EMPTY STATE */}
      {facilities.length === 0 ? (
        <div className="text-center py-24 text-[#64748B]">
          <p className="text-xl font-medium mb-2">No facilities found</p>
          <p className="text-sm">Try adjusting your search or filter.</p>
        </div>
      ) : (
        <>
          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentFacilities.map((facility) => (
              <FacilityCard key={facility._id} facility={facility} />
            ))}
          </div>

          {/* PAGINATION */}
          {pageCount > 1 && (
            <div className="mt-16 flex justify-center">
              <ReactPaginate
                breakLabel="..."
                nextLabel="›"
                previousLabel="‹"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName="flex items-center gap-3"
                pageClassName=""
                pageLinkClassName="
                  flex items-center justify-center w-11 h-11 rounded-2xl
                  bg-[#111827] border border-[#1C2438] text-[#94A3B8] font-medium
                  transition-all duration-300
                  hover:border-[#00E5A0] hover:text-[#00E5A0] hover:shadow-lg hover:shadow-[#00E5A0]/10
                "
                activeLinkClassName="!bg-[#00E5A0] !text-[#0A0E1A] !border-[#00E5A0] shadow-lg shadow-[#00E5A0]/20"
                previousLinkClassName="
                  flex items-center justify-center w-11 h-11 rounded-2xl
                  bg-[#111827] border border-[#1C2438] text-[#E2E8F0] text-xl
                  transition-all duration-300 hover:border-[#00E5A0] hover:text-[#00E5A0]
                "
                nextLinkClassName="
                  flex items-center justify-center w-11 h-11 rounded-2xl
                  bg-[#111827] border border-[#1C2438] text-[#E2E8F0] text-xl
                  transition-all duration-300 hover:border-[#00E5A0] hover:text-[#00E5A0]
                "
                disabledLinkClassName="opacity-40 cursor-not-allowed"
                breakLinkClassName="text-[#64748B] px-2"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default FacilitiesContainer;
