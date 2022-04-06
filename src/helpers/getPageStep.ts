type Position = {
  startPosition: number;
  endPosition: number;
};

export const getPageStep = (
  currentPage: number,
  pageLimit: number
): Position => {
  const activePageIndex = currentPage > 1 ? currentPage : 1;

  const startPosition = (activePageIndex - 1) * pageLimit;
  const endPosition = startPosition + pageLimit;

  return {
    startPosition,
    endPosition
  };
};
