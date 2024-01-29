## 绑卡

使用方式：

```html
<div id="card" class="card"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayCard.js-->
<script src="PayCard.js"></script>
```

```js
// 绑卡信息
var card = new PayCard({
    element: document.getElementById('card'),
    title: '选择要绑定的储蓄卡',
    data: ['6263 **** **** 3643', '6263 **** **** 3645'],
    defaultChecked: 0,
    protocol: '同意授权银行将本人绑卡信息传递给支付机构'
});
card.on('submit', function(e){
  alert(`选择的卡片是：${e.item}`)
})
```

使用模块管理器:

```js
import { PayCard } from 'alipay-payui';
const card = new PayCard(options);
```
## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.payCard')` | 加载商户信息的容器
title | - | 标题
data | [] | 列表项数据
protocol | - | 协议文案
defaultChecked | 0 | 默认选中的列表项索引
buttonText | 下一步 | 按钮文案

## API

+ `PayCard.version`: 静态属性, 返回 PayCard 的版本号

+ `card.on(event: string, handler: function)`: 绑定监听事件，[详情](#事件绑定)

## 事件绑定

`card.on(event, handler)`

```js
card.on('submit', function (e) {
    console.log('card 提交事件触发，返回值为：', e);
});
```

输入框事件
- `init` - 初始化完成触发
- `submit` - 点用户点击按钮时触发，返回当前选中的信息
