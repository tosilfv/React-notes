export const searchImage = (title) => {
  const titleWordOne = title.split(" ")[0];
  const titleWordTwo = title.split(" ")[1];
  return titleWordTwo.length === 0 ? titleWordOne : titleWordTwo;
};
