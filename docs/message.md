## 提示

使用方式：

```html
<div id="message"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayMessage.js-->
<script src="PayMessage.js"></script>
```

```js
const message = new PayMessage({
  element: document.getElementById('message'),
  type: 'activity',
  title: '活动',
  content: '文字说明-最多展示2行',
});
```

使用模块管理器:

```js
import { PayMessage } from 'alipay-payui';
const message = new PayMessage(options);
```

## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.payMessage')` | 加载提示组件的容器
type  | `activity` | 运营信息类型,可配置为`discount`或者`activity`
title  | - | 运营信息标题文案描述
content  | - | 运营信息内容文案描述,最多可显示2行


## API

+ `PayMessage.version`: 静态属性, 返回 PayMessage 的版本号
