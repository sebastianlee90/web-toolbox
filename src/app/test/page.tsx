"use client";

import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";

export default function BackgroundRippleEffectDemo() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect />
      <div className="mt-60 w-full">
        <h2 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-800 md:text-4xl lg:text-7xl dark:text-neutral-100">
          Interactive Background Boxes Ripple Effect
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          Hover over the boxes above and click.To be used on backgrounds of hero
          sections OR Call to Action sections. I beg you don&apos;t use it
          everywhere.
        </p>
      </div>
    </div>
  );
}

// import {
//   ColumnDef,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table";

// type Row = {
//   id: number;
//   column1: string;
//   column2: string;
//   column3: string;
// };

// export default function Page() {
//   const columns: ColumnDef<Row>[] = [
//     { accessorKey: "id", header: "ID" },
//     { accessorKey: "column1", header: "Column 1" },
//     { accessorKey: "column2", header: "Column 2" },
//     { accessorKey: "column3", header: "Column 3" },
//   ];
//   const data: Row[] = [
//     { id: 1, column1: "A", column2: "B", column3: "C" },
//     { id: 2, column1: "D", column2: "E", column3: "F" },
//   ];
//   const table = useReactTable({
//     columns,
//     data,
//     getCoreRowModel: getCoreRowModel(),
//   });

//   return (
//     <table>
//       <thead>
//         <tr>
//           {table
//             .getHeaderGroups()
//             .map((headerGroup) =>
//               headerGroup.headers.map((header) => (
//                 <th key={header.id}>
//                   {header.isPlaceholder ? null : header.column.id}
//                 </th>
//               ))
//             )}
//         </tr>
//       </thead>
//       <tbody>
//         {table.getRowModel().rows.map((row) => (
//           <tr key={row.id}>
//             {row.getVisibleCells().map((cell) => (
//               <td key={cell.id}>{cell.renderValue() as React.ReactNode}</td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default function Page() {
//   const data = [
//     { id: 1, column1: "A", column2: "B", column3: "C" },
//     { id: 2, column1: "D", column2: "E", column3: "F" },
//     { id: 3, column1: "G", column2: "H", column3: "I" },
//     { id: 4, column1: "J", column2: "K", column3: "L" },
//     { id: 5, column1: "M", column2: "N", column3: "O" },
//     { id: 6, column1: "P", column2: "Q", column3: "R" },
//   ];
//   const emptyData: Row[] = [];

//   return (
//     <Suspense>
//       <div className="flex flex-col gap-4 mt-4">
//         <h1 className="text-2xl">PhIS Table</h1>
//         <ImportTable
//           data={data}
//           columns={[
//             { accessorKey: "id", header: "ID", enableSorting: false },
//             {
//               accessorKey: "column1",
//               header: "Column 1",
//               enableSorting: false,
//             },
//             {
//               accessorKey: "column2",
//               header: "Column 2",
//               enableSorting: false,
//             },
//             {
//               accessorKey: "column3",
//               header: "Column 3",
//               enableSorting: false,
//             },
//           ]}
//         />
//         <h1 className="text-2xl">Self Made Table</h1>
//         <Table
//           data={emptyData}
//           // columns={[
//           //   { accessorKey: "id", header: "ID" },
//           //   { accessorKey: "column1", header: "Column 1" },
//           //   { accessorKey: "column2", header: "Column 2" },
//           //   { accessorKey: "column3", header: "Column 3" },
//           // ]}
//         />
//       </div>
//     </Suspense>
//   );
// }

// import { AuroraBackground } from "@/components/ui/aurora-background";
// import { motion } from "motion/react";

// export default function Page() {
//   return (
//     <div className="min-h-screen w-full overflow-hidden">
//       <AuroraBackground>
//         <motion.div
//           initial={{ opacity: 0.0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="relative flex flex-col gap-4 items-center justify-center px-4"
//         >
//           <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
//             Background lights are cool you know.
//           </div>
//           <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
//             And this, is chemical burn.
//           </div>
//           <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
//             Debug now
//           </button>
//         </motion.div>
//       </AuroraBackground>
//     </div>
//   );
// }
