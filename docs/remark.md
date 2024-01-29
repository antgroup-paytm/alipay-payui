## 提示

使用方式：

```html
<div id="remark"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayRemark.js-->
<script src="PayRemark.js"></script>
```

```js
const remark = new PayRemark({
  element: document.getElementById('remark')
});
```

使用模块管理器:

```js
import { PayRemark } from 'alipay-payui';
const remark = new PayRemark(options);
```

## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.remark')` | 加载提示组件的容器
placeholder | `请输入备注` | 设置输入框的占位文本
zIndex | `1000` | 设置弹窗蒙层的z-index值
addText | `添加备注` | 设置唤起弹窗的文案
addTitle | `添加备注` | 设置添加弹窗顶部的标题文本
changeTitle | `修改备注` | 设置修改弹窗顶部的标题文本
maxInputLength | `20` | 输入框最大输入长度
maxRemarkLength | `200px` | 备注内容最大长度，多余部分用省略号展示

## API

+ `PayRemark.version`: 静态属性, 返回 PayRemark 的版本号

+ `remark.setZIndex(zIndex: number | string = 1000)`: 设置备注组件蒙层的 z-index

+ `remark.setMaxWidth(wdith: number | string = '200px')`: 设置备注内容展示的最大宽度

+ `remark.on(event: string, handler: function)`: 绑定确认监听事件，[详情](#事件绑定)

## 事件绑定

`remark.on(event, handler)`

```js
remark.on('change', function (e) {
    console.log('remark change 事件触发，返回值为：', e.value);
});
```

确认修改备注事件
- `change` - 当修改备注后，返回当前值
