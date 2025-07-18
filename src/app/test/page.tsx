"use client";

import {
  useReactTable,
  ColumnDef,
  getCoreRowModel,
} from "@tanstack/react-table";

type Row = {
  id: number;
  column1: string;
  column2: string;
  column3: string;
};

export default function Page() {
  const columns: ColumnDef<Row>[] = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "column1", header: "Column 1" },
    { accessorKey: "column2", header: "Column 2" },
    { accessorKey: "column3", header: "Column 3" },
  ];
  const data: Row[] = [
    { id: 1, column1: "A", column2: "B", column3: "C" },
    { id: 2, column1: "D", column2: "E", column3: "F" },
  ];
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table>
      <thead>
        <tr>
          {table
            .getHeaderGroups()
            .map((headerGroup) =>
              headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder ? null : header.column.id}
                </th>
              ))
            )}
        </tr>
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>{cell.renderValue() as React.ReactNode}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
