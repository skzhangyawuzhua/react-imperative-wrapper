import React, { ReactElement } from "react";
import { createRoot } from "react-dom/client";

type refType = {
  close: (arg: any) => void;
};

export function RenderEl(El: ReactElement, resolve: (val: any) => void) {
  const container = document.createElement("div");

  container.setAttribute("id", "imperative-component");

  document.body.append(container);

  const root = createRoot(container);

  const close = (arg: any) => {
    resolve(arg);
    root.unmount();
  };

  const ImperativeWrap = React.forwardRef<refType>((_, ref) => {
    return React.cloneElement(El, { close });
  });

  root.render(<ImperativeWrap />);
}

export const WaitableWrapper = (El: ReactElement) => {
  return new Promise(resolve => {
    RenderEl(El, resolve);
  });
};
