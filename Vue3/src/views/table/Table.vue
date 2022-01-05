<script setup>
import {storeToRefs} from 'pinia'
import {onMounted, watchEffect} from "vue";
import MiniTable from "@/views/table/MiniTable.vue";
import InquireTable from "@/views/table/InquireTable.vue";
import Pagination from "@/views/table/Pagination.vue";

import Revise from "@/views/table/Revise.vue";
import {get} from "@/utils/request";
import {useTableStore} from '@/store/Table/table'
import Nav from "@/views/home/Head/Nav.vue";

const {current} = storeToRefs(useTableStore())
const {addTodos, handleTotalNum} = useTableStore()


/* 请求处理的数据 */
onMounted(async () => {
  /* 如果值有变化 */
  watchEffect(async () => {
    const forms = await get("/api/user/iii", {
      page: current.page,
      pageSize: current.pageSize
    })
    addTodos(forms.operateResult)
    handleTotalNum(forms.totalNum)
  })
})


</script>

<template>
  <Nav/>
  <div class="flex justify-center items-center flex-col   ">
    <!-- 查询 -->
    <div class="w-full bg-gradient-to-r from-cyan-500 to-blue-500  pb-10 pt-10">
      <inquire-table/>
    </div>
    <!-- 表格 -->
    <div class=" w-full flex justify-center items-center flex-col ">
      <mini-table />
      <!-- 分页 -->
      <pagination/>
    </div>

  </div>

  <!-- 修改组件 -->
  <revise/>

</template>


<style scoped>
a{
  text-align: center;
}
</style>
