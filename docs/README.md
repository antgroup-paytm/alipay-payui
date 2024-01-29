# 快速上手
## 如何安装

### 方式一 通过 npm 安装

```bash
# Using npm
npm i alipay-payui --save

# Using yarn
yarn add alipay-payui
```

### 方式二 通过链接引用

```html
<!--键盘-->
<script src="https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayKeyboard.js"></script>
```

## 快速开始

```html
<div id="keyboard"></div>
<script src="PayKeyboard.js"></script>
```

```js
const kb = new PayKeyboard({
  element: document.getElementById('keyboard'),
  tip: '安全支付保障中',
  arrow: true
});
```

使用模块管理器:

```js
import { PayKeyboard } from 'alipay-payui';
const kb = new PayKeyboard(options);
```
