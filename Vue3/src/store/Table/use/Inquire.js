import {ref} from "vue";

export default function useInquireEffect(todos, reviseData) {
    const mongodbData = ref({
        business: '',
        business_name: '',
        date: '',
    })

    //查询查找功能
    function mongodbFind(value) {
       return  value.boolean ? todos.value = value.findData : alert('没有可查询的数据')
    }

    return {mongodbFind, mongodbData}

}
