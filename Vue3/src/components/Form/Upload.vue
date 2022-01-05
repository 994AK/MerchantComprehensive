<script setup>
import {storeToRefs} from 'pinia'
import {useFormStore} from '@/store/Form/form'

const FormStore = useFormStore()

// const imageUrl = ref('')
const handleRequest = (e) => {

  try {
      const fd = new FileReader()
      fd.readAsDataURL(e.file)
      //文件转成base64给后端
      fd.onload = async () => {
        FormStore.formData.urlLogo = fd.result
        console.log(FormStore.formData.urlLogo,222)
        // await post('http://127.0.0.1:7001/api/user/upload', {
        //   imgUrl: fd.result,
        // }).then(res => {
        //   imageUrl.value = res
        // })
      }
      // await post('http://127.0.0.1:7001/api/user/upload',{
      //   blobUrl: URL.createObjectURL(e.file),
      // }).then(res=>{
      //   imageUrl.value = res
      // })
  } catch (err) {
    alert('请上传图片')
  }
}
</script>

<template>
    <div class="ml-20 mt-5 pt-5 pb-5 w-5/6 bg-white">

      <h2 class="text-slate-900 pl-5 text-xl">上传login</h2>
      <el-divider></el-divider>
      <div class="flex">
        <el-form-item
            prop="urlLogo"
        >
        <el-upload
            action=""
            accept="image/gif, image/jpeg"
            :http-request="handleRequest"
            :show-file-list="false">
          <img
              v-if=" FormStore.formData.urlLogo"
              :src=" FormStore.formData.urlLogo"
              class="avatar" alt=""/>
          <div v-else>
            <i class="el-icon-plus avatar-uploader-icon"></i>
            <div class="el-upload__text">点击上传login</div>

          </div>
          <div v-if="!FormStore.formData.urlLogo" class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
        </el-upload>
        </el-form-item>
      </div>
    </div>


</template>


<style scoped>

</style>
