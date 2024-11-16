import s, { useState as r, useEffect as d, createContext as l, useContext as a } from "react";
const i = l({
  isMobile: !1
}), u = ({ children: e }) => {
  const [n, o] = r(window.innerWidth <= 768);
  return d(() => {
    const t = () => {
      o(window.innerWidth <= 768);
    };
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), s.createElement(i.Provider, { value: { isMobile: n } }, e);
}, w = () => {
  const { isMobile: e } = a(i);
  return { isMobile: e };
};
export {
  u as M,
  w as u
};
