import { TableDataProps } from "../../components/organisms/TableOrganism/TableOrganism";

export const formatDataToObject = (data: []): TableDataProps[] => {
  return data.map((item: number, index: number) => ({
    key: index + 1,
    id: index + 1,
    CFSResponderId: item,
  }));
};
