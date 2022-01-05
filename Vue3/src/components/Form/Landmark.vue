<script setup>
import {storeToRefs} from 'pinia'
import {useFormStore} from '@/store/Form/form'

const Store = storeToRefs(useFormStore())

const {formData} = Store


const activityOptions = [
  {value: "1、直营门店不少于5个的连锁", label: "1、直营门店不少于5个的连锁"},
  {value: "2、大众点评或口碑评分3分以上/米其林/黑珍珠上榜的高品质单店，面积不小于50平米", label: "2、大众点评或口碑评分3分以上/米其林/黑珍珠上榜的高品质单店，面积不小于50平米"},
  {value: "3、在客流量排名前十枢纽机场/年销售额20亿元以上商圈/进博会/消博会展馆内", label: "3、在客流量排名前十枢纽机场/年销售额20亿元以上商圈/进博会/消博会展馆内"},
  {value: "4、一事一议向总行报批后准入", label: "4、一事一议向总行报批后准入"},
]

const acOptions = [
  {value: "是", label: "1.是"},
  {value: "否", label: "2.否"},
]


</script>

<template>
  <div
      class="ml-20 mt-5 pt-5 pb-5 w-5/6 bg-white flex flex-col"
      v-if="formData.activity[0] === '地标商圈'"
  >
    <h2 class="text-slate-900 pl-5 text-xl">地标商圈信息</h2>
    <el-divider></el-divider>

      <div class=" w-1/2 pl-5 ">
        <el-form-item
            label="准入条件"
            prop="landmark"
        >
          <el-cascader
              class="w-full"
              v-model="formData.landmark"
              :options="activityOptions"
              placeholder="选择准入条件"
          ></el-cascader>
        </el-form-item>
        <el-form-item
            label="中行收单"
            prop="acquiring"
        >
          <el-cascader
              class="w-full"
              v-model="formData.acquiring"
              :options="acOptions"
              placeholder="是否中行收单"
          ></el-cascader>
        </el-form-item>
        <el-form-item
            label="是否中行个人结算户"
            prop="account"
        >
          <el-cascader
              class="w-full"
              v-model="formData.account"
              :options="acOptions"
              placeholder="是否中行个人结算户"
          ></el-cascader>
        </el-form-item>
      </div>

      <div class="w-1/2 pl-5 ">
        <el-form-item
            label="商户拓展渠道"
            prop="expand_channel"
        >
          <el-input v-model="formData.expand_channel" placeholder="填写商户拓展渠道"></el-input>
        </el-form-item>

        <el-form-item
            label="商户拓展联系人姓名"
            prop="expand_name"
        >
          <el-input v-model="formData.expand_name" placeholder="填写商户拓展联系人姓名"></el-input>
        </el-form-item>

        <el-form-item
            label="商户拓展联系人电话"
            prop="expand_telephone"
        >
          <el-input v-model="formData.expand_telephone" placeholder="填写商户拓展联系人电话"></el-input>
        </el-form-item>

        <el-form-item
            label="营业执照号码"
            prop="business_number"
        >
          <el-input v-model="formData.business_number" placeholder="填写营业执照号码"></el-input>
        </el-form-item>

        <el-form-item
            label="营业时间"
            prop="business_hours"
        >
          <el-input v-model="formData.business_hours" placeholder="填写营业时间"></el-input>
        </el-form-item>

        <el-form-item
            label="日均交易笔数"
            prop="average_day_amount"
        >
          <el-input v-model="formData.average_day_amount" placeholder="填写日均交易笔数"></el-input>
        </el-form-item>

        <el-form-item
            label="客单价"
            prop="customer_price"
        >
          <el-input v-model="formData.customer_price" placeholder="填写客单价"></el-input>
        </el-form-item>
      </div>
  </div>
</template>


<style scoped>

</style>
