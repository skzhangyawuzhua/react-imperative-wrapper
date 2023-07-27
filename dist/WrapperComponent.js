// src/WrapperComponent.tsx
import React, {
  useImperativeHandle,
  useState
} from "react";
import { createRoot } from "react-dom/client";
function RenderEl(El, resolve) {
  const container = document.createElement("div");
  container.id = "lib-container";
  document.body.append(container);
  const root = createRoot(container);
  const close = (arg) => {
    resolve(arg);
    root.unmount();
  };
  const Wrapper = React.forwardRef((_, ref) => {
    const [elToRender, setData] = useState(El);
    const onClose = (arg) => {
      resolve(arg);
      root.unmount();
    };
    useImperativeHandle(ref, () => {
      return {
        close: onClose
      };
    });
    return React.cloneElement(elToRender, {});
  });
  const wrapperRef = React.createRef();
  root.render(/* @__PURE__ */ React.createElement(Wrapper, { ref: wrapperRef }));
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
