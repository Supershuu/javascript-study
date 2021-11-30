/**
 * 数据类型的分类:
 * 1.基本数据类型:
 * Number:任意的数字
 * String:任意的字符串
 * Boolean:true/false
 * undefined:undefined
 * null:null
 * Symbol:Symnol()
 * 2.引用数据类型:
 * Object:Function,Array,Date,RegExp,Error
 * Function特点:特殊的对象,包含可以执行的代码块
 * 使用new fun()的时候叫构造函数 创建一个类
 * Array特点:1.有序的 2.属性是数值
 */
// Number
/**
 * Number的范围:都用浮点数表示 规则:IEEE754标准64位(双精度)
 * 1位:符号位 s
 * 11位:指数位 移码表示 e
 * 52位:尾数 原码表示 m 有个隐含的1
 * 表示的值:(-1)^s * M * 2^e
 * 规则:
 * 规格化 非规格化 特殊值
 * 规格化:阶码非全0或者全1 11..10最大2047 00...01最小1 为了表示更大的整数范围负数收缩两位偏置取1023[-1022,1023]
 * 非规格化:阶码为全1(表示特殊值)或者全0(尾数全0表示0,尾数不全为0扩大精度)
 * 符号位       阶码        尾数        数值
 * 0/1          全0        全0          +-0
 * 0/1          全0       不全0         (-1)^s * M * 2^(-1022)
 * 0/1          1~2046    任意          (-1)^s * M * 2^(e-1023)
 * 0/1          全1       全0           +-∞
 * 0/1          全1       不全0         NaN
 */
function rangeNumber() {
  //能表示的最大值
  function calculateMaxValue() {
    let sum = 0;
    for (let a = -1; a >= -52; a--) {
      sum += Math.pow(2, a);
    }
    sum = sum + Math.pow(2, 0);
    sum = sum * Math.pow(2, 1023);
    console.log(sum);
  }
  //能表示的最小值
  function calculateMinValue() {
    let sum = 0;
    sum = Math.pow(2, -1074);
    console.log(sum);
  }
  calculateMaxValue();
  calculateMinValue();
}
rangeNumber();
/**
 * Number字面量:
 * 整数字面量:
 * 1.数字序列表示一个十进制整数
 * 2.0x或者0X表示的时一个十六进制整数
 * 3.EcmaScript不支持八进制 但有些javascript实现支持八进制 最好不用八进制 0开头
 * 浮点数:
 * 1.直接整数,小数点,小数部分 3.14
 * 2.指数法实数后面加e或者E 6.02e201 = 6.02*10^201
 */
/**
 * Number运算
 * +(加) -(减) *(乘) /(除) %(求余) Math对象可以实现更加复杂的运算
 * NaN和Infinity都是javascript定义的全局变量
 * NaN和任何值都不相等 判断方法:1.isNaN() NaN或者非数字(如对象字符串) true 2.x!==x
 * Infinity判断 IsFinite() NaN Infinity -Infinity false
 * 正0和负0是相等的
 * IEEE754浮点数导致的误差问题 0.3-0.2!==0.1
 */
function operationNumber(){
  //求幂
  let a = Math.pow(2,10);
  //四舍五入
  let b = Math.round(0.8);
  //向下取整
  let c = Math.floor(0.6)
  //向上取整
  let d = Math.ceil(0.6)
  //求绝对值
  let e = Math.abs(-0.5)
  //返回最大值
  let max = Math.max(1,0.3,6,9,8,2544,54)
  //返回最小值
  let min = Math.min(1,5,68,4,66,4684,534)
  //超出范围
  let f = Math.pow(10,309)
  //非0除0
  let g = 1/0;//Infinity
  //0除0
  let h = 0/0;//NaN
  console.log(a,b,c,d,e,max,min,f,g,h);
  //NaN的判断 
  let test =NaN;
  let obj = {};
  let i = isNaN(obj);
  let j = isNaN(test)
  let k = test!==test
  console.log(i,j,k)
  //Infinity的判断
  let testTwo = Infinity;
  let l = isFinite(testTwo);
  console.log(l,1111111)
  //+0 -0
  let zeroOne = 0;
  let zeroTwo = -0;
  console.log(zeroOne===zeroTwo);
  console.log(1/zeroOne===1/zeroTwo)
}
operationNumber();