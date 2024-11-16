import n, { useContext as k, createContext as l, useState as m, useEffect as a } from "react";
import { g as s, s as M } from "./LocalStorageHelper-NF_zqKTu.js";
const d = l({
  isDarkMode: !1,
  toggleDarkMode: () => {
  }
}), D = ({ children: t }) => {
  const [e, r] = m(s("darkMode") ?? !1);
  a(() => {
    if (s("darkMode") === null) {
      const o = window.matchMedia("(prefers-color-scheme: dark)").matches;
      r(o);
    }
  }, []), a(() => {
    e ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode");
  }, [e]);
  const c = () => {
    r((o) => (M("darkMode", !o), !o));
  };
  return n.createElement(d.Provider, { value: { isDarkMode: e, toggleDarkMode: c } }, t);
}, f = () => {
  const { isDarkMode: t, toggleDarkMode: e } = k(d);
  return { isDarkMode: t, toggleDarkMode: e };
};
export {
  D,
  f as u
};
