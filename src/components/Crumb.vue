<template>
  <div class="m-nav-s">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'crumb',
    data () {
      return {}
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
