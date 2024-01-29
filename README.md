# Pay UI

`alipay-payui` 是一套适用于支付场景的组件库。

[官方站点](https://antgroup-paytm.github.io/alipay-payui/#/) |
[模板示例](https://antgroup-paytm.github.io/alipay-payui/iframedemo/index.html) |
[绑卡示例](https://antgroup-paytm.github.io/alipay-payui/carddemo/index.html) |
[组件示例](https://antgroup-paytm.github.io/alipay-payui/demo/index.html)

![官方站点](https://gw.alipayobjects.com/mdn/rms_b05656/afts/img/A*mFU_S5YB-eUAAAAAAAAAAABkARQnAQ)

## Badges

[![TNPM version][tnpm-image]][tnpm-url]
[![TNPM downloads][tnpm-downloads-image]][tnpm-url]


[tnpm-image]: https://npm.alibaba-inc.com/badge/v/alipay-payui.svg
[tnpm-url]: https://npm.alibaba-inc.com/package/alipay-payui
[tnpm-downloads-image]: https://npm.alibaba-inc.com/badge/d/alipay-payui.svg

--------------------

## Badges

[![TNPM version][tnpm-image]][tnpm-url]
[![TNPM downloads][tnpm-downloads-image]][tnpm-url]

[tnpm-image]: https://npm.alibaba-inc.com/badge/v/alipay-payui.svg
[tnpm-url]: https://npm.alibaba-inc.com/package/alipay-payui
[tnpm-downloads-image]: https://npm.alibaba-inc.com/badge/d/alipay-payui.svg

---

## 快速上手

### 如何安装

#### 方式一 通过 npm 安装

```bash
# Using npm
npm i alipay-payui --save

# Using yarn
yarn add alipay-payui
```

#### 方式二 通过链接引用
- 2.0组件暂不支持该用法
```html
<!--键盘-->
<script src="https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayKeyboard.js"></script>
```

### 快速开始

```html
<div id="keyboard"></div>
<script src="PayKeyboard.js"></script>
```

```js
const kb = new PayKeyboard({
    element: document.getElementById('keyboard'),
    tip: '安全支付保障中',
    arrow: true,
});
```

使用模块管理器:

```js
import { PayKeyboard } from 'alipay-payui';
const kb = new PayKeyboard(options);
```

## 浏览器兼容

-   IOS > 8
-   Android > 4

## 相关二维码

<img src="https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*Zi-ZQrOBlUoAAAAAAAAAAAAAARQnAQ" width="500px" />

## 钉钉咨询群

<img src="https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*t5CmTYMKyJsAAAAAAAAAAAAAARQnAQ" width="200px" />

<img src="https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*pkizRZVVww0AAAAAAAAAAAAAARQnAQ" width="200px" />
