import { rest } from "msw";
// import { setupServer } from "msw/node";

import pendingCFS from "./json/pendingCFS.json";
import activeCFS from "./json/activeCFS.json";

const getPendingCFS = rest.get("/NJM/rest/cfs/pendingCFS", (_, res, ctx) => {
  return res(ctx.json(pendingCFS));
});

const getActiveCFS = rest.get("/NJM/rest/cfs/getActiveCFS", (_, res, ctx) => {
  return res(ctx.json(activeCFS));
});

export const handlers = [getPendingCFS, getActiveCFS];
