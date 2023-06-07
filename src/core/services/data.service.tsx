// import authHeader from "../core/auth/authHeader";
import { formatDataToObject } from "../utils/dataMapper";
import { TableProps } from "../../components/organisms/TableOrganism/TableOrganism";

import instance from "../../core/services/axios";

const API_URL = "/NJM/rest/cfs/";

export interface serviceType {
  type: "pendingCFS" | "activeCFS";
}

export const getAllData = async (type: "pendingCFS" | "activeCFS") => {
  const response = await instance.get(`${API_URL}${type}`);
  const result: [] = response.data;
  const formattedArray: TableProps[] = formatDataToObject(result);
  return formattedArray;
};

const deleteData = (id: number) => {
  return instance.delete(API_URL + `${id}`);
};

const DataService = {
  getAllData,
  deleteData,
};

export default DataService;
