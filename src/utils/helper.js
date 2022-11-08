// try to return a substantive instead of a verb as a search word
export const searchImage = (title) => {
  const titleWordOne = title.split(" ")[0];
  const titleWordTwo = title.split(" ")[1];
  return titleWordTwo === undefined ? titleWordOne : titleWordTwo;
};
