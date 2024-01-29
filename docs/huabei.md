## 提示

使用方式：

```html
<div id="huabei"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayHuabei.js-->
<script src="PayHuabei.js"></script>
```

```js
const huabei = new PayHuabei({
  element: document.getElementById('huabei')
});
```

使用模块管理器:

```js
import { PayHuabei } from 'alipay-payui';
const huabei = new PayHuabei(options);
```

## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.huabei')` | 加载提示组件的容器
checked  | `false` | 是否选中


## API

+ `PayHuabei.version`: 静态属性, 返回 PayHuabei 的版本号

+ `huabei.checked`: 实例属性，返回布尔值，表示是否被选中

+ `huabei.show()`: 显示花呗组件

+ `huabei.hide()`: 隐藏花呗组件

+ `huabei.setStatus(checked: boolean)`: 设置勾选状态

  ```js
  huabei.setStatus(true);
  ```


## 事件绑定

`huabei.on(event, handler)`

```js
huabei.on('change', function (e) {
    console.log('huabei change 事件触发，返回值为：', e);
});
```

输入框事件
- `change` - 花呗组件状态改变触发，回调参数为布尔值，表示花呗组件是否被选中
