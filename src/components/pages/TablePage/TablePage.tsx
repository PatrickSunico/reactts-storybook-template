import { useEffect } from "react";
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

export const TablePage = (cfsType: ServiceType) => {
  const [dataSource, setDataSource] = useRecoilState(tableAtomState);
  const tableColumns = useRecoilValue(tableColumnAtomState);

  useEffect(() => {
    const fetchData = async ({ cfsType }: ServiceType) => {
      try {
        const response = await DataService.getAllData(cfsType);
        setDataSource({ data: response });
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
    // return a[key] - b[key];
  };

  // Filter
  // const filter = () => {};

  // Internal Methods
  const markAsDone = (key: React.Key, CFSResponderId: number) => {
    setDataSource((prevDataSource) => ({
      ...(prevDataSource as { data: TableDataProps[] }),
      data: (prevDataSource as { data: TableDataProps[] }).data.map((row) =>
        row.CFSResponderId === CFSResponderId ? { ...row, status: true } : row,
      ),
    }));
  };

  const closeCFS = (key: React.Key, CFSResponderId: number) => {
    setDataSource((prevDataSource) => ({
      ...(prevDataSource as { data: TableDataProps[] }),
      data: (prevDataSource as { data: TableDataProps[] }).data.filter(
        (row) => row.CFSResponderId !== CFSResponderId,
      ),
    }));
  };

  return (
    <TableOrganism
      dataSource={dataSource}
      columns={tableColumns}
      renderSort={renderSort}
      colorizedRow={colorizedRow}
      renderStatus={renderStatus}
      renderActionButton={renderDeleteButton}
    />
  );
};
