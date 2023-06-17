import { Popconfirm } from "antd";

// Types
import { DataSourceItem } from "../Datagrid/types/DataGridTypes";

// Custom Atomic CFS
import { Button } from "antd";

interface CustomPopConfirmType {
  title?: string;
  record?: DataSourceItem;
}

export const CustomPopConfirm = ({ title, record }: CustomPopConfirmType) => {
  const handleDelete = (record?: DataSourceItem) => {
    // console.log(record);
  };

  return (
    <Popconfirm
      title={title}
      onConfirm={() => handleDelete(record)}
      okButtonProps={{ className: "pop-confirm-button", danger: true }}
    >
      <Button type="primary" className="px-2 py-1 btn-danger" danger>
        Close CFS
      </Button>
    </Popconfirm>
  );
};
