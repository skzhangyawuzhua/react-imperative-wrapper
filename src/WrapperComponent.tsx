import React, {
  ReactElement,
  ReactNode,
  useImperativeHandle,
  useReducer,
  useState,
} from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

type WrapperHandler = {
  close: (arg: any) => void;
};
// const Fn = () => {
//   function reducer(state: s, action: t) {
//     switch (action.type) {
//       case "increment":
//         return { count: state.count + 1 };
//       case "decrement":
//         return { count: state.count - 1 };
//       default:
//         throw new Error();
//     }
//   }

//   const [state, dispatch] = useReducer(reducer, { count: 2 });

//   return (
//     <div onClick={() => dispatch({ type: "increment" })}>{state.count}</div>
//   );
// };

export function RenderEl(El: ReactElement, resolve: (val: any) => void) {
  const container = document.createElement("div");

  container.id = "lib-container";

  document.body.append(container);

  const root = createRoot(container);

  const close = (arg: any) => {
    resolve(arg);
    root.unmount();
  };

  // const ElCom = React.cloneElement(<El />, {
  //   close,
  // });

  // const El2 = El.bind(this);

  // console.log(El.prototype);

  const Wrapper = React.forwardRef<WrapperHandler>((_, ref) => {
    const [elToRender, setData] = useState(El);

    const onClose = (arg: any) => {
      resolve(arg);
      root.unmount();
    };

    useImperativeHandle(ref, () => {
      return {
        close: onClose,
      };
    });

    //@ts-ignore
    return React.cloneElement(elToRender, {});
  });

  const wrapperRef = React.createRef<WrapperHandler>();

  //@ts-ignore
  // ReactDOM.render(<Wrapper ref={wrapperRef} />, container);

  // root.render(<Wrapper ref={wrapperRef} />);
  root.render(<Wrapper ref={wrapperRef} />);
}

// El: React.FC
export const WaitableWrapper = (El: ReactElement) => {
  return new Promise(resolve => {
    RenderEl(El, resolve);
  });
};
