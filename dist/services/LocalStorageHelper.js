const e = (t) => t == null || localStorage.getItem(t) === null ? null : JSON.parse(localStorage.getItem(t)), l = (t, o) => {
  o == null && localStorage.removeItem(t), localStorage.setItem(t, JSON.stringify(o));
};
export {
  e as getLocalStorageItem,
  l as setLocalStorageItem
};
