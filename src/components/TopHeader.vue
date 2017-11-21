<template>
  <div class="m-hd">
    <div class="u-name">管理系统</div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo u-menu" mode="horizontal" @select="handleSelect" background-color="#292d38" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1" data-to="/" @click="to($event)">后台首页</el-menu-item>
      <el-menu-item index="2" data-to="/app" @click="to($event)">分销中心</el-menu-item>
      <el-menu-item index="3" data-to="/" @click="to($event)">运营中心</el-menu-item>
      <el-menu-item index="4" data-to="/" @click="to($event)">财务中心</el-menu-item>
      <el-menu-item index="5" data-to="/" @click="to($event)">系统管理</el-menu-item>
    </el-menu>
    <div class="u-user">
      <div class="u-menu" background-color="#292d38">
        <div index="1" class="u-user-li">
          <i class="fa fa-user u-icon"></i>
        </div>
        <div index="4" class="u-user-li">
          <i class="fa fa-power-off u-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'topHeader',
    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    components: {},
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      },
      to (event) {
        const path = event.$attrs['data-to']
        this.$router.push(path)
      }
    }
  }
</script>

<style scoped>
  .m-hd{
    width: 100%;
  }
  .u-menu{
    display: flex;
    float: left;
    height: 60px;
  }
  .u-name{
    float: left;
    padding: 0 30px;
    width: 200px;
    box-sizing: border-box;
  }
  .u-user{
    display: flex;
    float: right;
  }
  .u-user-li{
    width: 60px;
    height: 60px;
    font-size: 20px;
    text-align: center;
    background-color: #292d38;
    transition: .3s;
  }
  .u-user-li:hover{
    background-color: #21242d;
    cursor: pointer;
  }
  .u-icon{
    color: #dcdcdc;
  }
</style>
