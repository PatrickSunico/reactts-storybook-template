// import authHeader from "../core/auth/authHeader";
import instance from "../core/axios";

const API_URL = "http://localhost:8000/posts/";

const getAllPosts = () => {
  return instance.get(API_URL);
};

const deleteData = (id) => {
  return instance.delete(API_URL + `${id}`);
};

const DataService = {
  getAllPosts,
  deleteData,
};

export default DataService;
