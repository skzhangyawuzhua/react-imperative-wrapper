import o from"react";import{createRoot as p}from"react-dom/client";function i(e,t){let n=document.createElement("div");n.setAttribute("id","imperative-component"),document.body.append(n);let r=p(n),c=a=>{t(a),r.unmount()},m=o.forwardRef((a,d)=>o.cloneElement(e,{close:c}));r.render(o.createElement(m,null))}var u=e=>new Promise(t=>{i(e,t)});export{i as RenderEl,u as WaitableWrapper};
