import {reactive, ref, toRefs} from "vue";

function useDataTypeInfoEffect() {
    /*
    * 数据类型默认值
    * */
    const DataType = ref({
        activity: '',
        describe: '',
        merchant_status: '新增',
        format: '',
        discount_map: '',
        business_city: [],
    })

    const DataTypeList = reactive({
        address: [], // 活动类型
        activity_describe: [], // 活动描述
        activity_state: [], //商户状态
        activity_format: [], // 商户业态 && 优惠地图
        activity_business_district: [] //商圈地址
    })

    const addressAdd = (Array) => {
        const {address} = toRefs(DataTypeList)
        return  address.value = Array
    }
    const describeAdd = (Array) => {
        const {activity_describe} = toRefs(DataTypeList)
        return  activity_describe.value = Array
    }
    const stateAdd = (Array) => {
        const {activity_state} = toRefs(DataTypeList)
        return  activity_state.value = Array
    }
    const formatAdd = (Array) => {
        const {activity_format} = toRefs(DataTypeList)
        return  activity_format.value = Array
    }
    const districtAdd = (Array) => {
        const {activity_business_district} = toRefs(DataTypeList)
        return activity_business_district.value = Array
    }

    return {
        DataType, DataTypeList,
        addressAdd,
        describeAdd,
        stateAdd,
        formatAdd,
        districtAdd
    }
}

export default useDataTypeInfoEffect
