// React Libraries
import { Popconfirm } from "antd";

// Types
import { DataSourceItem } from "../../types/DataGridTypes";

// Custom Atomic CFS
import { Button } from "antd";

interface DataGridPopConfirmType {
  title: string;
  record: DataSourceItem;
}

export const DataGridPopConfirm = ({
  title,
  record,
}: DataGridPopConfirmType) => {
  const handleDelete = (record: DataSourceItem) => {
    console.log(record);
  };

  return (
    <Popconfirm
      title={title}
      onConfirm={() => handleDelete(record)}
      okButtonProps={{ className: "pop-confirm-button", danger: true }}
    >
      {/* <Button className="px-2 py-1 btn-danger">Close CFS </Button> */}
      <Button type="primary" className="px-2 py-1 btn-danger" danger>
        Close CFS
      </Button>
    </Popconfirm>
  );
};
