<template>
  <div class="m-nav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu :default-active="openNav" class="el-menu-vertical-demo" :unique-opened="nav.uniqueOpened" background-color="#404654" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1" ref="home">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
            <el-menu-item index="1-1" @click="to($event, '1-1')" data-to="/home/home">系统首页</el-menu-item>
            <el-menu-item index="1-2" @click="to($event, '1-2')" data-to="/home/home/userSet">账户设置</el-menu-item>
            <el-menu-item index="1-3" @click="to($event, '1-3')" data-to="/home/home/systemMessage">系统信息</el-menu-item>
            <el-menu-item index="1-4" @click="to($event, '1-4')" data-to="/home/home/loginLog">登录日志</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    name: 'nav',
    data () {
      return {
        nav: {
          name: 'Home',
          active: '1-1',
          uniqueOpened: true
        },
        navData: [{
          text: '系统首页',
          name: 'Home',
          path: '/home',
          index: '1-1'
        }, {
          text: '账户设置',
          name: 'app',
          path: '/userSet',
          index: '1-2'
        }, {
          text: '系统信息',
          name: 'app',
          path: '/systemMessage',
          index: '1-3'
        }, {
          text: '登录日志',
          name: 'app',
          path: '/loginLog',
          index: '1-4'
        }]
      }
    },
    components: {},
    computed: {
      openNav () {
        return this.nav.active
      }
    },
    methods: {
      to (event, index) {
        const path = event.$attrs['data-to']
        this.$router.push(path)
        this.activeIndex = index
      }
    },
    created: function () {
      let active = ''
      const path = this.$route.path
      this.navData.forEach(function (result) {
        if (path.indexOf(result.path) !== -1) {
          active = result.index
        }
      })
      this.nav.active = active
    }
  }
</script>

<style scoped>
  .m-nav{
    height: 100%;
    background-color: #404654;
  }
</style>
