<!--
 * @Description: 
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-10-11 11:52:15
 * @LastEditors: Zhangwenzhe
-->
<template>
  <el-menu :default-openeds="defaultOpeneds"
           :default-active="defaultActive"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
           @select="handleSelect"
           :collapse="isCollapse"
           background-color="#545c64"
           text-color="#fff"
           :unique-opened="true"
           active-text-color="#ffd04b">
    <h3>000000</h3>
    <el-menu-item v-for="item in noChildren"
                  :key="item.name"
                  :index="item.name"
                  @click="handleClick(item)">
      <i class="el-icon-menu"></i>
      <span slot="title">{{item.label}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren"
                :key="item.name"
                :index="item.name">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{item.label}}</span>
      </template>
      <el-menu-item-group v-for="subIndex in item.children"
                          :key="subIndex.name"
                          :index="subIndex.name">
        <el-menu-item @click="handleClick(subIndex)"
                      :index="subIndex.name">{{subIndex.label}}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  // 主页面组件逻辑
  data () {
    return {
      defaultOpeneds: [], // 默认展开的菜单索引数组  
      defaultActive: '',  // 默认高亮的菜单项索引  
      savedOpeneds: [],   // 从localStorage加载的原始展开菜单索引  
      savedActive: '',    // 从localStorage加载的默认高亮菜单项索引
      isCollapse: false,
      menuData: [
        {
          path: '/',
          name: 'Home',
          label: '首页',
          icon: 'el-icon-s-home',
          url: 'Home/home'
        },
        {
          name: 'systemManagement',
          label: '系统管理',
          icon: 'el-icon-s-home',
          children: [
            {
              path: '/userManagement',
              name: 'userManagement',
              label: '用户管理',
              icon: 'setting',
              url: 'systemManagement/userManagement'
            },
            {
              path: '/rolesManagement',
              name: 'rolesManagement',
              label: '角色管理',
              icon: 'setting',
              url: 'systemManagement/rolesManagement'
            }
          ]
        },
        {
          name: 'Other',
          label: '其他',
          icon: 'el-icon-s-home',
          children: [
            {
              path: '/PageOne',
              name: 'PageOne',
              label: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/PageTwo',
              name: 'PageTwo',
              label: '页面2',
              icon: 'setting',
              url: 'Other/PageTwo'
            }
          ]
        },
      ]
    };
  },
  computed: {
    //没有子菜单
    noChildren () {
      return this.menuData.filter(item => !item.children)
    },
    //有子菜单
    hasChildren () {
      return this.menuData.filter(item => item.children)
    }
  },
  created () {
    // 从localStorage中恢复状态  
    const savedOpeneds = localStorage.getItem('menuOpeneds');
    const savedActive = localStorage.getItem('menuActive');
    if (savedOpeneds) {
      this.defaultOpeneds = JSON.parse(savedOpeneds);
    }
    if (savedActive) {
      this.defaultActive = savedActive;
    }
  },
  mounted () {

  },
  methods: {
    handleSelect (index, indexPath) {
      // 保存当前选中的菜单项索引到localStorage  
      localStorage.setItem('menuActive', index);
    },
    handleOpen (index, indexPath) {
      // 保存当前展开的菜单索引到localStorage（可能需要处理成数组形式）  
      let openeds = JSON.parse(localStorage.getItem('menuOpeneds')) || [];
      if (!openeds.includes(index)) {
        openeds.push(index);
      }
      localStorage.setItem('menuOpeneds', JSON.stringify(openeds));
    },
    handleClose (index, indexPath) {
      // 从localStorage中移除已关闭的菜单索引（可选）  
      let openeds = JSON.parse(localStorage.getItem('menuOpeneds')) || [];
      openeds = openeds.filter(i => i !== index);
      localStorage.setItem('menuOpeneds', JSON.stringify(openeds));
    },
    //点击菜单
    handleClick (item) {
      // 尝试从localStorage获取已打开的菜单项集合  
      console.log('item', item)
      let openeds = JSON.parse(localStorage.getItem('menuOpeneds')) || [];

      // 如果点击的是有子菜单的项  
      if (Array.isArray(item.children) && item.children.length > 0) {
        // 使用Set来管理唯一性  
        const openedsSet = new Set(openeds);
        const indexToToggle = item.name; // 使用name作为索引  

        // 切换菜单项的打开状态  
        if (openedsSet.has(indexToToggle)) {
          openedsSet.delete(indexToToggle);
        } else {
          openedsSet.add(indexToToggle);
        }

        // 更新localStorage中的状态  
        localStorage.setItem('menuOpeneds', JSON.stringify(Array.from(openedsSet)));
        this.defaultOpeneds = Array.from(openedsSet); // 更新组件状态以反映UI  
      } else {
        // 如果点击的是没有子菜单的项，则清空所有已打开的子菜单  
        localStorage.setItem('menuOpeneds', JSON.stringify([]));
        this.defaultOpeneds = []; // 更新组件状态以反映UI  
      }

      // 路由跳转逻辑  
      this.$router.push({ name: item.name });
    }
  }
};
</script>

<style lang="less" scoped>
/* 样式可以根据需求自行调整 */
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* //固定高度防止抖动 */
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  overflow: hidden; /* 隐藏溢出内容 */
  border-right: 0;
  h3 {
    color: blue;
    text-align: center;
    line-height: 48px;
  }
}
</style>
