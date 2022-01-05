<script setup>
import {storeToRefs} from 'pinia'
import {useFormStore} from '@/store/Form/form'
import {onMounted, watchEffect} from "vue";
import {get} from "@/utils/request";

const FormStore = useFormStore()
const Store = storeToRefs(useFormStore())

const {OutletList, formData} = Store

onMounted(async ()=>{
  const getData = await get('/api/user/formalist')
  const {OutletAdd} = FormStore
  /*请求网点名称*/
  OutletAdd(getData.data_outlets);
})

</script>

<template>
  <!--  网点信息   -->
  <div class="ml-20 mt-5 pt-5 pb-5 w-5/6 bg-white">
    <h2 class="text-slate-900 pl-5 text-xl">网点信息</h2>
    <el-divider></el-divider>
    <div class="flex pl-5">
      <!--  选择网点    -->
      <el-form-item
          label="网点营业部"
          prop="sales_department"
      >
        <el-select v-model="formData.sales_department" placeholder="请选择网点">
          <el-option
              v-for="item in OutletList.outlets"
              :label="item.label"
              :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <!--  网点联系人  -->
      <el-form-item
          class="pl-5"
          label="网点联系人"
          prop="sales_principal"
      >
        <el-input v-model="formData.sales_principal" placeholder="请选择填写联系人"></el-input>
      </el-form-item>
      <!--   网点电话   -->
      <el-form-item
          class="pl-5"
          label="网点电话"
      >
        <el-input v-model="formData.branch_phone" placeholder="请选择填写网点电话"></el-input>
      </el-form-item>
    </div>
  </div>
</template>


<style scoped>

</style>
