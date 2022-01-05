<script setup>
import MerchantInfo from '@/components/Form/MerchantInfo.vue'
import OutletInfo from '@/components/Form/OutletInfo.vue'
import DataType from '@/components/Form/DataTypeInfo.vue'
import Upload from '@/components/Form/Upload.vue'
import Landmark from "@/components/Form/Landmark.vue";
import {reactive, ref} from 'vue'
import {post} from "@/utils/request";
import {useFormStore} from '@/store/Form/form'

const FormStore = useFormStore()

const uploadForm = ref(null)

const submitForm = () => {
  uploadForm.value.validate(async (valid) => {
    if (valid) {
      const submit = await post('/api/user/submit', FormStore.formData)
      submit.status === 200 ? alert('录入成功') : alert('重复录入')
      console.log(submit)
    }
  })
}

const rule = reactive({
  business:[  { required: true, message: '请输入商户号', trigger: 'blur' }],
  business_name:[  { required: true, message: '请输入商户名称', trigger: 'blur' }],
  business_branch:[  { required: true, message: '请输入商户分店名称', trigger: 'blur' }],
  telephone:[  { required: true, message: '请输入商户电话', trigger: 'blur' }],
  license_name:[  { required: true, message: '请输入营业执照名', trigger: 'blur' }],
  store_location:[  { required: true, message: '请输入门店位置', trigger: 'blur' }],
  location:[  { required: true, message: '请输入地理位置', trigger: 'blur' }],
  sales_department:[  { required: true, message: '请选择网点营业部', trigger: 'blur' }],
  sales_principal:[  { required: true, message: '请输入网点联系人', trigger: 'blur' }],
  activity:[  { required: true, message: '请输入活动类型', trigger: 'blur' }],
  describe:[  { required: true, message: '请输入活动描述', trigger: 'blur' }],
  merchant_status:[  { required: true, message: '请输入活动状态', trigger: 'blur' }],
  format:[  { required: true, message: '请输入商户业态', trigger: 'blur' }],
  discount_map:[  { required: true, message: '请输入优惠地图', trigger: 'blur' }],
  business_city:[  { required: true, message: '请输入商圈', trigger: 'blur' }],
  landmark:[  { required: true, message: '请输入准入条件', trigger: 'blur' }],
  acquiring:[  { required: true, message: '是否中行收单', trigger: 'blur' }],
  account:[  { required: true, message: '是否中行个人结算户', trigger: 'blur' }],
  expand_channel:[  { required: true, message: '请输入商户拓展渠道', trigger: 'blur' }],
  expand_name:[  { required: true, message: '请输入商户拓展联系人姓名', trigger: 'blur' }],
  expand_telephone:[  { required: true, message: '请输入商户拓展联系人电话', trigger: 'blur' }],
  business_number:[  { required: true, message: '请输入营业执照号码', trigger: 'blur' }],
  business_hours:[  { required: true, message: '请输入营业时间', trigger: 'blur' }],
  average_day_amount:[  { required: true, message: '请输入日均交易笔数', trigger: 'blur' }],
  customer_price:[  { required: true, message: '请输入客单价', trigger: 'blur' }],
  urlLogo:[  { required: true, message: '请放入图片', trigger: 'blur' }],
})

</script>

<template>
  <Nav/>
  <el-form
      class=" flex  flex-col bg-slate-200 w-full h-full "
      label-position='right'
      label-width="150px"
      size="small"
      ref="uploadForm"
      :rules="rule"
      :model="FormStore.formData"
      :form="FormStore.formData"
  >
    <!-- 商户信息管理   -->
    <merchant-info/>
    <!-- 网点管理   -->
    <outlet-info/>
    <!-- 商户类型   -->
    <DataType/>
    <!-- 符合地标商户填的内容   -->
    <Landmark/>
    <!-- 上传Logo   -->
    <Upload/>
    <!--  最后提交  -->
    <el-form-item
        class="mt-5 mr-96"
    >
      <el-button @click="submitForm" class="w-full  h-16 "
      >
        <span class="text-2xl">提交</span>
      </el-button>
    </el-form-item>
  </el-form>
</template>


<style scoped>

</style>
