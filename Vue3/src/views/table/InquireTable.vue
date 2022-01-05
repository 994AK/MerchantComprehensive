<script setup>
import {useTableStore} from "@/store/Table/table";
import {post} from "@/utils/request";
import {storeToRefs} from 'pinia'
import Excel from '@/views/table/Excel.vue'

const {mongodbData} = storeToRefs(useTableStore())
const {mongodbFind} = useTableStore()

//筛选查找
const submitForm = async () => {

  //数据
  const dataFind = await post("/api/user/condition", mongodbData.value)

  mongodbFind(dataFind)
}
</script>

<template>
  <!-- 查询 -->

    <el-form
        class="flex flex-col  "
        :form="mongodbData"
        label-width="120px"
    >

      <div class="flex ml-20">
        <el-form-item
          label="微信商户号:"
        >
          <el-input placeholder="微信商户号" v-model="mongodbData.business"/>
        </el-form-item>
        <el-form-item
            label="商户名称:"
        >
          <el-input placeholder="商户名称" v-model="mongodbData.business_name"/>
        </el-form-item>
      </div>
      <div class="ml-20">
        <el-form-item
          label="选择时间"
        >
          <el-date-picker
              v-model="mongodbData.date"
              type="daterange"
              range-separator="To"
              start-placeholder="Start date"
              end-placeholder="End date"
          >
          </el-date-picker>
        </el-form-item>

      </div>
      <div>
        <el-form-item>
          <el-button  type="primary" @click="submitForm()"
          >查询
          </el-button>
          <!-- 导出Excel -->
          <excel/>
        </el-form-item>
      </div>
    </el-form>
</template>


<style scoped>

</style>
