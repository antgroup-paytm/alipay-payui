const CLICK_PAY_BTN_CODE = 11;
const JSAPI_ERROR_CODE = 12;
const REMARK_CONFIRM_CODE = 13;
const REMARK_CANCEL_CODE = 14;
const HUABEI_PAY_CODE = 15;
const PV_CODE = 16;

var tracker = new Tracker({
  pid: 'multipydemo',
  plugins: [
    [window.interfaceTrackerPlugin],
    [window.performanceTrackerPlugin]
  ],
});

function logCLUE(code, sampleRate = 1.00, c1, c2) {
  return function(...args) {
    tracker.log({
      code,
      msg: args.join('_'),
      c1,
      c2,
      sampleRate,
    })
  }
}

const logPayBtn = logCLUE(CLICK_PAY_BTN_CODE);
const logJSAPIError = logCLUE(JSAPI_ERROR_CODE);
const logRemarkConfirm = logCLUE(REMARK_CONFIRM_CODE);
const logRemarkCancel = logCLUE(REMARK_CANCEL_CODE);
const logHuabeiPay = logCLUE(HUABEI_PAY_CODE);
const logPV = logCLUE(PV_CODE);

const payBtn = document.querySelector("#submit");
payBtn.addEventListener('click', () => {
  logPayBtn('点击付款', document.querySelector(".payInput__num").innerHTML);
  if (document.querySelector('.PayHuabei__checkbox').className.split(' ')[1] === 'checked') {
    logHuabeiPay('使用花呗');
  }
});

const remarkConfirmBtn = document.querySelector(".payRemark__box--button.confirm");
remarkConfirmBtn.addEventListener('click', () => logRemarkConfirm('确认备注'));

const remarkCancelBtn = document.querySelector(".payRemark__box--button.cancel");
remarkCancelBtn.addEventListener('click', () => logRemarkCancel('取消备注'));

tracker.install();
