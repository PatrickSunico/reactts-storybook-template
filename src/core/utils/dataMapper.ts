export const formatDataToObject = (array: []) => {
  return array.map((item: number, index: number) => ({
    key: index + 1,
    id: index + 1,
    CFSResponderId: item,
  }));
};
