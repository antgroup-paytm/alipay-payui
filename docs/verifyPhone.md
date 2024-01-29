## 提示

使用方式：

```html
<div id="verifyPhone"></div>
```

使用模块管理器:

```js
import { PayVerifyPhone } from 'alipay-payui';
const verifyPhone = new PayVerifyPhone(options);
```

```js
const verifyPhone = new PayVerifyPhone({
    element: document.getElementById('verifyPhone'),
    phoneList: ['159****7687', '132****7453'],
    time: 30,
    codeLength: 6,
    buttonText: '立即绑定',
    title: '输入短信验证码',
});

verifyPhone.on('submit', function(e) {
    alert(`验证码是：${e.code}， 手机号是：${e.phone}`);
});

verifyPhone.on('getCode', function(e) {
    // 这里调用服务端接口发送验证码
    console.log(`手机号${e.phone}正在获取验证码`);
    // 成功后调用倒计时api
    verifyPhone.countDown();
});
```

## 配置项 options

| 属性 | 说明 | 必填 | 类型 | 默认值 |
| ---- | ------ | ---- | ---- | ---- |
| `element` | 加载组件的容器 | 是 | `element` | - |
| `phoneList` | 银行卡绑定的电话列表，如果传空会转换为输入框进行自定义输入 | 是 | `string[]` | `[]` |
| `time` | 获取验证码重试时间 | 否 | `number` | `60` |
| `codeLength` | 验证码长度 | 否 | `number` | `4` |
| `buttonText` | 按钮文案 | 否 | `string` | `立即绑定` |
| `title` | 标题 | 否 | `string` | `验证银行预留手机号` |

## 事件

| 事件名        | 说明     | 类型          | 备注  |
| ------------ | -------- | ------------- | ------------- |
| `submit` | 点击立即绑定按钮 | `(e: {code, phone}) => {}`  | `code`：验证码 `phone`：手机号 |
| `getCode` | 点击获取验证码 | `(e: {phone}) => {}` | `phone`：手机号 |
| `init` | 组件初始化完成 | `() => {}` | - |

## 事件绑定

`verifyPhone.on(event, handler)`

```js
// 监听点击立即绑定按钮
verifyPhone.on('submit', function(e) {
    alert(`验证码是：${e.code}， 手机号是：${e.phone}`);
});

// 监听点击获取验证码
verifyPhone.on('getCode', function(e) {
    // 这里调用服务端接口发送验证码
    console.log(`手机号${e.phone}正在获取验证码`);
    // 成功后调用倒计时api
    verifyPhone.countDown();
});

// 监听点击协议事件
bindBankCard.on('init', function() {
    console.log('verifyPhone init完成事件触发');
});
```

## API

-   `PayVerifyPhone.version`: 静态属性, 返回 PayVerifyPhone 的版本号

-   `verifyPhone.countDown()`: 开启倒计时，在请求服务器发送验证码之后调用

-   `PayVerifyPhone.resetCountDown()`: 重置倒计时
