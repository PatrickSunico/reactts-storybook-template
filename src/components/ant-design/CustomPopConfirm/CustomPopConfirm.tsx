// Ant Design Components
import { Popconfirm } from "antd";

// Types
import { DataSourceItem } from "../Datagrid/types/DataGridTypes";

// Custom Atomic Design
import { Button } from "antd";
import type { ButtonProps } from "antd";
import type { ButtonType } from "antd/es/button";

// Recoil
import { useRecoilState } from "recoil";
import { dataGridAtomState } from "../../../core/recoil/atomState/DataGridTableState";

interface CustomPopConfirmType extends ButtonProps {
  title: string;
  record?: DataSourceItem;
  buttonMsg: string;
  // ant design props
  danger?: boolean;
  type?: ButtonType;
}

export const CustomPopConfirm = ({
  title,
  record,
  buttonMsg,
  danger,
  type,
}: CustomPopConfirmType) => {
  const handleDelete = (record?: DataSourceItem) => {
    console.log(record);
  };

  return (
    <Popconfirm
      title={title}
      onConfirm={() => handleDelete(record)}
      okButtonProps={{ className: "pop-confirm-button", danger }}
    >
      <Button type={type} className="px-2 py-1 btn-danger" danger={danger}>
        {buttonMsg}
      </Button>
    </Popconfirm>
  );
};
