import {reactive, toRefs} from "vue";

export default function useCurrentEffect() {
    const current = reactive({
        totalNum: 10,
        pageSize: 10,
        page: 1
    })


    //下一页 或者 上一页
    function handleCurrentChange(number) {
        const {page} = toRefs(current)
        return  page.value = number
    }

    //分页的总数
    function handleTotalNum(number) {
        const {totalNum} = toRefs(current)
       return  totalNum.value = number
    }

    return {handleCurrentChange, handleTotalNum, current}
}
