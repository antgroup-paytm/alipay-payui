## 输入框

使用方式：

```html
<div id="input" class="input"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayInput.js-->
<script src="PayInput.js"></script>
```

```js
const input = new PayInput({
  element: document.getElementById('input')
});
```

使用模块管理器:

```js
import { PayInput } from 'alipay-payui';
const input = new PayInput(options);
```

## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.payInput')` | 加载输入框的容器
value | - | 输入框的值
maxLength | `100` | 设置输入框的最大长度
currency | `￥` | 设置金额单位
color | `#1677FF` | 设置输入框的主题色
showUnit | `true` | 是否展示提示单位，千、万、十万等
autoFocus | `true` | 输入框是否自动获取焦点

## API

+ `PayInput.version`: 静态属性, 返回 PayInput 的版本号

+ `input.reset()`: 重置输入框到初始状态

+ `input.add(value: number | string)`: 输入新增值
  ```js
  input.add(1);
  ```

+ `input.del()`: 删除键，移除输入框最后一位

+ `input.update(value: number | string)`: 更新输入框的值为指定的内容

+ `input.clear()`: 清楚输入框的值

+ `input.focus()`: 输入框获取焦点

+ `input.blur()`: 输入框失去焦点

+ `input.setColor(color: string)`: 设置输入框主题色

  ```js
  input.setColor('#000000');
  ```

+ `input.on(event: string, handler: function)`: 绑定输入框监听事件，[详情](#事件绑定)

## 事件绑定

`input.on(event, handler)`

```js
input.on('change', function (e) {
    console.log('input change 事件触发，返回值为：', e.value);
});
```

输入框事件
- `init` - 初始化完成触发
- `change` - 当输入框变更时触发，返回当前值
