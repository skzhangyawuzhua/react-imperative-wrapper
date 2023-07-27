# react-imperative-wrapper

### 指令式调用React组件
    在希望弹窗登录、验证等场景时 如果使用声明组件<Login></Login>的方式，
    很可能需要 1.额外的state: 控制组件的显示状态 2.组件间通信: 父组件获取子组件的验证结果等业务逻辑结果并加以处理
    react-imperative-wrapper 可以直接使用 await 等待子组件的业务逻辑结果 保证了代码逻辑的清晰

### 安装
    npm install react-imperative-wrapper
### 使用方法
```typescript
    import { WaitableWrapper } from "react-imperative-wrapper";

    const res = await WaitableWrapper(<CustomComponent />);

    //CustomComponent 中只需要调用 props.close('任意结果') 即可返回结果并销毁

```