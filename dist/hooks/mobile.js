import { jsx as r } from "react/jsx-runtime";
import { createContext as s, useState as d, useEffect as l, useContext as c } from "react";
const o = s({
  isMobile: !1
}), b = ({ children: e }) => {
  const [i, n] = d(window.innerWidth <= 768);
  return l(() => {
    const t = () => {
      n(window.innerWidth <= 768);
    };
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t);
  }, []), /* @__PURE__ */ r(o.Provider, { value: { isMobile: i }, children: e });
}, M = () => {
  const { isMobile: e } = c(o);
  return { isMobile: e };
};
export {
  b as MobileProvider,
  M as useMobile
};
