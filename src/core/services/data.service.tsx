// import authHeader from "../core/auth/authHeader";
import { formatDataToObject } from "../utils/dataMapper";
import { TableDataProps } from "../../components/organisms/TableOrganism/TableOrganism";

import instance from "../../core/services/axios";

const API_URL = "/NJM/rest/cfs/";

export const getAllData = async (cfsType: string) => {
  const response = await instance.get(`${API_URL}${cfsType}`);
  const result: [] = response.data;
  const formattedArray: TableDataProps[] = formatDataToObject(result);
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
