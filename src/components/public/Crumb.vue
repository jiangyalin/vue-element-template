<template>
  <div class="m-nav-s">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">{{crumb.nav1.text}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{crumb.nav2.text}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{crumb.nav3.text}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'crumb',
    data () {
      return {
        crumb: {
          nav1: {
            text: '后台首页'
          },
          nav2: {
            text: '首页'
          },
          nav3: {
            text: '系统首页'
          }
        }
      }
    },
    components: {},
    methods: {}
  }
</script>

<style scoped>
  .m-nav-s{
    padding: 20px;
    width: 100%;
    height: 30px;
    background-color: #E9EEF3;
    box-sizing: border-box;
  }
</style>
