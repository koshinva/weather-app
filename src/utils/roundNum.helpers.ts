export const roundNum = (num: number, type?: 'ceil' | 'floor'): number => {
  if (type === 'ceil') return Math.ceil(num);
  if (type === 'floor') return Math.floor(num);
  return Math.round(num);
};
