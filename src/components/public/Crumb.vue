<template>
  <div class="m-nav-s">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="data in crumbs" :key="data.index">{{data.text}}</el-breadcrumb-item>
      <!--<p @click="click">d</p>-->
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'crumb',
    data () {
      return {}
    },
    props: ['crumbs'],
    components: {},
    methods: {},
    created: function () {
//      console.log('ttt', this.crumbs)
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
