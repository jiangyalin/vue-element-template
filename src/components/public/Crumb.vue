<template>
  <div class="m-nav-s">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="data in crumbs" :key="data.index">{{data.text}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'crumb',
    data () {
      return {}
    },
    props: ['crumbs'],
    components: {},
    methods: {},
    created: function () {
    },
    updated: function () {
    }
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
