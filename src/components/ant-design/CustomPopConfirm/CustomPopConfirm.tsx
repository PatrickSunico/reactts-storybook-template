// React Libraries
import { memo, useState } from "react";

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
    // console.log(record?.status);

    const [disabled, setDisabled] = useState(record?.status);
    const [dataSource, setDataSource] = useRecoilState(dataGridAtomState);

    // Popconfirm
    const handleAction = (record?: DataSourceItem) => {
      if (disabled) {
        return;
      }
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
      setDisabled(true);

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
        disabled={disabled}
        okButtonProps={{ className: "pop-confirm-button", danger, disabled }}
      >
<<<<<<< HEAD
        <Button type={type} className="px-2 btn-danger" danger={danger}>
=======
        <Button type={type} danger={danger} disabled={disabled}>
>>>>>>> 40e1311f8c8f3ea79f39bda5d6913e0307cf11cf
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
