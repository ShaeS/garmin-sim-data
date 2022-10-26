const convertToYards = (value) => {
  return value * 1.09361;
};

const convertToKMH = (value) => {
  return value * 3.6;
};

const convertToDate = (value) => {
  return new Date(value).toLocaleString("en-US");
};

export { convertToYards, convertToKMH, convertToDate };
