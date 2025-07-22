"use client";

import {
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type Cell,
  type ColumnDef,
  type PaginationState,
  type Row,
  type SortingState,
  type Table as TableType,
} from "@tanstack/react-table";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { Paginate } from "./paginate";

import {
  Table as TTable,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn, makeSpace } from "@/lib/utils";
import { useDebounceFn } from "ahooks";
import { Loader } from "lucide-react";
import {
  DataTableColumnHeader,
  DataTableSelectColumnHeader,
} from "./columnHeader";

type CellMetaContext = {
  skipRender?: boolean;
  colSpan?: number;
  className?: string;
};

type ColumnMeta<TData> = {
  getCellContext?: (cell: Cell<TData, unknown>) => CellMetaContext;
};

type SortAndPaginateState = {
  size: number;
  page: number;
  sort: string;
  sortDirection: string;
};

type DataTableProps<TData, TValue> = {
  columns?: (ColumnDef<TData, TValue> & { meta?: ColumnMeta<TData> })[];
  data: TData[];
  totalCount?: number;
  pageCount?: number;
  pageSizeOptions?: number[];
  onRowClick?: (row: TData) => void;
  onSortAndPaginateChange?: (state: SortAndPaginateState) => void;
  sizeKey?: string;
  pageKey?: string;
  sortKey?: string;
  pageState?: number;
  defaultSize?: number;
  excludeColumns?: string[];
  excludeSorting?: string[];
  enablePagination?: boolean;
  href?: string;
  expandable?: boolean;
  expandableKey?: string;
  rowSpanWhenExpanded?: number;
  renderExpandedRow?: (row: Row<TData>) => React.ReactNode;
  isLoading?: boolean;
  rowSelectionKey?: string;
  enableRowSelection?: boolean;
  tableHeadClassName?: string;
  getRowClassName?: (row: Row<TData>) => string;
  renderFirstRow?: () => React.ReactNode;
};

type CustomTable<TData> = TableType<TData> & {
  options?: {
    meta?: {
      getRowClassName?: (row: Row<TData>) => string;
    };
  };
};

