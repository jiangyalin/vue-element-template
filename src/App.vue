<template>
  <div id="app">
    <el-container class="g-mn">
      <el-header class="m-hd">
        <div class="u-name">管理系统</div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo u-user" mode="horizontal" @select="handleSelect" background-color="#292d38" text-color="#fff" active-text-color="#ffd04b">
          <!--<el-menu-item index="1">处理中心</el-menu-item>-->
          <el-submenu index="2">
            <template slot="title">用户设置</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <!--<el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
        </el-menu>
      </el-header>
      <el-container>
        <el-aside class="m-nav" width="200px">
          <el-row class="tac">
            <el-col :span="24">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#404654" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航三ssd</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-container direction="vertical">
          <div class="m-nav-s">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
          </div>
          <el-main>
            <div class="g-main">
              <router-view/>
            </div>
          </el-main>
          <!--<el-footer class="g-ft">某某某有限公司</el-footer>-->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleOpen (name, keyPath) {
      console.log(name, keyPath)
    },
    handleClose (name, keyPath) {
      console.log(name, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
  @import "style/app/app.scss";
  @import "style/public/public.scss";
</style>
