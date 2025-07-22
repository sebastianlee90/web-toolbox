import {
  Table as TTable,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { filterDisplayColumns } from "./hooks";

export function Table<TData, TValue>({
  columns,
  data,
  excludeColumns,
  excludeSorting,
}: {
  columns?: ColumnDef<TData, TValue>[];
  data: TData[];
  excludeColumns?: string[];
  excludeSorting?: string[];
}) {
  const table = useReactTable({
    columns: filterDisplayColumns({
      columns,
      data,
      excludeColumns,
      excludeSorting,
    }),
    data,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),

    // Additional Row Models : https://tanstack.com/table/latest/docs/guide/row-models
    // onSortingChange: setSortingState,
    // getExpandedRowModel: getExpandedRowModel(),
    // getFacetedMinMaxValues: getFacetedMinMaxValues(),
    // getFacetedRowModel: getFacetedRowModel(),
    // getFacetedUniqueValues: getFacetedUniqueValues(),
    // getFilteredRowModel: getFilteredRowModel(),
    // getGroupedRowModel: getGroupedRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <TTable>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} className="text-center font-semibold">
            {headerGroup.headers.map((header) => (
              <TableCell key={header.id}>
                <span className="capitalize">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </span>
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length === 0 ? (
          <TableRow>
            <TableCell colSpan={columns?.length} className="h-12 text-center">
              No results.
            </TableCell>
          </TableRow>
        ) : (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        )}
      </TableBody>
    </TTable>
  );
}
