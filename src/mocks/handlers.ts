import { rest } from "msw";
// import { setupServer } from "msw/node";

import pendingCFS from "./json/pendingCFS.json";
import activeCFS from "./json/activeCFS.json";
import departmentsList from "./json/departmentsList.json";
import groupsList from "./json//groupList.json";

const getPendingCFS = rest.get("/NJM/rest/cfs/pendingCFS", (_, res, ctx) => {
  return res(ctx.json(pendingCFS));
});

const getActiveCFS = rest.get("/NJM/rest/cfs/getActiveCFS", (_, res, ctx) => {
  return res(ctx.json(activeCFS));
});

const getDepartmentsList = rest.get(
  "/NJM/rest/cfs/getDepartmentsList",
  (_, res, ctx) => {
    return res(ctx.json(departmentsList));
  },
);

const getGroupsLists = rest.get("/NJM/rest/cfs/groupsList", (_, res, ctx) => {
  return res(ctx.json(groupsList));
});

// const handleCFSOperation = rest.get(`/NJM/rest/cfs/${operation}/?respId=${id}`);
export const handlers = [
  getPendingCFS,
  getActiveCFS,
  getDepartmentsList,
  getGroupsLists,
];
