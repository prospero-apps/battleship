const Ship = (type, length, x = 'A', y = 1, orientation = 'horizontal') => {
  const fields = [];
  const hits = [];

  for (let i = 0; i < length; i++) {
    hits.push(false);
  }

  const hit = (position) => {
    hits[position] = true;
  };

  const isSunk = () => hits.every((pos) => pos === true);

  return { type, length, orientation, x, y, fields, hits, hit, isSunk };
};

export default Ship;
