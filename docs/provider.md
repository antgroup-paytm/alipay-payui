## 服务供应商信息

使用方式：

```html
<div id="provider" class="provider"></div>
<!--CDN地址：https://gw.alipayobjects.com/as/g/PayTM-Core/pay-ui/0.0.20/PayProvider.js-->
<script src="PayProvider.js"></script>
```

```js
const provider = new PayProvider({
    element: document.getElementById('provider'),
    logo: 'https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*vnZKQ5xThhMAAAAAAAAAAAAAARQnAQ',
    name: '支付宝',
    background: '#1677FF'
});
```

使用模块管理器:

```js
import { PayProvider } from 'alipay-payui';
const provider = new PayProvider(options);
```
## 配置项 options

名称 | 默认值 | 描述
----|-------|----
element | `document.querySelector('.payProvider')` | 加载商户信息的容器
logo | - | 服务供应商图标，建议 80x80 像素
name | 服务供应商 | 服务供应商名称
height | - | 组件高度
background | - | 组件背景色

## API

+ `PayProvider.version`: 静态属性, 返回 PayProvider 的版本号

+ `provider.setLogo(value: string)`: 设置商户头像
 ```js
  provider.setLogo('https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*6Y_BTbTH4gwAAAAAAAAAAAAAARQnAQ');
```
+ `provider.setName(value: string)`: 设置商户名称
  ```js
  provider.setName('宇宙银行');
  ```

+ `provider.setBackground(value: string)`: 设置背景色
  ```js
  provider.setBackground('#07C160');
  ```

+ `provider.on(event: string, handler: function)`: 绑定监听事件，[详情](#事件绑定)

## 事件绑定

`provider.on(event, handler)`

```js
provider.on('change', function (e) {
    console.log('provider change 事件触发，返回值为：', e);
});
```

输入框事件
- `init` - 初始化完成触发
- `change` - 当服务供应商信息变更时触发，返回当前修改的信息
