// Passed functions
// export const colorizedRow = (_: unknown, index: number) => {
//   return index % 2 === 0 ? "table-row-odd no-hover" : "table-row-even no-hover";
// };

// const renderStatus = (status: boolean): JSX.Element => {
//   return <>{status ? "Done" : "In Progress"}</>;
// };

// export const renderStatusButton = (id: number, rowProp: TableDataProps) => {
//   return dataSource?.data.length ?? 0 >= 1 ? (
//     <Button
//       variant="btn-accept"
//       className="mx-2 my-2"
//       onClick={() => markAsDone(id, rowProp.CFSResponderId)}
//     >
//       Mark as Done
//     </Button>
//   ) : (
//     <></>
//   );
// };

// export const renderDeleteButton = (id: number, rowProp: TableDataProps) => {
//   return dataSource?.data.length ?? 0 >= 1 ? (
//     <Button
//       variant="btn-danger"
//       className="mx-2 my-2"
//       onClick={() => closeCFS(id, rowProp.CFSResponderId)}
//     >
//       Close CFS
//     </Button>
//   ) : (
//     <></>
//   );
// };

// // Sort
// export const renderSort = (a: TableDataProps, b: TableDataProps) => {
//   return a.id - b.id;
// };

// // Internal Methods
// export const markAsDone = (key: React.Key, CFSResponderId: number) => {
//   setDataSource((prevDataSource) => ({
//     // Spread Data source to retreive data and add TableDataProps as the Type
//     ...(prevDataSource as { data: TableDataProps[] }),
//     // Map the data to get the row
//     data: (prevDataSource as { data: TableDataProps[] }).data.map((row) =>
//       // Apply the status if the responderId mathces the selected Responder Id
//       row.CFSResponderId === CFSResponderId ? { ...row, status: true } : row,
//     ),
//   }));
// };

// export const closeCFS = (key: React.Key, CFSResponderId: number) => {
//   setDataSource((prevDataSource) => ({
//     ...(prevDataSource as { data: TableDataProps[] }),
//     data: (prevDataSource as { data: TableDataProps[] }).data.filter(
//       (row) => row.CFSResponderId !== CFSResponderId,
//     ),
//   }));
// };
