import { Badge } from "@/components/ui/badge";
import { ColumnDef } from "@tanstack/react-table";

export type validatedTable = {
  uuid: string;
  valid: boolean;
  version: string;
};

export const columns: ColumnDef<validatedTable>[] = [
  { header: "UUID", accessorKey: "uuid" },
  {
    header: "Valid",
    accessorKey: "valid",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          {row.original.valid ? (
            <Badge variant="success">Valid</Badge>
          ) : (
            <Badge variant="destructive">Invalid</Badge>
          )}
        </div>
      );
    },
  },
  {
    header: "Version",
    accessorKey: "version",
    cell: ({ row }) => {
      return <div className="text-center">{row.original.version}</div>;
    },
  },
];
