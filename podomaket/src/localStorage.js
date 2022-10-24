export const localSet = (key, value) => {
  localStorage.setItem(key, value);
};

export const localGet = (key) => {
  return localStorage.getItem(key);
};
