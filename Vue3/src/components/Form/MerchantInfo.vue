<script setup>

import {storeToRefs} from 'pinia'
import {useFormStore} from '@/store/Form/form'
import {onMounted} from "vue";
import {get} from "@/utils/request";


const FormStore = useFormStore()
const Store = storeToRefs(useFormStore())
const {formData} = Store

onMounted(async ()=>{
  const getData = await get('/api/user/formalist')
  const {location} = FormStore
  /*请求具体地理地址*/
  location(getData.data_site);
})

</script>

<template>
  <!--  商户信息   -->
  <div class="ml-20 mt-5 pt-5  pb-5 w-5/6 bg-white">
    <h2 class="text-slate-900 pl-5 text-xl">商户信息管理</h2>
    <el-divider></el-divider>
    <div class=" w-5/6 pl-5">
      <el-form-item
          label="微信商户号"
          prop="business"
      >
        <el-input
            v-model="formData.business"
            placeholder="请填写微信商户号"

        ></el-input>
      </el-form-item>
      <el-form-item
          label="商户名称"
          prop="business_name"
      >
        <el-input
            v-model="formData.business_name"
            placeholder="请填写商户名称"
        ></el-input>
      </el-form-item>
      <el-form-item
          label="商户分店名称"
          prop="business_branch"
      >
        <el-input
            v-model="formData.business_branch"
            placeholder="请填写商户分店名称"
        ></el-input>
      </el-form-item>
      <el-form-item
          label="商户电话"
          prop="telephone"
      >
        <el-input
            v-model="formData.telephone"
            placeholder="请填写商户电话"
        ></el-input>
      </el-form-item>
      <el-form-item
          label="营业执照名"
          prop="license_name"
      >
        <el-input
            v-model="formData.license_name"
            placeholder="请填写营业执照名"
        ></el-input>
      </el-form-item>
      <el-form-item
          label="门店位置"
          prop="store_location"
      >
        <el-input
            v-model="formData.store_location"
            placeholder="请填写门店位置"
        ></el-input>
      </el-form-item>
      <el-form-item
          label="地理位置"
          prop="location"
      >
        <el-cascader
            class="w-full"
            v-model="formData.location"
            :options="FormStore.LocationList.siteList"
            placeholder="请选择地理位置"
            :props="{expandTrigger:'hover'}"
        ></el-cascader>
      </el-form-item>
    </div>
  </div>
</template>

