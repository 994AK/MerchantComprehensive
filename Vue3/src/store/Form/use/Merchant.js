import {reactive, ref, toRefs} from "vue";

function useMerchantEffect() {
    const MerchantInfo = ref({
        business: '',
        business_name: '',
        business_branch: '',
        telephone: '',
        license_name: '',
        store_location: '',
        location:'',
    })

    const LocationList = reactive({
        siteList: []
    })

    /*
    * path: "@/components/Form/MerchantInfo.vue"
    * 发起请求,接收地理位置
    * */
    function location(Array) {
        const {siteList} = toRefs(LocationList)
        return   siteList.value = Array
    }

    /*
    * path: "@/views/table/MiniTable.vue";
    * 点击修改按钮 获取到对应的数据继续修改处理
    * */

    return {MerchantInfo, LocationList, location}

}

export default useMerchantEffect
