import {defineStore} from 'pinia'
import useTablesAddEffect from "@/store/Table/use/TablesAdd";
import useCurrentEffect from "@/store/Table/use/Current";
import useInquireEffect from "@/store/Table/use/Inquire"
import {ref} from 'vue'
import {useFormStore} from '@/store/Form/form'

function useReviseEffect() {
    const Form = useFormStore()
    const re = ref({})

    // 添加当前数据的信息
    const reAdd = (row) => {
        Form.Revise(row)
        console.log(Form.formData)
    }

    return {re,reAdd}
}


export const useTableStore = defineStore('table', () => {

    //显示表单逻辑
    const {todos, show, reviseData, addTodos, showRevise} = useTablesAddEffect()
    //分页逻辑
    const {current, handleCurrentChange, handleTotalNum} = useCurrentEffect()
    //查询逻辑
    const {mongodbFind, mongodbData} = useInquireEffect(todos)
    //修改逻辑
    const {re,reAdd} = useReviseEffect()

    return {
        todos, show, reviseData, addTodos, showRevise,
        current, handleCurrentChange, handleTotalNum,
        mongodbData, mongodbFind,
        re,reAdd
    }

})
