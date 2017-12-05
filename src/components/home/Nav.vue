<template>
  <div class="m-nav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu :default-active="openNav" class="el-menu-vertical-demo" :unique-opened="nav.uniqueOpened" background-color="#404654" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1" ref="home">
            <template slot="title">
              <i class="el-icon-setting"></i>
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

<script type="text/ecmascript-6">
  export default {
    name: 'nav',
    data () {
      return {
        nav: {
          text: '首页',
          name: 'Home',
          active: '1-1',
          uniqueOpened: true
        },
        navData: [{
          text: '系统首页',
          name: 'Home',
          path: '/home',
          index: '1-1',
          node: [{
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
        // 跳转激活
        const path = event.$attrs['data-to']
        this.$router.push(path)
        this.activeIndex = index

        // 计算面包屑导航
        let crumb = []
        const node1 = {
          text: '后台首页',
          name: '',
          path: '',
          index: ''
        }
        crumb.push(node1)
        this.navData.forEach((data) => {
          data.node.forEach((result) => {
            if (result.index === index) {
              const node2 = {
                text: data.text,
                name: data.name,
                path: data.path,
                index: data.index
              }
              const node3 = {
                text: result.text,
                name: result.name,
                path: result.path,
                index: result.index
              }
              crumb.push(node2)
              crumb.push(node3)
            }
          })
        })
        this.$emit('navDataTransfer', crumb)
      }
    },
    beforeCreate: () => {},
    created: function () {
      // 初始化激活
      let active = ''
      const path = this.$route.path
      this.navData.forEach((result) => {
        result.node.forEach((result) => {
          if (path.indexOf(result.path) !== -1) {
            active = result.index
          }
        })
      })
      this.nav.active = active

      // 计算面包屑导航
      let crumb = []
      const node1 = {
        text: '后台首页',
        name: '',
        path: '',
        index: ''
      }
      crumb.push(node1)
      this.navData.forEach((data) => {
        data.node.forEach((result) => {
          if (result.index === active) {
            const node2 = {
              text: data.text,
              name: data.name,
              path: data.path,
              index: data.index
            }
            const node3 = {
              text: result.text,
              name: result.name,
              path: result.path,
              index: result.index
            }
            crumb.push(node2)
            crumb.push(node3)
          }
        })
      })
      this.$emit('navDataTransfer', crumb)
    }
  }
</script>

<style scoped>
  .m-nav{
    height: 100%;
    background-color: #404654;
  }
</style>
