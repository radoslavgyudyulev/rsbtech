export const localStorageGet = (value) => {
  return window.localStorage.getItem(value);
};

export const localStorageSet = (key, value) => {
  return window.localStorage.setItem(key, value);
};
