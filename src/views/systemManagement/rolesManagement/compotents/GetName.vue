<!--
 * @Description: 
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-12-04 09:26:43
 * @LastEditors: Zhangwenzhe
-->
<template>
  <div class="role-management">
    <div>
      <el-button type="primary"
                 @click="getName">按钮</el-button>
      <div>{{shijiName}}</div>
    </div>
  </div>
</template>
<script>
import GetName from "./GetName.js";
export default {
  ...GetName
}
//两种写法都可以
</script>
<style scoped>
/**引入css文件*/
@import url('./GetName.scss');
</style>