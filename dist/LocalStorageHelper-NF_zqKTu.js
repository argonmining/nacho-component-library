const l = (t) => t == null || localStorage.getItem(t) === null ? null : JSON.parse(localStorage.getItem(t)), o = (t, e) => {
  e == null && localStorage.removeItem(t), localStorage.setItem(t, JSON.stringify(e));
};
export {
  l as g,
  o as s
};
