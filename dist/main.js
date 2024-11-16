import e from "react";
import { u as o } from "./darkMode-ye1zL5RW.js";
import { D as d } from "./darkMode-ye1zL5RW.js";
import { M as g, u as i } from "./mobile-Ciwq4_VC.js";
import { g as k, s as u } from "./LocalStorageHelper-NF_zqKTu.js";
import { sendHeadRequest as b, sendRequest as f, simpleRequest as h } from "./services/index.js";
const m = () => {
  const { isDarkMode: a, toggleDarkMode: t } = o();
  return e.createElement(
    "div",
    { className: "dark-mode-toggle sidebar-dark-mode-toggle" },
    e.createElement("span", { className: "dark-mode-label" }, a ? "Dark" : "Light"),
    e.createElement(
      "label",
      { className: "switch" },
      e.createElement("input", { type: "checkbox", checked: a, onChange: t }),
      e.createElement("span", { className: "slider" })
    )
  );
};
export {
  d as DarkModeProvider,
  g as MobileProvider,
  m as ThemeToggle,
  k as getLocalStorageItem,
  b as sendHeadRequest,
  f as sendRequest,
  u as setLocalStorageItem,
  h as simpleRequest,
  o as useDarkMode,
  i as useMobile
};
