<!--
 * @Description: 
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-10-11 11:52:15
 * @LastEditors: Zhangwenzhe
-->
<!--
 * @Description: 左边菜单栏
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-09-09 16:07:14
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
      <span slot="title">{{item.lable}}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren"
                :key="item.lable"
                :index="item.lable">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{item.lable}}</span>
      </template>
      <el-menu-item-group v-for="subIndex in item.children"
                          :key="subIndex.name">
        <el-menu-item @click="handleClick(subIndex)"
                      :index="subIndex.name">{{subIndex.lable}}</el-menu-item>
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
          lable: '首页',
          icon: 'el-icon-s-home',
          url: 'Home/home'
        },
        // {
        //   path: '/mall',
        //   name: 'mall',
        //   lable: '商品管理',
        //   icon: 'el-icon-s-home',
        //   url: 'MallManage/MallManage'
        // },
        {
          // path: '/user',
          name: 'user',
          lable: '系统管理',
          icon: 'el-icon-s-home',
          // url: 'UserManage/UserManage'
          children: [
            {
              path: '/userManagement',
              name: 'userManagement',
              lable: '用户管理',
              icon: 'setting',
              url: 'systemManagement/userManagement'
            },
            {
              path: '/rolesManagement',
              name: 'rolesManagement',
              lable: '角色管理',
              icon: 'setting',
              url: 'systemManagement/rolesManagement'
            }
          ]
        },
        {
          lable: '其他',
          icon: 'el-icon-s-home',
          children: [
            {
              path: '/PageOne',
              name: 'PageOne',
              lable: '页面1',
              icon: 'setting',
              url: 'Other/PageOne'
            },
            {
              path: '/PageTwo',
              name: 'PageTwo',
              lable: '页面2',
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
      // 如果选中的是一个子菜单项，并且其父菜单不在defaultOpeneds中，  
      // 我们应该将其父菜单添加到defaultOpeneds中（但实际上由于Vue和Element UI的机制，  
      // 这通常不是必需的，因为选中子菜单项会自动展开父菜单）。  
      // 但为了保险起见，我们可以在这里重新确认父菜单的展开状态。  
      const parentIndex = indexPath[0];
      if (!this.defaultOpeneds.includes(parentIndex)) {
        // 注意：这里我们不直接修改this.defaultOpeneds，  
        // 因为这不会影响到已经渲染的菜单。  
        // 相反，我们应该更新localStorage中的值。  
        let openeds = JSON.parse(localStorage.getItem('menuOpeneds')) || [];
        if (!openeds.includes(parentIndex)) {
          openeds.push(parentIndex);
          localStorage.setItem('menuOpeneds', JSON.stringify(openeds));
          // 如果需要，可以在这里强制Vue重新渲染菜单，  
          // 但通常这不是必需的，因为Vue会在下次DOM更新时自动同步状态。  
        }
      }
    },
    handleOpen (index, indexPath) {
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
      //当前页面的路由与跳转的路由不一样时跳转
      // if (this.$route.path !== item.path && !(this.$route.path === '/Home' && (item.path === '/'))) {
      this.$router.push({
        name: item.name
      })
      // }

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
