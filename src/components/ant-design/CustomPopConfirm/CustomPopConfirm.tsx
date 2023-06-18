// React Libraries
import { memo } from "react";

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

export const CustomPopConfirm = memo(
  ({ title, record, buttonMsg, danger, type }: CustomPopConfirmType) => {
    const [dataSource, setDataSource] = useRecoilState(dataGridAtomState);
    const handleAction = (record?: DataSourceItem) => {
      /**
       * Updates the CloseCFS Status instead
       */
      const updatedStatus = dataSource.map((item) => {
        if (item.id === record?.id) {
          return { ...item, status: !item.status };
        }
        return item;
      });

      setDataSource(updatedStatus);
      /**
       * Delete Row Method
       */
      // const updatedDataSource = dataSource.filter(
      //   (item) => item.id !== record?.id,
      // );
      // setDataSource(updatedDataSource);
    };

    return (
      <Popconfirm
        title={title}
        onConfirm={() => handleAction(record)}
        okButtonProps={{ className: "pop-confirm-button", danger }}
      >
        <Button type={type} className="px-2 py-1 btn-danger" danger={danger}>
          {buttonMsg}
        </Button>
      </Popconfirm>
    );
  },

  (prevProps, nextProps) => {
    if (prevProps.record?.status === nextProps.record?.status) {
      return true;
    }
    return false;
  },
);
