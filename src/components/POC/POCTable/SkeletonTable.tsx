import React, { useState, useEffect } from "react";
import { Table, Skeleton } from "antd";
import "./POCTable.css";

interface DataItem {
  key: string;
  name: string;
  date: string;
}

const fetchData = (): Promise<DataItem[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { key: "1", name: "John Doe", date: "2023-06-10" },
        { key: "2", name: "Jane Smith", date: "2023-06-11" },
        { key: "3", name: "Tom Johnson", date: "2023-06-12" },
      ]);
    }, 2000);
  });
};

const SkeletonTable: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      const result = await fetchData();
      setData(result);
      setLoading(false);
    };

    fetchDataAsync();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
  ];

  return (
    <Table<DataItem>
      dataSource={data}
      columns={columns}
      pagination={false}
      rowKey="key"
      loading={loading}
      rowClassName={() => "skeleton-row"}
    />
  );
};

export default SkeletonTable;
