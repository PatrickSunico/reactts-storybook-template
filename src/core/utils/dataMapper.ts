export const formatDataToObject = (array: []) => {
  const formattedArray = array.map((item: number, index: number) => ({
    key: index + 1,
    id: index + 1,
    status: false,
    CFSResponderId: item,
  }));

  // console.log(formattedArray);

  return formattedArray;
};
