<script setup>

import {storeToRefs} from 'pinia'
import {useTableStore} from "@/store/Table/table";
import {useFormStore} from '@/store/Form/form'


const {todos} = storeToRefs(useTableStore())
const {showRevise,re,reAdd} = useTableStore()

const FormStore = useFormStore()

/* table表格数据 */
const columns = [
  {label: '二级分行', prop: 'secondary_branch', align: 'center'},
  {label: '营业部', prop: 'sales_department', align: 'center'},
  {label: '微信商户号', prop: 'business', align: 'center',width:"100"},
  {label: '商户名称', prop: 'business_name', align: 'center'},
  {label: '商户分店', prop: 'business_branch', align: 'center'},
  {label: '活动类型', prop: 'activity', align: 'center'},
  {label: '活动细类', prop: 'describe', align: 'center'},
  {label: '商户业态', prop: 'format', align: 'center'},
  {label: '所属商圈', prop: 'business_city', align: 'center'},
  {label: '营业执照名称', prop: 'license_name', align: 'center',width:"120"},
  {label: '地理位置', prop: 'business_city', align: 'center'},
  {label: '门店地理位置', prop: 'store_location', align: 'center',width:"120"},
  {label: '商户电话', prop: 'telephone', align: 'center'},
  {label: '网点负责人', prop: 'sales_principal', align: 'center',width:"100"},
  {label: '网点电话', prop: 'branch_phone', align: 'center'},
  {label: '优惠地图', prop: 'sales_principal', align: 'center'},
  {label: '优惠地图', prop: 'discount_map', align: 'center'},
  {label: '新增/删除', prop: 'merchant_status', align: 'center',width:"100"},
  {label: '准入条件', prop: 'landmark', align: 'center'},
  {label: '是否中行收单', prop: 'acquiring', align: 'center',width:"120"},
  {label: '是否中行个人结算户', prop: 'account', align: 'center',width:"150"},
  {label: '商户拓展渠道', prop: 'expand_channel', align: 'center',width:"150"},
  {label: '商户拓展联系人姓名', prop: 'expand_name', align: 'center',width:"150"},
  {label: '商户拓展联系人电话', prop: 'expand_telephone', align: 'center',width:"150"},
  {label: '营业执照号码', prop: 'business_number', align: 'center',width:"120"},
  {label: '营业时间', prop: 'business_hours', align: 'center',width:"120"},
  {label: '日均交易笔数', prop: 'average_day_amount', align: 'center',width:"120"},
  {label: '客单价', prop: 'customer_price', align: 'center'},
  {label: '录入时间', prop: 'date', align: 'center', width: "200"},
]

//显示修改数据,显示传值数据
const handleClick = (row) => {
    /*显示修改组件的内容*/
    showRevise()
    /*修改组件显示对应的信息*/
    reAdd(row)
}


</script>

<template>
  <!-- 表格 -->
  <el-table :data="todos" border fit>
    <el-table-column
        align='center'
        label="Logo"
        prop="urlLogo"
    >
      <template #default="scope">
        <img :src='`http://127.0.0.1:7001${scope.row.urlLogo}`' alt="没有图片">
      </template>
    </el-table-column>
    <el-table-column
        v-for="item in columns"
        v-bind="item"

    >
    </el-table-column>
    <!--  可修改  -->
    <el-table-column
        label="操作"
        align='center'
          width="100"
    >
      <template #default="scope">
        <el-button
            type="text"
            size="small"
            @click="handleClick(scope.row)">
          修改
        </el-button>

      </template>
    </el-table-column>
  </el-table>

</template>

<style scoped>
</style>
