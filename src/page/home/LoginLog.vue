<template>
  <div>
    <div class="m-menu">
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </div>
    <el-table v-loading="loading" :data="tableData" stripe border style="width: 100%">
      <el-table-column prop="date" label="时间" width="180"></el-table-column>
      <el-table-column prop="ip" label="IP" width="180"></el-table-column>
      <el-table-column prop="address" label="地区" width="240"></el-table-column>
      <el-table-column prop="liu" label="浏览器"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="m-page" small layout="prev, pager, next" :total="500"></el-pagination>
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script type="text/ecmascript-6">
  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    data () {
      return {
        checkAll: false,
        checkedCities: ['上海', '北京'],
        cities: cityOptions,
        isIndeterminate: true,
        tableData: [{
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }, {
          date: '2017-07-03 14:36:21',
          ip: '183.14.135.1',
          address: '上海市浦东新区',
          liu: 'Firefox 45'
        }],
        loading: false
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
        })
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>

<style>

</style>
