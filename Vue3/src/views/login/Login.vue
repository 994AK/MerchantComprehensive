<script setup >
import {useRouter} from 'vue-router'
import {reactive} from "vue";
import {post} from '@/utils/request'

const router = useRouter()
const start = reactive({
  username: '',
  password: ''
})

const handleLogin = async () => {
  try {
    const {username, password} = start
    if (!username || password === '') {

      return alert("请检查下 账号密码是否输入？")
    }

    const result = await post('/api/user/login', {
      username,
      password,
    })

    if (result?.status === 200) {
      localStorage.isLogin = result.token
      await router.push({name: 'Home'})
    }

  } catch (err) {
    console.log(err)
  }

}


</script>

<template>
<div class="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
  <main class=" flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
    <div class="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
      <div class="w-3/5 p-5">
       <div class="text-left font-bold">
         <span class="text-green-500">商户建设商户综合</span>管理平台
       </div>
        <div class="py-10">
          <h2 class="text-3xl font-bold text-green-500 mb-2">登录帐户</h2>
          <div class="border-2 w-10 bg-green-500 inline-block mb-2"></div>
        </div>
        <p class="text-gray-400 mb-4 ">使用您的帐户登录</p>
        <div class="flex flex-col items-center">
          <div class="bg-gray-100 w-64 p-2  flex items-center mb-3">
            <input type="text" v-model="start.username" placeholder="用户名 " class="bg-gray-100 outline-none text-sm flex-1 pl-2">
          </div>
          <div class="bg-gray-100 w-64 p-2 flex items-center">
            <input type="password" v-model="start.password" placeholder="密码" class="bg-gray-100 outline-none text-sm flex-1 pl-2">
          </div>
        </div>

      </div>
      <div class="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl relative  py-36 px-12">
        <h2 class="text-3xl font-bold mb-2">Hello,中行人员!</h2>
        <div class="border-2 w-10 bg-green-500 inline-block mb-2"></div>
        <p class="mb-10"> 希望你每天能快快乐乐,上班打起精神出来,打工人加油</p>
        <a href="#" class="border-2 border-white
         rounded-full px-12 py-2 inline-block font-semibold
         hover:bg-white hover:text-green-500" @click="handleLogin">登录</a>
        <router-link to="/register" class="absolute bottom-0 mb-4">切换注册</router-link>
      </div>

    </div>

  </main>
</div>

</template>


<style scoped>

</style>
