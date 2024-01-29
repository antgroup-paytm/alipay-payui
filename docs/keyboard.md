## 键盘

使用方式：

```html
<div id="keyboard"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayKeyboard.js-->
<script src="PayKeyboard.js"></script>
```

```js
const kb = new PayKeyboard({
  element: document.getElementById('keyboard'),
  tip: '安全支付保障中',
  arrow: true
});
```

使用模块管理器:

```js
import { PayKeyboard } from 'alipay-payui';
const kb = new PayKeyboard(options);
```
## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.payKeyboard')` | 加载键盘的容器
value | - | 键盘设定了一个内存记录值，用于存储用户的输入值，可直接通过键盘示例获取用于赋值给输入框
max | `10e8` | 设置键盘内存可记录值的最大值，设置值的最大值为 `10e8`
arrow | `false` | 设置是否显示键盘收起箭头
tip | - | 设置键盘顶部的文案描述
showIcon | `true` | 是否显示键盘顶部的文案描述安全图标
showDot | `true` | 是否显示键盘底部的小数点按钮
color | `#1677FF` | 设置键盘的主题色
logo | - | 顶部图标展示，可接受一个url链接
text | `付款` | 设置键盘确认的文案，最多展示前6个字符


## API

+ `PayKeboard.version`: 静态属性, 返回 PayKeboard 的版本号

+ `kb.reset()`: 重置键盘到初始状态

+ `kb.toggleSubmitDisabled(disabled: boolean)`: 设置提交按钮的禁用状态
  ```js
  kb.toggleSubmitDisabled(true);
  ```

+ `kb.toggleSubmitLoading(loading: boolean)`: 设置提交按钮的loading状态

  ```js
  kb.toggleSubmitLoading(true);
  ```

+ `kb.show()`: 显示键盘

+ `kb.hide()`: 收起键盘

+ `kb.setColor(color: string)`: 设置键盘主题色

  ```js
  kb.setColor('#000000');
  ```

+ `kb.on(event: string, handler: function)`: 绑定键盘监听事件，[详情](#事件绑定)

## 事件绑定

`kb.on(event, handler)`

```js
kb.on('change', function (e) {
    console.log('keyboard change 事件触发，返回值为：', e.value);
});
```

键盘事件
- `init` - 初始化完成触发
- `change` - 当键盘记录值变更时触发，返回当前记录值
- `click` - 当键盘按钮点击时触发，返回当前点击的按钮
- `submit` - 当用户点击键盘提交按钮时触发
- `hide` - 当键盘隐藏时触发
- `show` - 当键盘显示时触发
