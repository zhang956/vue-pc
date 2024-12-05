/*
 * @Description: 
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-12-04 09:38:33
 * @LastEditors: Zhangwenzhe
 */
import request from "@/utils/request";
import qs from "qs";
export function demo (param) {
  return request({
    url: "/demo",
    method: "post",
    data: param,
  });
}