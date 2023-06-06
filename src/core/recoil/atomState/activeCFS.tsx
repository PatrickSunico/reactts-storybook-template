import { atom } from "recoil";

/**
 * @title Atoms
 * @desc Initial State and name
 */
export const closeActiveCFSState = atom({
  key: "closeActiveCFS",
  default: [],
});

export const rejectActiveCFSState = atom({
  key: "rejectActiveCFS",
  default: [],
});
