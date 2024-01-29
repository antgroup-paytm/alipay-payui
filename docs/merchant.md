## 商户信息

使用方式：

```html
<div id="merchant" class="merchant"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayMerchant.js-->
<script src="PayMerchant.js"></script>
```

```js
const merchant = new PayMerchant({
  element: document.getElementById('merchant'),
  avatar: 'https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*An0xQrA3snUAAAAAAAAAAABkARQnAQ',
  name: '勾庄蔬果直销店(*玉柱)',
  tag: '经常光顾'
});
```

使用模块管理器:

```js
import { PayMerchant } from 'alipay-payui';
const merchant = new PayMerchant(options);
```
## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.payMerchant')` | 加载商户信息的容器
avatar | - | 商户头像 40x40 像素
name | 商户 | 商户名称
tag | - | 商户标签，最长宽度 80 像素（约 6 个中文字符或 12 个英文字符），超出部分会被隐藏

## API

+ `PayMerchant.version`: 静态属性, 返回 PayMerchant 的版本号

+ `merchant.setAvatar(value: string)`: 设置商户头像
 ```js
  merchant.setAvatar('https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*6N04Tb4TSdcAAAAAAAAAAABkARQnAQ');
```
+ `merchant.setName(value: string)`: 设置商户名称
  ```js
  merchant.setName('test shop');
  ```

+ `merchant.setTag(value: string)`: 设置商户标签
  ```js
  merchant.setTag('经常光顾');
  ```

+ `merchant.hideTag()`: 隐藏商户标签
  ```js
  merchant.hideTag();
  ```

+ `merchant.on(event: string, handler: function)`: 绑定监听事件，[详情](#事件绑定)

## 事件绑定

`merchant.on(event, handler)`

```js
merchant.on('change', function (e) {
    console.log('merchant change 事件触发，返回值为：', e);
});
```

输入框事件
- `init` - 初始化完成触发
- `change` - 当商户信息变更时触发，返回当前商户的信息