export function Table<TData, TValue>({
  columns,
  data,
  totalCount,
  pageCount,
  defaultSize = 10,
  onRowClick,
  onSortAndPaginateChange,
  sizeKey = "size",
  pageKey = "page",
  sortKey = "sort",
  pageSizeOptions = [5, 10, 25, 50, 100, 200],
  excludeColumns,
  excludeSorting,
  enablePagination = false,
  pageState,
  href,
  expandableKey,
  renderExpandedRow,
  rowSpanWhenExpanded,
  isLoading,
  rowSelectionKey,
  enableRowSelection,
  tableHeadClassName,
  getRowClassName,
  renderFirstRow,
}: DataTableProps<TData, TValue>) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [mount, setMount] = useState(false);
  let tableColumns = columns ?? [];
  if (!columns && data.length > 0) {
    const keys = Object.keys(data[0] ?? {});
    tableColumns = keys
      .map((k) => {
        if (excludeColumns?.includes(k)) {
          return;
        }
        return {
          accessorKey: k,
          header: makeSpace(k),
          enableSorting: !excludeSorting?.includes(k),
        };
      })
      .filter((v) => v !== undefined) as ColumnDef<TData, TValue>[];
  }
  // search params
  const page = searchParams?.get(pageKey) ?? 1; // default is page: 1
  const size = searchParams?.get(sizeKey); // default 5 record per page

  const sort = searchParams?.get(sortKey);
  const sortDirection = searchParams?.get(`${sortKey}Direction`);

  // debounce push search params
  const debouncedPushSearchParams = useDebounceFn(
    (pageIndex: number, pageSize: number, sortingState: SortingState) => {
      router.push(
        `${pathname}?${createQueryString({
          [pageKey]: pageIndex + 1,
          [sizeKey]: pageSize,
          [sortKey]: sortingState[0]?.id ?? "",
          [`${sortKey}Direction`]: sortingState[0]?.id
            ? sortingState[0]?.desc
              ? "desc"
              : "asc"
            : null,
        })}`
      );
    },
    { wait: 50 }
  );
  // create query string
  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());
      for (const [key, value] of Object.entries(params)) {
        if (value === null || value === undefined) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return newSearchParams.toString();
    },
    [searchParams]
  );

  useEffect(() => {
    if (pageState && pageState - 1 !== pageIndex) {
      table.setPageIndex(pageState - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageState]);

  // handle server-side pagination
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
    pageIndex: Number(page ?? 0) - 1,
    pageSize: Number(size ?? defaultSize),
  });

  const [sortingState, setSortingState] = useState<SortingState>([]);

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  useEffect(() => {
    setMount(true);
  }, []);
  useEffect(() => {
    if (sort) {
      setSortingState([
        {
          id: sort,
          desc: sortDirection === "desc",
        },
      ]);
      setPagination({
        pageIndex: 0,
        pageSize,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sort, sortDirection]);

  useEffect(() => {
    if (page) {
      setPagination({
        pageIndex: Number(page ?? 1) - 1,
        pageSize: Number(size ?? defaultSize),
      });
    }
  }, [defaultSize, page, size]);

  useEffect(() => {
    if (pageIndex === -1) return;
    // not default value: 0 0 [] undefined
    if (!mount) return;
    if (onSortAndPaginateChange) {
      onSortAndPaginateChange({
        page: pageIndex + 1,
        size: pageSize,
        sort: sortingState[0]?.id ?? "",
        sortDirection: sortingState[0]?.id
          ? sortingState[0]?.desc
            ? "desc"
            : "asc"
          : "",
      });
      return;
    }

    debouncedPushSearchParams.run(pageIndex, pageSize, sortingState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageIndex, pageSize, sortingState]);

  const table: CustomTable<TData> = useReactTable({
    data,
    columns: tableColumns,
    pageCount: (pageCount ?? 0) > 0 ? pageCount : 1,
    state: {
      pagination,
      sorting: sortingState,
    },
    meta: {
      getRowClassName: getRowClassName,
    },
    // row select
    enableRowSelection: enableRowSelection,
    getRowId: rowSelectionKey
      ? (row) => {
          //@ts-expect-error expect error
          return row[rowSelectionKey] as string;
        }
      : undefined,

    getRowCanExpand: (row) => {
      if (!expandableKey) return true;
      // @ts-expect-error expect error
      return !!row.original[expandableKey];
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: setSortingState,
    getSortedRowModel: getSortedRowModel(),
    getSubRows: (row) => {
      //@ts-expect-error expect error
      return row.subRows as TData[];
    },

    manualPagination: true,
    manualSorting: true,
  }) as CustomTable<TData>;
  const pageSizeOpts = pageSizeOptions.includes(defaultSize)
    ? pageSizeOptions
    : [defaultSize, ...pageSizeOptions].sort((a, b) => a - b);

  let content = <></>;
  switch (true) {
    case !!isLoading: {
      content = (
        <TableRow>
          <TableCell colSpan={tableColumns.length} className="h-12 text-center">
            <div className="flex justify-center">
              <Loader className="size-5 animate-spin" />
            </div>
          </TableCell>
        </TableRow>
      );
      break;
    }
    case table.getRowModel().rows.length === 0: {
      content = (
        <TableRow>
          <TableCell colSpan={tableColumns.length} className="h-12 text-center">
            No results.
          </TableCell>
        </TableRow>
      );
      break;
    }
    case table.getRowModel().rows.length > 0: {
      content = (
        <>
          {table.getRowModel().rows.map((row) => (
            <Fragment key={row.id}>
              <TableRow
                data-state={row.getIsSelected() && "selected"}
                className={cn(
                  (href || onRowClick) && "cursor-pointer",
                  table.options.meta?.getRowClassName?.(row)
                )}
                onMouseEnter={() => {
                  if (href) {
                    router.prefetch(href);
                  }
                }}
                onFocus={() => {
                  if (href) {
                    router.prefetch(href);
                  }
                }}
                onClick={() => {
                  if (href) {
                    // replace {} with variable
                    const hrefUrl = href.replace(/{\w+}/g, (match) => {
                      const key = match.slice(1, -1); // remove curly brackets
                      return (
                        (row.original[
                          key as keyof typeof row.original
                        ] as string) ?? "undefined"
                      );
                    });
                    router.push(hrefUrl);
                    return;
                  }
                  onRowClick?.({ ...row.original });
                }}
              >
                {row.getVisibleCells().map((cell) => {
                  const meta = cell.column.columnDef.meta as
                    | ColumnMeta<TData>
                    | undefined;
                  const cellMeta = meta?.getCellContext
                    ? meta.getCellContext(cell)
                    : undefined;
                  if (cellMeta?.skipRender) return undefined;
                  return (
                    <TableCell
                      key={cell.id}
                      colSpan={cellMeta?.colSpan}
                      rowSpan={
                        row.getIsExpanded() && cell.column.getIndex() === 0
                          ? rowSpanWhenExpanded
                          : undefined
                      }
                      className={cn(cellMeta?.className)}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
              {row.getIsExpanded() && renderExpandedRow?.(row)}
            </Fragment>
          ))}
        </>
      );
    }
  }

  return (
    <div className="rounded-md">
      {enablePagination && (
        <Paginate
          table={table}
          pageSizeOptions={pageSizeOpts}
          totalCount={totalCount}
        />
      )}
      <div className="w-full overflow-x-auto">
        <TTable className="border border-accent">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  if (header.id === "select") {
                    return (
                      <DataTableSelectColumnHeader
                        key={header.id}
                        column={header.column}
                        header={header}
                        className={tableHeadClassName}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </DataTableSelectColumnHeader>
                    );
                  }
                  return (
                    <DataTableColumnHeader
                      key={header.id}
                      column={header.column}
                      header={header}
                      className={tableHeadClassName}
                    />
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {renderFirstRow?.()}
            {content}
          </TableBody>
        </TTable>
      </div>
    </div>
  );
}
