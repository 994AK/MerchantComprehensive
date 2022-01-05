import {ref} from "vue";

export default function useTablesAddEffect() {
    const todos = ref([])
    //显示修改菜单
    const show = ref(false)


    const reviseData = ref([])

    // 添加数据
    function addTodos(text) {
       return  todos.value = text
    }

    //修改键显示数据
    function showRevise() {
       return  show.value = true
    }

    return {todos, show, reviseData, addTodos, showRevise}
}
