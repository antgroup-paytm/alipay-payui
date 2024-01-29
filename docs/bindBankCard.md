## 绑卡

使用方式：

```html
<div id="bindBankCard" class="bindBankCard"></div>
```

使用模块管理器:

```js
import { BindBankCard } from 'alipay-payui';
const bindBankCard = new BindBankCard(option);
```

option demo数据参考:

```js
element: document.getElementById('bindBankCard'),
bankCardLogo: 'https://mdn.alipayobjects.com/fin_instasset/uri/img/as/instasset/PINGAN/BANK_LOGO/PURE?zoom=160w_160h.png',
bankCardName: '中国光大银行',
headBackground: 'linear-gradient(134deg, #01B4A2 0%, #0389AC 100%);',
bindBankData: [
    {
        reservedPhoneNo: '183****7754',
        bankCardArray: [
            {
                bankType: '信用卡',
                bankSubType: 'I类户',
                bankCardNo: '6217 **** **** 7731',
            },
        ],
    },
],
disabledBindBankCard: [
    {
        bankType: '信用卡',
        bankSubType: 'I类户',
        bankCardNo: '6217 **** **** 7731',
        disabledReason: '不可用原因可以放在这里，最多2行不可用原因可以放在这里，最多2行不可用原因可以放在这里',
    },
],
signType: 'strong',
protocolDescribe: '查看并同意协议',
protocolArray: ['《协议1》', '《协议2》'],
pageDesc: '本页面由中国光大银行提供',
```

## 配置项 options

| 属性 | 说明 | 必填 | 类型 | 默认值 |
| ---- | ------ | ---- | ---- | ---- |
| `bankCardName` | 银行名称 | 是 | `string` | `''` |
| `bankCardLogo` | 银行LOGO | 是 | `string` | 链接见下方👇[详情](#默认值) |
| `bankCardWaterMark` | 银行水印 | 否 | `string` | 链接见下方👇[详情](#默认值) |
| `headBackground` | 头部区域背景色 | 否 | `string` | `linear-gradient(-45deg, #2E61D0 0%, #2D8ED7 100%);` |
| <td colspan="2"><image src="https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*efMqTJ2HVSUAAAAAAAAAAAAADj16AQ/original" height=100px /> </td> |<td colspan="2"><image src="https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*wrsXQKr69TkAAAAAAAAAAAAADj16AQ/original" height=100px /> <br>推荐颜色配置见下方👇[详情](#默认值) </td>  |
| `bindBankData` | 支持绑定的银行卡数据 | 是 | [BindBankData[]](#BindBankData类型) | `[]` |
| `signType` | 签约类型 | 是 | `weak ｜ strong` | `'weak'`, 强签署 weak /弱签署 strong |
| `protocolDescribe` | 协议说明文案 | 否 | `string` | `同意授权银行将本人绑卡信息传递给支付机构` |
| `protocolArray` | 协议数组 | 否 | `string[]` | `[]`, 强签署则必须传入 |
|  <td colspan="4"> <image src="https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*CJt7SI1PeOsAAAAAAAAAAAAADj16AQ/original" height=100px /> eg: **protocolArray = ["协议1", "协议2"]** </td> |
| `submitBtnText` | 提交按钮文案 | 否 | `string` | `同意授权，下一步` |
| `disabledBindBankCard` | 不可绑卡列表 | 否 | [BankCardInfo[]](#BankCardInfo类型) | `[]` |
| `pageDesc` | 页面底部说明 | 是 | `string` | `''` |
| <td colspan="4"><image src="https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*VBLIRpZ1A-4AAAAAAAAAAAAADj16AQ/original" height=80px /> </td>  |

### BindBankData类型

| 属性 | 说明 | 必填 | 类型 | 默认值 |
| ---- | ------ | ---- | ---- | ---- |
| `reservedPhoneNo` | 银行预留手机号 | 是 | `string` | `''` |
| `bankCardArray` | 关联该银行预留手机号的银行卡 | 是 | `BankCardInfo[]` | `[]` |

### BankCardInfo类型

| 属性 | 说明 | 必填 | 类型 | 默认值 |
| ---- | ------ | ---- | ---- | ---- |
| `bankType` | 银行卡类型 | 是 | `string` | `''` |
| `bankSubType` | 银行卡子类型，非一类户可带子户标签 | 否 | `string` | `''` |
| `bankCardNo` | 银行卡号 | 是 | `string` | `''` |
| `disabledReason` | 当前卡不可用原因（不可绑卡列表需要传入） | 否 | `string` | `''` |
| <td colspan="4"><image src="https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*84d3Qojjz-QAAAAAAAAAAAAADj16AQ/original" height=80px /> </td>  |
| <td colspan="4"> 用户可根据情况传入其他额外数据，组件不消费，最终选中提交绑卡时会原样透传 </td> |

### 默认值

``` markdown
bankCardLogo: https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*VDRKRI2VM9AAAAAAAAAAAAAADj16AQ/original
bankCardWaterMark: https://mdn.alipayobjects.com/huamei_yqdpol/afts/img/A*5RRSTJ8wQu4AAAAAAAAAAAAADj16AQ/original
头部区域背景色: 
    蓝色(linear-gradient(-45deg, #2E61D0 0%, #2D8ED7 100%);) 
    绿色(linear-gradient(134deg, #01B4A2 0%, #0389AC 100%);) 
    红色(linear-gradient(134deg, #FF7666 0%, #FE5162 100%);)
    黄色(linear-gradient(-45deg, #FF8F1F 0%, #FFB557 100%);)
    自定义
```

## 事件

| 事件名        | 说明     | 类型          | 备注  |
| ------------- | -------- | ------------- | ------------- |
| `onSubmit`   | 点击按钮提交  | `(bindBankArray: BankCardInfo[]) => void`  | `bindBankArray`：选中绑卡的银行卡信息列表 |
| `onProtocol` | 点击协议| `(protocol: string) => void` | `protocol`：点击的协议名称 |
| `onChange` | 勾选/取消勾选银行卡 | `(value: { status: boolean,  bankCardArray: BankCardInfo[] }) => void` | `status`：选中状态 `true` 选中，`false`取消；`bankCardArray`操作涉及银行列表 |
| `init` | 组件初始化完成| `() => {}` |  ||

## API

- `bindBankCard.version`: 静态属性, 返回 PayCard 的版本号

- `bindBankCard.on(event: string, handler: function)`: 绑定监听事件，[详情](#事件绑定)

## 事件绑定

`bindBankCard.on(event, handler)`

```js
// 监听提交绑卡事件
bindBankCard.on('onSubmit', function(bankCardArray) {
    console.log('bindBankCard onSubmit提交事件触发，返回值为：', bankCardArray);
});

// 监听勾选银行卡/取消银行卡事件
bindBankCard.on('onChange', function(value) {
    console.log('bindBankCard onChange事件触发，返回值为：', value);
});

// 监听点击协议事件
bindBankCard.on('onProtocol', function(protocol) {
    console.log('bindBankCard onProtocol事件触发，返回值为：', onProtocol);
});

// 监听点击协议事件
bindBankCard.on('init', function() {
    console.log('bindBankCard init完成事件触发');
});
```
