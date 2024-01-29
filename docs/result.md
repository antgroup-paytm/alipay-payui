## 支付结果

使用方式：

```html
<div id="result" class="result"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayResult.js-->
<script src="PayResult.js"></script>
```

```js
var result = new PayResult({
  element: document.getElementById('result'),
  status: 'success',
  title: '支付成功',
  content: '可在账单中查看支付详情',
  items: [{
    title: '付款方式',
    content: '支付宝',
  }, {
    title: '付款金额',
    content: '1.00',
  }],
  banner: {
    url: 'https://www.alipay.com/',
    src: 'https://gw.alipayobjects.com/mdn/rms_3dad6b/afts/img/A*3qJAR7mY0YEAAAAAAAAAAAAAARQnAQ'
  }
});
```

使用模块管理器:

```js
import { PayResult } from 'alipay-payui';
const result = new PayResult(options);
```
## 配置项 options

属性 | 类型 | 默认值 | 可选值 | 描述
----|----|----|-----|-------
element | - | - | `document.querySelector('.payResult')` | 加载商户信息的容器
status | String | `zhi` | success, pending, warning, error, zhi | 支付 logo 状态，可选 `success`, `pending`, `warning`, `error`, `zhi`
title | String | - | - | 支付结果名字标题说明,一般指定 支付成功，支付处理中，支付失败
content | String | - | - | 支付结果灰色文案，用于补充说明
items | Array | - | - | 支付结果说明,可为空，`item` 信息见下
banner | Object | - | - | 图片展示,可为空，`banner` 信息见下

## item options

属性 | 描述 | 类型
----|-------|-------
title | 列表左侧字段 | String
content | 列表右侧字段 | String

## banner options

属性 | 描述 | 类型
----|-------|-------
url | 图片跳转链接 | String
src | 图片路径 | String

## API

+ `PayResult.version`: 静态属性, 返回 PayResult 的版本号

+ `result.set(value: options)`: 设置支付结果信息
+ `result.hideItems()`: 隐藏列表
+ `result.hideBanner()`: 隐藏图片
 ```js
  result.set({
    status: 'error',
    title: '支付失败',
    content: ''
  });
```


