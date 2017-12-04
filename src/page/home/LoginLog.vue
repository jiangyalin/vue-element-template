<template>
  <div>
    <div class="m-menu">
      <el-button type="primary" icon="el-icon-circle-plus-outline" size="mini">添加</el-button>
      <el-button type="primary" icon="el-icon-delete" size="mini">删除</el-button>
      <el-button type="primary" icon="el-icon-edit" size="mini">编辑</el-button>
      <el-button type="primary" icon="el-icon-upload" size="mini">上传</el-button>
    </div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <div class="s-fr">
        <el-form-item label="审批人">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </div>
    </el-form>
    <el-table
      v-loading="loading"
      :data="tableData"
      stripe
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      tooltip-effect="dark"
      ref="multipleTable">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="date" label="时间" width="180"></el-table-column>
      <el-table-column prop="ip" label="IP" width="180"></el-table-column>
      <el-table-column prop="address" label="地区" width="240"></el-table-column>
      <el-table-column prop="liu" label="浏览器"></el-table-column>
      <el-table-column fixed="right" label="操作" width="130">
        <template slot-scope="scope">
          <el-button type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination class="m-page" small layout="prev, pager, next" :total="500"></el-pagination>
  </div>
</template>

<script type="text/ecmascript-6">
  const cityOptions = ['上海', '北京', '广州', '深圳']
  export default {
    data () {
      return {
        formInline: {
          user: '',
          region: ''
        },
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
      onSubmit () {
        console.log('submit!')
      },
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      }
    }
  }
</script>

<style>

</style>
