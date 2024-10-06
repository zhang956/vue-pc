<!--
 * @Description: 左边菜单栏
 * @Author: Zhangwenzhe
 * @Github: KOBE
 * @Date: 2024-09-09 16:07:14
 * @LastEditors: Zhangwenzhe
-->
<template>
  <el-menu default-active="1-4-1"
           class="el-menu-vertical-demo"
           @open="handleOpen"
           @close="handleClose"
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
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
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
