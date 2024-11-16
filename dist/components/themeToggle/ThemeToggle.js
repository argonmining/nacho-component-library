import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useDarkMode as r } from "../../hooks/darkMode.js";
const c = () => {
  const { isDarkMode: a, toggleDarkMode: o } = r();
  return /* @__PURE__ */ s("div", { className: "dark-mode-toggle sidebar-dark-mode-toggle", children: [
    /* @__PURE__ */ e("span", { className: "dark-mode-label", children: a ? "Dark" : "Light" }),
    /* @__PURE__ */ s("label", { className: "switch", children: [
      /* @__PURE__ */ e(
        "input",
        {
          type: "checkbox",
          checked: a,
          onChange: o
        }
      ),
      /* @__PURE__ */ e("span", { className: "slider" })
    ] })
  ] });
};
export {
  c as ThemeToggle
};
