<!--
 * @Description: 
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-12-12 11:43:36
 * @LastEditors: Zhangwenzhe
-->
<!--
 * @Description: 用户管理
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-09-09 20:55:53
 * @LastEditors: Zhangwenzhe
-->
<template>
  <div class="body">
    <div class="oval-menu">
      <div v-for="(item, index) in menuItems"
           :key="index"
           class="menu-item"
           :style="getMenuItemStyle(index)"
           @click="handleClick(item)">
        {{ item }}
        <div>3333</div>
      </div>
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
      menuItems: ['首页', '关于我们', '服务', '案例', '博客', '联系我们'],
      radiusX: 250, // 椭圆横轴半径
      radiusY: 120, // 椭圆纵轴半径
      angleOffset: 0, // 初始角度偏移
    };
  },
  //监听属性 类似于data概念
  computed: {
    animationSpeed () {
      return 0.05; // 控制动画速度
    }
  },
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    this.startAnimation();
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
    // 开始动画
    startAnimation () {
      setInterval(() => {
        this.angleOffset += this.animationSpeed;
      }, 16); // 约 60 帧每秒
    },
    // 计算菜单项位置
    getMenuItemStyle (index) {
      const angle = ((360 / this.menuItems.length) * index + this.angleOffset) % 360; // 平均角度 + 偏移
      const radian = (angle * Math.PI) / 180; // 转换为弧度
      const x = this.radiusX * Math.cos(radian); // X 坐标
      const y = this.radiusY * Math.sin(radian); // Y 坐标
      return {
        left: '50%',
        top: '50%',
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
      };
    },
    // 菜单点击事件
    handleClick (item) {
      alert(`您点击了菜单项：${item}`);
    }
  }
}
</script>
<style  scoped>
/* 页面全屏背景 */
body {
  width: 550px;
  height: 300px;
  margin: 0;
  background: linear-gradient(90deg, #1e3a8a, #2563eb);
  color: white;
  font-family: Arial, sans-serif;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* 椭圆菜单容器 */
.oval-menu {
  position: relative;
  width: 500px;
  height: 250px;
  background: baby blue;
  border-radius: 50%;
  border: 2px solid purple;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

/* 椭圆菜单项 */
.menu-item {
  position: absolute;
  width: 100px;
  height: 50px;
  background: rgba(255, 255, 255, 0.8);
  color: #333;
  text-align: center;
  line-height: 50px;
  border-radius: 25px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, background 0.3s;
  cursor: pointer;
}

.menu-item:hover {
  transform: scale(1.2);
  background: #3b82f6;
  color: white;
}
</style>