<template>
  <div class="m-nav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu :default-active="openNav" class="el-menu-vertical-demo" :unique-opened="nav.uniqueOpened" @open="handleOpen" @close="handleClose" background-color="#404654" text-color="#fff" active-text-color="#ffd04b">
          <el-submenu index="1" ref="home">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>首页</span>
            </template>
            <el-menu-item index="1-1">系统首页</el-menu-item>
            <el-menu-item index="1-2">账户设置</el-menu-item>
            <el-menu-item index="1-3">系统信息</el-menu-item>
            <el-menu-item index="1-4">登录日志</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>物业</span>
            </template>
            <el-menu-item index="2-1">物业列表</el-menu-item>
            <el-menu-item index="2-2">添加物业</el-menu-item>
            <el-menu-item index="2-3">物业审核</el-menu-item>
            <el-menu-item index="2-4">房型列表</el-menu-item>
            <el-menu-item index="2-5">添加房型</el-menu-item>
            <el-menu-item index="2-6">编辑房型</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>价格</span>
            </template>
            <el-menu-item index="3-1">价格码列表</el-menu-item>
            <el-menu-item index="3-2">添加价格码</el-menu-item>
            <el-menu-item index="3-3">计划列表</el-menu-item>
            <el-menu-item index="3-4">编辑价格码</el-menu-item>
            <el-menu-item index="3-5">房态房价</el-menu-item>
            <el-menu-item index="3-6">查看房态房价</el-menu-item>
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
          name: 'Home',
          active: '1-1',
          uniqueOpened: true
        },
        navData: [{
          text: '后台首页',
          name: 'app',
          path: '/',
          node: [{
            text: '首页',
            name: 'app',
            path: '/',
            index: '1',
            node: [{
              text: '系统首页',
              name: 'Home',
              path: '/',
              index: '1-1'
            }, {
              text: '账户设置',
              name: 'app',
              path: '/',
              index: '1-2'
            }, {
              text: '系统信息',
              name: 'app',
              path: '/',
              index: '1-3'
            }, {
              text: '登录日志',
              name: 'app',
              path: '/',
              index: '1-4'
            }]
          }]
        }, {
          text: '分销中心',
          name: 'app',
          path: '/app',
          node: [{
            text: '物业',
            name: 'DistributionCenter',
            path: '/app',
            index: '2',
            node: [{
              text: '物业列表',
              name: 'DistributionCenter',
              path: '/app',
              index: '2-1'
            }, {
              text: '添加物业',
              name: 'app',
              path: '/app',
              index: '2-2'
            }, {
              text: '物业审核',
              name: 'app',
              path: '/app',
              index: '2-3'
            }, {
              text: '房型列表',
              name: 'app',
              path: '/app',
              index: '2-4'
            }, {
              text: '添加房型',
              name: 'app',
              path: '/app',
              index: '2-5'
            }, {
              text: '编辑房型',
              name: 'app',
              path: '/app',
              index: '2-6'
            }]
          }, {
            text: '价格',
            name: '',
            path: '',
            index: '3',
            node: [{
              text: '价格码列表',
              name: '',
              path: '',
              index: '3-1'
            }, {
              text: '添加价格码',
              name: '',
              path: '',
              index: '3-2'
            }, {
              text: '计划列表',
              name: '',
              path: '',
              index: '3-3'
            }, {
              text: '编辑价格码',
              name: '',
              path: '',
              index: '3-4'
            }, {
              text: '房态房价',
              name: '',
              path: '',
              index: '3-5'
            }, {
              text: '查看房态房价',
              name: '',
              path: '',
              index: '3-6'
            }]
          }, {
            text: '库存',
            name: '',
            path: '',
            index: '4',
            node: [{
              text: '物业库存',
              name: '',
              path: '',
              index: '4-1'
            }, {
              text: '编辑库存',
              name: '',
              path: '',
              index: '4-2'
            }]
          }, {
            text: '渠道',
            name: '',
            path: '',
            index: '5',
            node: [{
              text: '渠道列表',
              name: '',
              path: '',
              index: '5-1'
            }, {
              text: '添加渠道',
              name: '',
              path: '',
              index: '5-2'
            }, {
              text: '渠道绑定',
              name: '',
              path: '',
              index: '5-3'
            }]
          }, {
            text: '订单',
            name: '',
            path: '',
            index: '6',
            node: [{
              text: '订单列表',
              name: '',
              path: '',
              index: '6-1'
            }, {
              text: '订单详情',
              name: '',
              path: '',
              index: '6-2'
            }, {
              text: '订单录入',
              name: '',
              path: '',
              index: '6-3'
            }]
          }]
        }]
      }
    },
    components: {},
    computed: {
      openNav () {
        console.log('zzz', this.nav.active)
        return this.nav.active
      }
    },
    methods: {
      handleOpen (name, keyPath) {
        console.log(name, keyPath)
      },
      handleClose (name, keyPath) {
        console.log(name, keyPath)
      }
    },
    watch: { // 监听路由
      $route (e) {
        let name = ''
        let index = ''
        this.navData.forEach(function (result) {
          result.node.forEach(function (result) {
            result.node.forEach(function (result) {
              if (result.name === e.name) {
                name = result.name
                index = result.index
              }
            })
          })
        })
        this.nav.name = name
        this.nav.active = index
      }
    }
  }
</script>

<style scoped>
  .m-nav{
    height: 100%;
    background-color: #404654;
  }
</style>
