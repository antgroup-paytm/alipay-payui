## 提示

使用方式：

```html
<div id="verify"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayVerify.js-->
<script src="PayVerify.js"></script>
```

```js
const verify = new PayVerify({
  element: document.getElementById('verify'),
  data: ['159****7687', '15957187682'],
  time: 60,
  length: 4,
  buttonText: '提交',
});

verify.on('submit', function(e){
  alert(`验证码是：${e.code}， 手机号是：${e.phone}`)
})

verify.on('getCode', function(e){
  // 这里调用服务端接口发送验证码
  // 成功后调用倒计时api
  verify.countDown();
})
```

使用模块管理器:

```js
import { PayVerify } from 'alipay-payui';
const verify = new PayVerify(options);
```

## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.PayVerify')` | 加载提示组件的容器
data | [] | 银行卡绑定的电话列表，如果传空会转换为输入框进行自定义输入
time | 60 | 获取验证码回调事件
length | 4 | 验证码长度
buttonText | '下一步' | 按钮文案
title | '验证银行预留手机号' | 头部文案

## 事件绑定

`verify.on(event, handler)`

```js
verify.on('submit', function(e){
  alert(`验证码是：${e.code}， 手机号是：${e.phone}`)
})

verify.on('getCode', function(e){
    verify.countDown();
})
```


## API

+ `PayVerify.version`: 静态属性, 返回 PayVerify 的版本号

+ `verify.countDown()`: 开启倒计时，在请求服务器发送验证码之后调用

+ `PayVerify.resetCountDown()`: 重置倒计时
