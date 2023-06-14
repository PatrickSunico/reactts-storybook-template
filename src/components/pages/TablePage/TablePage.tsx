import { useEffect, useState, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import DataService from "../../../core/services/data.service";
import { TableOrganism } from "../../organisms/organismIndex";
// Recoil
import {
  tableAtomState,
  tableColumnAtomState,
} from "../../../core/recoil/atomState/tableState";

import { Button } from "../../atoms/atomIndex";

// Types
import { ServiceType } from "../../../types/Table/TableTypes";
import { TableDataProps } from "../../../types/Table/TableTypes";
// import { columnsState } from "../POCTable/SearchPOCTable";

export const TablePage = (cfsType: ServiceType) => {
  // Main Atom State
  const [dataSource, setDataSource] = useRecoilState(tableAtomState);
  // Column Atom
  const [tableColumns, setTableColumns] = useRecoilState(tableColumnAtomState);

  // Skeleton Loader
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    const fetchData = async ({ cfsType }: ServiceType) => {
      try {
        setSkeletonLoading(true);
        const response = await DataService.getAllData(cfsType);
        setDataSource({ data: response });
        setSkeletonLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    fetchData(cfsType);
  }, [cfsType, setDataSource]);

  // Passed functions
  const colorizedRow = (_: unknown, index: number) => {
    return index % 2 === 0
      ? "table-row-odd no-hover"
      : "table-row-even no-hover";
  };

  const renderStatus = (status: boolean): JSX.Element => {
    return <>{status ? "Done" : "In Progress"}</>;
  };

  const renderStatusButton = (id: number, rowProp: TableDataProps) => {
    return dataSource?.data.length ?? 0 >= 1 ? (
      <Button
        variant="btn-accept"
        className="mx-2 my-2"
        onClick={() => markAsDone(id, rowProp.CFSResponderId)}
      >
        Mark as Done
      </Button>
    ) : (
      <></>
    );
  };

  const renderDeleteButton = (id: number, rowProp: TableDataProps) => {
    return dataSource?.data.length ?? 0 >= 1 ? (
      <Button
        variant="btn-danger"
        className="mx-2 my-2"
        onClick={() => closeCFS(id, rowProp.CFSResponderId)}
      >
        Close CFS
      </Button>
    ) : (
      <></>
    );
  };

  // Sort
  const renderSort = (a: TableDataProps, b: TableDataProps) => {
    return a.id - b.id;
  };

  // Internal Methods
  const markAsDone = (key: React.Key, CFSResponderId: number) => {
    setDataSource((prevDataSource) => ({
      // Spread Data source to retreive data and add TableDataProps as the Type
      ...(prevDataSource as { data: TableDataProps[] }),
      // Map the data to get the row
      data: (prevDataSource as { data: TableDataProps[] }).data.map((row) =>
        // Apply the status if the responderId mathces the selected Responder Id
        row.CFSResponderId === CFSResponderId ? { ...row, status: true } : row,
      ),
    }));
  };

  return (
    <TableOrganism
      dataSource={dataSource}
      loading={skeletonLoading}
      columns={tableColumns}
    />
  );
};
