import { makeSpace } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";

export function filterDisplayColumns<TData, TValue>({
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
  let tableColumns = columns ?? [];
  if (!columns && Array.isArray(data) && data.length > 0) {
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
  return tableColumns;
}
