<!--
 * @Description: 椭圆菜单动态展示
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-09-09 20:55:53
 * @LastEditors: Zhangwenzhe
-->
<template>
  <div class="body">
    <div class="oval-menu">
      <!-- 中心圆 -->
      <div class="center-circle">
        {{ centerText }}
      </div>
      <!-- 菜单项 -->
      <div v-for="(item, index) in menuItems"
           :key="index"
           class="menu-item"
           :style="getMenuItemStyle(index)"
           @click="handleClick(item)">
        <div>{{ item.label }}</div>
        <div style="font-size: 12px;">{{ item.value }}</div>
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
      menuItems: [
        { label: '五水共治', value: 2831 },
        { label: '四边三化', value: 1257 },
        { label: '三改一拆', value: 2579 },
        { label: '治危拆迁', value: 2831 },
        { label: '安全生产', value: 1642 },
        { label: '市容环境', value: 3789 },
      ],
      radiusX: 250, // 椭圆横轴半径
      radiusY: 150, // 椭圆纵轴半径
      angleOffset: 0, // 初始角度偏移
      centerText: 38493, // 中心圆的文字
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
      alert(`您点击了菜单项：${item.label}, 值: ${item.value}`);
    }
  }
}
</script>
<style  scoped>
/* 页面全屏背景 */
body {
  margin: 0;
  background: linear-gradient(90deg, #0d1b2a, #1b263b);
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
  height: 300px;
  background: none;
  border-radius: 50%;
  border: 2px solid #8a18a7;
  margin: 20px 0 0 40px;
}

/* 中心圆 */
.center-circle {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(
    circle,
    rgba(58, 123, 213, 1) 0%,
    rgba(37, 83, 143, 1) 100%
  );
  border-radius: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

/* 椭圆菜单项 */
.menu-item {
  position: absolute;
  width: 100px;
  height: 50px;
  background: rgba(255, 255, 255, 0.1);
  color: blueviolet;
  text-align: center;
  line-height: 50px;
  border-radius: 25px;
  border: 2px solid rgba(98, 15, 192, 0.39);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, background 0.3s;
  cursor: pointer;
  font-size: 14px;
}

.menu-item:hover {
  transform: scale(1.2);
  background: rgba(59, 130, 246, 0.8);
}
</style>