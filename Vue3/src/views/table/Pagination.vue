<script setup>
import {useTableStore} from "@/store/Table/table";
import {storeToRefs} from 'pinia'

const {current} = storeToRefs(useTableStore())
const {handleCurrentChange} = useTableStore()

/* 分页 */
const handleCurrent = (val) => {
  handleCurrentChange(val)
}

</script>

<template>
  <!-- 分页 -->
  <el-pagination
      v-model:currentPage="current.page"
      layout="prev, pager, next,"
      :total="current.totalNum"
      @current-change="handleCurrent"
  >
  </el-pagination>
</template>

<style scoped>

</style>
