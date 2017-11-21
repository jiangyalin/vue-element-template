<template>
  <div id="app">
    <el-container class="g-mn">
      <el-header>
        <topHeader></topHeader>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <navs></navs>
        </el-aside>
        <el-container direction="vertical">
          <crumb></crumb>
          <el-main>
            <div class="g-main">
              <router-view/>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import TopHeader from './components/TopHeader.vue'
  import Nav from './components/Nav.vue'
  import Crumb from './components/Crumb.vue'
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    components: {
      topHeader: TopHeader,
      navs: Nav,
      crumb: Crumb
    },
    methods: {
    },
    watch: { // 监听路由
      $route (e) {
        console.log('路由变动', e)
      }
    }
  }
</script>

<style>
  @import "style/app/app.scss";
  @import "style/public/public.scss";
</style>
