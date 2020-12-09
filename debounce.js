/**
 * @description: 防抖函数。利用闭包维护一个计时器，返回的函数中若当前计时器尚未失效则手动清除并重新设定。
 * @param { Function } fn 原函数，也就是想要防抖的函数
 * @param { Number } delay 时间毫秒数
 * @return { Function } 返回包装后的函数
 */
function debounce(fn, delay){
    // 维护一个 timer
    let timer = null;
    return function(...args) {
        // 获取函数的作用域
        let context = this;
        // 若有运行中的timer，则清除掉
        if(timer) {
            clearTimeout(timer);
        }
        // 重新设定timer，规定时间后执行原函数
        timer = setTimeout(function(){
            fn.apply(context, args);
        }, delay)
    }
}

// 使用场景
// 想要防抖的函数
function originFunc(str) {
    console.log(str)
}
let handleDebounce = debounce(originFunc, 2000)
handleDebounce('test') // 调用防抖函数，一般可以挂载到click方法上
