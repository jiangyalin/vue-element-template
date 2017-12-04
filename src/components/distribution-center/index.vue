<template>
  <div class="g-mn">
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

<script type="text/ecmascript-6">
  import TopHeader from './../public/TopHeader.vue'
  import Nav from './Nav.vue'
  import Crumb from './../public/Crumb.vue'
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
    }
  }
</script>

<style>

</style>
