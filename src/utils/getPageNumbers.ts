const getPageNumbers = (totalPages: number): number[] => {
  const numbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    numbers.push(i);
  }

  return numbers;
};

export default getPageNumbers;
