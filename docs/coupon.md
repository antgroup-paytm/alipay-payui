## 提示

引入方式：

```html
<div id="coupon"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayCoupon.js-->
<script src="PayCoupon.js"></script>
```

```js
const coupon = new PayCoupon({
  element: document.getElementById('coupon')
});
```

使用模块管理器:

```js
import { PayCoupon } from 'alipay-payui';
const coupon = new PayCoupon(options);
```

## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.coupon')` | 加载提示组件的容器


## API

+ `PayCoupon.version`: 静态属性, 返回 PayCoupon 的版本号

+ `coupon.hide()`: 隐藏优惠券组件

+ `coupon.show(couponOptions: couponOption[], defaultSelected: couponId)`: 显示优惠券组件，couponOption 至少包含 couponDesc（优惠券描述）, couponId（优惠券id）。可传入第二个参数标识默认选中优惠券，值为 couponOption 的 couponId

```js
  // 例如：
  coupon.show([{
    'couponDesc': '选择支付满10减2优惠券',
    'startTime': 121212121212,
    'endTime': 3535353535353,
    'limitAmount': '',
    'limitCentAmount': '',
    'disAmount': 5,
    'disCentAmount': 2,
    'couponId': '12',
    'couponExtInfo': {},
    'couponTypeDesc': '折',
    'disable': true,
    'endTimeDesc': '有效期至2021-03-18'
  }]
```

<img src="https://gw.alipayobjects.com/mdn/rms_b05656/afts/img/A*r1jKQY7WxyUAAAAAAAAAAAAAARQnAQ" width="300px" />



## 事件绑定

`coupon.on(event, handler)`

```js
coupon.on('submit', function (e) {
    console.log('选择优惠券确认触发，返回值为：', e.value);
});
```

键盘事件
- `submit` - 选择优惠券确认触发, 返回选中的优惠券
- `close` - 选择优惠券半屏关闭出发, 返回选中的优惠券

