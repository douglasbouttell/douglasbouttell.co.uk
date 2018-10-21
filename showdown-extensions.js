export const copyright = {
  type: 'lang',
  regex: /\([cC]\)/g,
  replace: '&copy;'
};

export const registered = {
  type: 'lang',
  regex: /\([rR]\)/g,
  replace: '&reg;'
};

export const trademark = {
  type: 'lang',
  regex: /\([tT][mM]\)/g,
  replace: '&trade;'
};

export const plusminus = {
  type: 'lang',
  regex: /\+-/g,
  replace: '&pm;'
};