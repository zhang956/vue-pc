/*
 * @Description: 
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-12-04 10:50:14
 * @LastEditors: Zhangwenzhe
 */
export function tiemCreat (unixTimestamp) {

// 假设你有一个以秒为单位的UNIX时间戳

// 将其转换为毫秒（因为JavaScript的Date对象期望的是毫秒级的时间戳）
var milliseconds = unixTimestamp * 1000;

// 使用Date对象来创建一个日期
var date = new Date(milliseconds);
console.log(date,'0000000');
// 输出转换后的日期和时间
console.log(date.toUTCString()); // 输出为UTC时间的字符串格式
console.log(date.toLocaleString()); // 输出为本地时间的字符串格式，根据浏览器的时区设置

// 如果你想以特定的格式输出日期和时间，你可以使用以下方法：
var year = date.getFullYear();
var month = (date.getMonth() + 1).toString().padStart(2, '0'); // 月份从0开始，需要加1，并且确保是两位数
var day = date.getDate().toString().padStart(2, '0'); // 确保日期是两位数
var hours = date.getHours().toString().padStart(2, '0'); // 确保小时是两位数
var minutes = date.getMinutes().toString().padStart(2, '0'); // 确保分钟是两位数
var seconds = date.getSeconds().toString().padStart(2, '0'); // 确保秒数是两位数

var formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
console.log(formattedDate); // 输出为YYYY-MM-DD HH:MM:SS格式的日期和时间
  // 打印结果  
  return formattedDate
}
 
// 示例：检查字符串是否为空或只包含空白字符
export function isEmptyString(str) {
  return !str || /^\s*$/.test(str);
}