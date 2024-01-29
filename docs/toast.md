## 提示

使用方式：

```html
<div id="toast"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayToast.js-->
<script src="PayToast.js"></script>
```

```js
const toast = new PayToast({
  element: document.getElementById('toast'),
  tips: '付款金额不能超过100元',
  offset: '150px',
  duration: 3000
});
```

使用模块管理器:

```js
import { PayToast } from 'alipay-payui';
const toast = new PayToast(options);
```

## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.toast')` | 加载提示组件的容器
tips | - | 设置提示的文案描述
offset | - | 设置组件顶部的距离, 默认居中
duration | `3000` | 设置组件自动消失的时间


## API

+ `PayToast.version`: 静态属性, 返回 PayToast 的版本号

+ `toast.show(content?: string)`: 显示提示，支持自定义，未传参数按 options.tips 展示，3秒后自动消失

+ `toast.setZIndex(zIndex: number | string)`: 设置提示组件的 z-index
