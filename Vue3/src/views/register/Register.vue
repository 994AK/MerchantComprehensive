<script setup>
import {useRouter} from 'vue-router'
import {reactive, ref} from "vue";
import {post} from '@/utils/request'

const router = useRouter()
const form = reactive({
  //用户名
  username: '',
  //密码
  password: '',
  //验证密码
  confirmPassword:'',
  //权限组
  auth:'general',
  //城市
  name:'请选择分行',
})

const options = ref([
  {
    value: '南宁',
    label: '南宁',
  },
  {
    value: '柳州',
    label: '柳州',
  },  {
    value: '桂林',
    label: '桂林',
  },  {
    value: '梧州',
    label: '梧州',
  },  {
    value: '北海',
    label: '北海',
  },  {
    value: '崇左',
    label: '崇左',
  },  {
    value: '来宾',
    label: '来宾',
  },  {
    value: '贺州',
    label: '贺州',
  },  {
    value: '玉林',
    label: '玉林',
  },  {
    value: '百色',
    label: '百色',
  },  {
    value: '河池',
    label: '河池',
  },  {
    value: '钦州',
    label: '钦州',
  },  {
    value: '防城港',
    label: '防城港',
  },  {
    value: '贵港',
    label: '贵港',
  },
])

const handleRegister = async () => {
  try {
    const {username, password,confirmPassword,name} = form
    if(username || password || confirmPassword|| name) {
      if(password === confirmPassword) {
        const result = await post('/api/user/register', form)

        if (result?.status === 200) {
          alert(result?.message)
          await router.push({name: 'Login'})
        }
        if(result?.status === 401) {
          alert(result?.message)
        }
      } else {
        alert('密码不相同')
      }

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
            <h2 class="text-3xl font-bold text-green-500 mb-2">注册帐户</h2>
            <div class="border-2 w-10 border-green-500 inline-block mb-2"></div>
          </div>
          <p class="text-gray-400 mb-4 ">注册下帐户吧</p>
          <div class="flex flex-col items-center">
            <div class="bg-gray-100 w-64 p-2  flex items-center mb-3">
              <input type="text" v-model="form.username" placeholder="用户名 " class="bg-gray-100 outline-none text-sm flex-1 pl-2">
            </div>
            <div class="w-64 p-2  flex items-center mb-3">
              <el-select v-model="form.name" placeholder="Select">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
            <div class="bg-gray-100 w-64 p-2 flex items-center mb-3">
              <input type="password" v-model="form.password" placeholder="密码" class="bg-gray-100 outline-none text-sm flex-1 pl-2">
            </div>
            <div class="bg-gray-100 w-64 p-2 flex items-center mb-3">
              <input type="password" v-model="form.confirmPassword" placeholder="确认密码" class="bg-gray-100 outline-none text-sm flex-1 pl-2">
            </div>
          </div>

        </div>
        <div class="w-2/5 bg-green-500 text-white relative rounded-tr-2xl rounded-br-2xl py-36 px-12">
          <h2 class="text-3xl font-bold mb-2">Hello,注册一个吧!</h2>
          <div class="border-2 w-10 border-white inline-block mb-2"></div>
          <p class="mb-10"> 注册成功后,你就即将成为打工人录入的生活,打工人加油</p>
          <a href="#" class="border-2 border-white
         rounded-full px-12 py-2 inline-block font-semibold
         hover:bg-white hover:text-green-500" @click="handleRegister">注册</a>
          <router-link to="/login" class="absolute bottom-0 mb-4">切换登录</router-link>

        </div>
      </div>

    </main>
  </div>




  <!--    <el-form :model="form" label-width="120px">-->
<!--      <el-form-item-->
<!--        label="登录用户名"-->
<!--        :required=true-->

<!--      >-->
<!--        <el-input v-model="form.username"> </el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item-->
<!--          label="选择城市"-->
<!--          :required=true-->
<!--      >-->
<!--        <el-select v-model="form.name" placeholder="Select">-->
<!--          <el-option-->
<!--              v-for="item in options"-->
<!--              :key="item.value"-->
<!--              :label="item.label"-->
<!--              :value="item.value"-->
<!--          >-->
<!--          </el-option>-->
<!--        </el-select>-->
<!--      </el-form-item>-->
<!--      <el-form-item-->
<!--          label="登录密码"-->
<!--          :required=true-->
<!--      >-->
<!--        <el-input v-model="form.password"> </el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item-->
<!--          label="验证密码"-->
<!--          :required=true-->
<!--      >-->
<!--        <el-input v-model="form.confirmPassword"> </el-input>-->
<!--      </el-form-item>-->
<!--      <el-form-item>-->
<!--        <el-button @click="handleRegister">注册</el-button>-->
<!--      </el-form-item>-->

<!--    </el-form>-->

</template>


<style scoped>

</style>
