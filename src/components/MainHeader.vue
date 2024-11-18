<!--
 * @Description: 头部功能展示
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-09-10 11:51:23
 * @LastEditors: Zhangwenzhe
-->

<template>
  <div class='header'>
    <div class="l-content">
      <el-button icon="el-icon-menu"
                 size="mini"></el-button>
      <!--面包屑-->
      <span class="text">首页</span>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="elLink">头像</span>
        <div>
          <el-button @click="toggleTheme">换肤</el-button>
        </div>
        <el-dropdown-menu>
          <el-dropdown-item>个人信息</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    //这里存放数据
    return {
      typeState: false
      // skin: {
      //   bgColor: '#FFFFFF', // 默认背景颜色
      // },
      // skins: [
      //   { bgColor: '#FFFFFF' }, // 白色皮肤
      //   { bgColor: '#000000' }, // 黑色皮肤
      //   { bgColor: '#3498db' }, // 蓝色皮肤
      // ],
      // currentSkinIndex: 0, // 当前皮肤索引
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () { }, //生命周期 - 创建之前
  beforeMount () { }, //生命周期 - 挂载之前
  beforeUpdate () { }, //生命周期 - 更新之前
  updated () { }, //生命周期 - 更新之后
  beforeDestroy () { }, //生命周期 - 销毁之前
  destroyed () { }, //生命周期 - 销毁完成
  activated () { }, //如果页面有keep-alive缓存功能，这个函数会触发
  //方法集合
  methods: {
    toggleTheme () {
      console.log('000000')
      this.typeState = !this.typeState
      this.$store.dispatch('setTypeState', this.typeState)
	  this.$bus.$emit("valueSwitchName", this.valueSwitch)
    }
    // changeSkin () {
    //   console.log('换肤操作')
    //   this.currentSkinIndex = (this.currentSkinIndex + 1) % this.skins.length;
    //   this.skin = { ...this.skins[this.currentSkinIndex] };
    //   console.log('换肤操作12', this.currentSkinIndex, this.skin)
    // },
  },
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
.header {
  padding: 0 20px;
  background-color: #a0b835;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    margin-left: 10px;
  }
}
.elLink {
  margin-right: 20px;
}

.app-container {
  background-color: var(--background-color);
  color: var(--text-color);
}

.title {
  color: var(--primary-color);
}

button {
  background-color: var(--secondary-color);
  color: var(--text-color);
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: var(--primary-color);
}
</style>