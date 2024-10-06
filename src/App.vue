<template>
  <div id="app"
       :style="{ backgroundColor: coloree , color: sizeColor}">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
import {
  mapGetters
} from 'vuex'
export default {
  components: {

  },
  data () {
    return {
      coloree: 'purple',
      sizeColor: 'black'
    }
  },
  computed: {
    ...mapGetters(['typeState'])
  },
  watch: {
    typeState (newVal) {
      console.log('数据的监听', newVal)
      if (newVal) {
        this.coloree = 'pink';
        this.sizeColor = 'white'
      } else {
        this.coloree = 'purple';
        this.sizeColor = 'black'
      }

    }
  },
  mounted () {
  }
}
</script>

<style lang="less">
body,
html {
  width: 100%;
  height: 100vh; /* vh是视窗高度的百分比单位 */
  margin: 0;
  padding: 0;
  // background: this.coloree;
  // color: red;
  /* 其他样式 */
}
#app {
  height: 100vh;
}
//避免全局样式污染
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
</style>
