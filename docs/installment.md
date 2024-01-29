## 提示

引入方式：

```html
<div id="installment"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayInstallment.js-->
<script src="PayInstallment.js"></script>
```

```js
const installment = new PayInstallment({
  element: document.getElementById('installment')
});
```

使用模块管理器:

```js
import { PayInstallment } from 'alipay-payui';
const installment = new PayInstallment(options);
```

## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.installment')` | 加载提示组件的容器
showAlipay | `false` | 是否在分期组件里展示支付宝原生支付渠道



## API

+ `PayInstallment.version`: 静态属性, 返回 PayInstallment 的版本号

+ `installment.hide()`: 隐藏分期组件

+ `installment.show(installmentOptions: installmentOption[], defaultSelected: totalMonth)`: 显示分期组件，installmentOption 至少包含 monthlyPay（每月支付）, totalMonth（总月数）, transactionFee（手续费）。可传入第二个参数标识默认选中分期，值为 installmentOption 的 totalMonth

<img src="https://gw.alipayobjects.com/mdn/rms_b05656/afts/img/A*PtEfSpSb_roAAAAAAAAAAABkARQnAQ" width="300px" />



## 事件绑定

`installment.on(event, handler)`

```js
installment.on('submit', function (e) {
    console.log('选择分期确认触发，返回值为：', e.value);
});
```

键盘事件
- `submit` - 选择分期确认触发, 返回选中的分期
- `close` - 选择分期半屏关闭出发, 返回选中的分期

