// Custom Atomic Components
import { Container } from "../../../../atoms/atomIndex";
import { CustomPopConfirm } from "../../../CustomPopConfirm/CustomPopConfirm";

export const DataGridHeader = () => {
  // const handleDelete = () => {};
  return (
    <Container className="flex flex-row justify-between px-4 py-4">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Close Active CFS
      </h2>

      <CustomPopConfirm
        title="Are you sure you want to close all"
        buttonMsg="Close All CFS"
        type="primary"
        danger={true}
      />
    </Container>
  );
};
