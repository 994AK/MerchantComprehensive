<script setup>
import {storeToRefs} from 'pinia'
import {useFormStore} from '@/store/Form/form'
import {onMounted, watchEffect,watch} from "vue";
import {get} from "@/utils/request";

const FormStore = useFormStore()
const Store = storeToRefs(useFormStore())

const {DataTypeList, formData} = Store

onMounted(async () => {
  const getData = await get('/api/user/formalist')
  const {addressAdd, describeAdd, stateAdd, formatAdd, districtAdd} = FormStore
  /*请求活动类型*/
  addressAdd(getData.data_address);
  /*请求活动描述*/
  describeAdd(getData.data_describe);
  /*请求商户业态 && 优惠地图*/
  formatAdd(getData.data_format);
  /*请求商户状态*/
  stateAdd(getData.data_state);

  watch(
      ()=> FormStore.formData.activity,
      (count, prevCount) => {
            const district = getData.data_business_district.filter(item => item.value === FormStore.formData.activity[0])
            /*请求商圈地址*/
            return districtAdd(district[0].children[0].children)
      }
  )

})
</script>

<template>
  <!--  数据类型   -->
  <div class="ml-20 mt-5 pt-5 pb-5 w-5/6 bg-white">
    <h2 class="text-slate-900 pl-5 text-xl">数据类型</h2>
    <el-divider></el-divider>
    <div class="flex flex-wrap">
      <el-form-item
          label="活动类型"
          prop="activity"
      >
        <el-cascader
            class="w-96 pl-5"
            v-model="formData.activity"
            :options="DataTypeList.address"
            :props="{expandTrigger:'hover'}"
            placeholder="活动类型"
        ></el-cascader>
      </el-form-item>
      <el-form-item
          label="活动描述"
          prop="describe"
      >
        <el-select
            class="w-96 pl-5"
            v-model="formData.describe"
            placeholder="请选择活动描述"
        >
          <el-option
              v-for="option in DataTypeList.activity_describe"
              :key="option.value"
              :label="option.label"
              :value="option.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
          label="活动状态"
          prop="merchant_status"
      >
        <el-select
            class="w-96 pl-5"
            v-model="formData.merchant_status"
            placeholder="请选择活动描述"
        >
          <el-option
              v-for="option in DataTypeList.activity_state"
              :key="option.value"
              :label="option.label"
              :value="option.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
          label="商户业态"
          prop="format"
      >
        <el-select
            class="w-96 pl-5"
            v-model="formData.format"
            placeholder="请选择活动描述"
        >
          <el-option
              v-for="option in DataTypeList.activity_format"
              :key="option.value"
              :label="option.label"
              :value="option.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
          label="优惠地图"
          prop="discount_map"
      >
        <el-select
            class="w-96 pl-5"
            v-model="formData.discount_map"
            placeholder="请选择优惠地图"
        >
          <el-option
              v-for="option in DataTypeList.activity_format"
              :key="option.value"
              :label="option.label"
              :value="option.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item
          label="商圈"
          prop="business_city"
      >
        <el-select
            class="w-96 pl-5"
            v-model="formData.business_city"
            placeholder="请选择商圈"
        >
          <el-option
              v-for="option in DataTypeList.activity_business_district"
              :key="option.value"
              :label="option.label"
              :value="option.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </div>
  </div>
</template>


<style scoped>

</style>
