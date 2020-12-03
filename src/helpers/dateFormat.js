export const getMonth = (date) => {
  return date.toLocaleString("en-us", { month: "long" });
};

export const getDay = (date) => {
  return date.getDay();
};

export const getYear = (date) => {
  return date.getFullYear();
};

export const customDateformatted = (d) => {
  const date = new Date(d);
  const day = getDay(date);
  const month = getMonth(date);
  const year = getYear(date);
  return `${month} ${day}, ${year}`;
};
