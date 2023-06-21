import instance from "../../core/services/axios";

const API_URL = "/NJM/rest/cfs/";

// Store fetched data into state

export const getAllData = async (cfsType: string) => {
  const response = await instance.get(`${API_URL}${cfsType}`);
  const result: [] = response.data;
  return result;
};

export const deleteData = (id: number) => {
  return instance.delete(API_URL + `${id}`);
};

export const getDepartmentsList = async () => {
  const response = await instance.get(API_URL + "getDepartmentsList");
  return response.data;
};

export const getGroups = async () => {};
