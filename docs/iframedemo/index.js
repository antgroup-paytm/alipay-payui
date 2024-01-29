// toast 弹框
var toast = new PayToast({
    element: document.getElementById('toast'),
    tips: '支付成功',
    top: 100,
});

// 商户信息
var merchant = new PayMerchant({
    element: document.getElementById('merchant'),
    avatar: 'https://gw.alipayobjects.com/mdn/rms_349abe/afts/img/A*An0xQrA3snUAAAAAAAAAAABkARQnAQ',
    name: '勾庄蔬果直销店(*玉柱)'
});

// 输入框
var input = new PayInput({
    element: document.getElementById('input'),
});

input.on('change', function(e) {
    console.log('input', e);
    if (!e.value) {
        keyboard.toggleSubmitDisabled(true);
    }
    if (parseFloat(e.value) >= 100) {
        huabei.show();
    } else {
        huabei.hide();
    }
    keyboard.value = e.value;
});

input.on('focus', function(){
  keyboard.show();
})

// 备注
var remark = new PayRemark({
    element: document.getElementById('remark'),
    tips: '付款备注'
});

remark.on('open', () => {
    console.log('remark box open');
    keyboard.hide();
})

// 花呗
var huabei = new PayHuabei({
    element: document.getElementById('huabei'),
    checked: false
});

huabei.on('change', (e) => {
    console.log('huabei change' + e);
});

// 分期
var installment = new PayInstallment({
    element: document.getElementById('installment'),
});

// 键盘
var keyboard = new PayKeyboard({
    element: document.getElementById('keyboard'),
    tip: '安全支付保障中',
    arrow: true,
    value: input.value,
});

keyboard.toggleSubmitDisabled(!parseFloat(keyboard.value) > 0);

keyboard.on('init', function(e){
    console.log('keyboard-init')
});

keyboard.on('click',function(e){
    console.log('click',e.key)
});

keyboard.on('change',function(e){
    input.update(e.value);
});

keyboard.on('hide',function(){
    input.blur();
})

keyboard.on('submit',function(e){
    console.log('submit value:',parseFloat(e.value))
    if (huabei.checked) {
        installment.show([{
            monthlyPay: 100,
            totalMonth: 12,
            transactionFee: 1
        }, {
            monthlyPay: 200,
            totalMonth: 6,
            transactionFee: 1
        }, {
            monthlyPay: 400,
            totalMonth: 3,
            transactionFee: 1
        }]);
        keyboard.toggleSubmitLoading(false);
        keyboard.toggleSubmitDisabled(false);
        return;
    }
    setTimeout(() => {
        // 模拟
        const num = Math.random() > 0.5 ? 1 : 0;
        toast.show(num ? '模拟支付成功' : '模拟支付失败');
        keyboard.toggleSubmitLoading(false);
        keyboard.toggleSubmitDisabled(!parseFloat(keyboard.value) > 0);
        if (num) {
            logPayBtn('')
        } else {
            throw Error('支付失败')
        }
    }, 2000);
});
