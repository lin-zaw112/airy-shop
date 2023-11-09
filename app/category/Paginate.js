"use client";
import React, { Fragment } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import ReactPaginate from "react-paginate";

export default function Paginate({ pageCount }) {
  const router = useRouter();
  const handlePageClick = (clickEvent) => {
    router.push(`?page=${clickEvent.selected + 1}`);
  };
  return (
    <ReactPaginate
      initialPage={1}
      pageCount={pageCount}
      onPageChange={handlePageClick}
      nextLabel={
        <Fragment>
          Next <ChevronRightIcon className="h-6 w-6 " />
        </Fragment>
      }
      previousLabel={
        <Fragment>
          <ChevronLeftIcon className="h-6 w-6 " />
          Previous
        </Fragment>
      }
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      containerClassName=" flex w-full h-fit flex-row flex-nowrap justify-around p-5"
      pageClassName="rounded-full overflow-hidden"
      breakClassName=""
      pageLinkClassName="h-12 w-12 grid place-items-center"
      activeClassName="bg-neutral-950 text-neutral-50"
      nextLinkClassName="my-3 flex flex-row flex-nowrap gap-2"
      previousLinkClassName="my-3 flex flex-row flex-nowrap gap-2"
    />
  );
}
