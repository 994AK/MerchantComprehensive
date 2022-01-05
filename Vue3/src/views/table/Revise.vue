<script setup>
import {storeToRefs} from "pinia";
import {ref} from "vue";
import MerchantInfo from '@/components/Form/MerchantInfo.vue'
import OutletInfo from '@/components/Form/OutletInfo.vue'
import DataType from '@/components/Form/DataTypeInfo.vue'
import Landmark from "@/components/Form/Landmark.vue";
import {useTableStore} from '@/store/Table/table'
import {useFormStore} from "@/store/Form/form";
import {post} from '@/utils/request'

const step = ref(1)
const {show} = storeToRefs(useTableStore())
const FormStore = useFormStore()

// function Next() {
//   step.value >= 4 ? step.value = 1 : step.value++
// }

function submit() {
  /*
  *  在页面中点击修改后,就会把值传给全局的Form进行修改
  * */
  show.value = false

  post('/api/user/update', FormStore.formData)
      .then(res=>{
        alert(res.message)
      });


}
</script>

<template>
  <el-card
      class=" inset-x-20 top-0 z-20 "
      v-if="show"
  >
    <div class="card-header">
      <el-form
          label-position='right'
          label-width="150px"
          size="small"
          :model="FormStore.formData"
          :form="FormStore.formData"
      >
        <merchant-info/>
        <outlet-info/>
        <data-type/>
        <Landmark/>
        <el-button @click="submit">修改数据</el-button>
      </el-form>

    </div>
  </el-card>
</template>


<style scoped>

</style>
