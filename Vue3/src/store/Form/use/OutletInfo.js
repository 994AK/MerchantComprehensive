import {reactive, ref, toRefs} from "vue";

function useOutletInfoEffect() {
    const Outlet = ref({
        sales_department: '',
        sales_principal: '',
        branch_phone: '',
    })

    const OutletList = reactive({
        outlets: []
    })

    const OutletAdd = (Array) => {
        const {outlets} = toRefs(OutletList)
        return  outlets.value = Array
    }

    return {Outlet, OutletList, OutletAdd}
}

export default useOutletInfoEffect
