<script setup>
import {postBlob} from '@/utils/request'
import {storeToRefs} from "pinia";
import {useTableStore} from "@/store/Table/table";
const {todos} = storeToRefs(useTableStore())

/*
*  导出Excel功能
* */
const ExcelDownloadClick = async (val) => {

  const excel = await postBlob('/api/user/excel', val).catch((err) => console.log(err))
  const url = window.URL.createObjectURL(
      new Blob([excel], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      }),
  )

  console.log(url)
  const link = document.createElement('a');
  link.href = url;
  const fileName = '数据表.xlsx';
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  URL.revokeObjectURL(link.href);
  document.body.removeChild(link);


}

</script>

<template>
  <el-button @click="ExcelDownloadClick(todos)">下载Excel</el-button>
</template>

<style scoped>

</style>
