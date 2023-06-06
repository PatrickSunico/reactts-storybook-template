// import authHeader from "../core/auth/authHeader";
import instance from "../../core/services/axios";

const API_URL = "/NJM/rest/cfs/";

export interface serviceType {
  type: "pendingCFS" | "activeCFS";
}

const getAllData = async (type: "pendingCFS" | "activeCFS") => {
  const result = await instance.get(`${API_URL}${type}`);
  // console.log(result.data);

  return result;

  // return {data, status, statusText} = result;
};

const deleteData = (id: number) => {
  return instance.delete(API_URL + `${id}`);
};

const DataService = {
  getAllData,
  deleteData,
};

export default DataService;
