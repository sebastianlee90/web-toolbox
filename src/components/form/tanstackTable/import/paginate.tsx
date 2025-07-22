"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";

import type { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { useDebounceEffect } from "ahooks";
import { useEffect, useState } from "react";
// import { Select } from "../form/selects";
// import { AutoExpandingInput } from "../ui/autoExpandingInput";
// import { DataTableViewOptions } from "./viewOptions";
import { Select } from "../../select";

type DataTablePaginationProps<TData> = {
  table: Table<TData>;
  pageSizeOptions?: number[];
  totalCount?: number;
};

export function Paginate<TData>({
  table,
  pageSizeOptions = [5, 10, 25, 50, 100, 200],
  totalCount,
}: DataTablePaginationProps<TData>) {
  const [page, setPage] = useState("1");
  const currentPageIndex = table.getState().pagination.pageIndex + 1;
  const startRowRange =
    currentPageIndex * table.getState().pagination.pageSize -
    table.getState().pagination.pageSize +
    1;
  const endRowRange = currentPageIndex * table.getState().pagination.pageSize;
  useEffect(() => {
    setPage(currentPageIndex.toString());
  }, [currentPageIndex]);

  useDebounceEffect(
    () => {
      table.setPageIndex(Number(page) - 1);
    },
    [page],
    {
      wait: 500,
    }
  );

  return (
    <div className="flex flex-row items-center justify-between gap-4 overflow-auto py-2 pl-2 pr-0.5 @container @sm:gap-8">
      <div className="hidden @sm:block text-sm text-slate-500">
        Data result of {startRowRange} -{" "}
        {!!totalCount && endRowRange > totalCount ? totalCount : endRowRange}
        {`${totalCount ? ` of ${totalCount}` : ""}`}
      </div>
      <div className="flex w-full flex-col items-end sm:items-center gap-4 @sm:w-auto @sm:flex-row @sm:gap-6">
        {/* <DataTableViewOptions table={table} /> */}
        <div className="hidden @sm:flex w-full flex-row justify-between gap-4 @sm:justify-end">
          <div className="flex flex-row items-center gap-x-2">
            <p className="text-sm font-medium w-32 text-slate-500">
              Rows per page
            </p>
            <Select
              // className="h-8 py-0.5 text-sm border-primary text-primary"
              options={pageSizeOptions.map((pageSize) => ({
                label: pageSize.toString(),
                value: pageSize.toString(),
              }))}
              value={table.getState().pagination.pageSize.toString()}
              onChange={(value) => {
                table.setPageSize(Number(value));
              }}
            />
          </div>

          <div className="flex flex-row items-center text-sm gap-x-2">
            <p className="text-slate-500">Page</p>
            {/* <div>
              <AutoExpandingInput
                className="h-8 text-center text-sm border-primary text-primary"
                value={page}
                min={1}
                minWidth={24}
                max={table.getPageCount()}
                onChange={(e) => {
                  setPage(e.target.value);
                  // table.setPageIndex(table.getPageCount() - 1);
                }}
              />
            </div> */}
            <p className="text-slate-500">of {table.getPageCount() ?? 1}</p>
          </div>
        </div>
        <div className="flex shrink items-center gap-x-2">
          <Button
            aria-label="Go to first page"
            variant="outline"
            title="Go to first page"
            className="hidden size-8 px-1 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <DoubleArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Go to previous page"
            variant="outline"
            title="Go to previous page"
            className="h-8 w-8 px-1"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          {/* <div className="flex-1">
            <Input
              className="h-8 text-center text-sm"
              value={page}
              min={1}
              max={table.getPageCount()}
              onChange={(e) => {
                setPage(e.target.value);
                // table.setPageIndex(table.getPageCount() - 1);
              }}
            />
          </div> */}
          <Button
            aria-label="Go to next page"
            variant="outline"
            title="Go to next page"
            className="h-8 w-8 px-1"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button
            aria-label="Go to last page"
            variant="outline"
            title="Go to last page"
            className="hidden h-8 w-8 px-1 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <DoubleArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </div>
  );
}
