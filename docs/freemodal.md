## 提示

引入方式：

```html
<div id="freeModal"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayFreeModal.js-->
<script src="PayFreeModal.js"></script>
```

```js
const installment = new PayFreeModal({
  element: document.getElementById('freeModal'),
  params: {
      scene: 'wuyou',
      tradeNo: '234324',
      appId: '22222'
  },
});
```

使用模块管理器:

```js
import { PayFreeModal } from 'alipay-payui';
const freeModal = new PayFreeModal(options);
```

## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('#payFreeModal')` | 加载提示组件的容器
params | {} | 宿主传入弹框的参数（仅限内部使用）


## 参数 params
名称 | 描述 | 默认值 | 是否必填
----|-------|-------|----
scene | `场景` | `wuyou` | 否，会走页面内默认数据
tradeNo | `订单号` | `33333` | 否，会走页面内默认数据；最好填，后面会查标签展示不同的内容
appId | `小程序Id` | `ddddfef` |否，会走页面内默认数据；最好填，后面会查标签展示不同的内容


## API

+ `PayFreeModal.version`: 静态属性, 返回 payFreeModal 的版本号

+ `freeModal.show()`: 显示弹框

+ `freeModal.close()`: 关闭弹框



## 事件绑定

`freeModal.on(event, handler)`


