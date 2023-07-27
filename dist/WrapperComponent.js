// src/WrapperComponent.tsx
import React from "react";
import { createRoot } from "react-dom/client";
function RenderEl(El, resolve) {
  const container = document.createElement("div");
  container.setAttribute("id", "imperative-component");
  document.body.append(container);
  const root = createRoot(container);
  const close = (arg) => {
    resolve(arg);
    root.unmount();
  };
  const ImperativeWrap = React.forwardRef((_, ref) => {
    return React.cloneElement(El, { close });
  });
  root.render(/* @__PURE__ */ React.createElement(ImperativeWrap, null));
}
var WaitableWrapper = (El) => {
  return new Promise((resolve) => {
    RenderEl(El, resolve);
  });
};
export {
  RenderEl,
  WaitableWrapper
};
