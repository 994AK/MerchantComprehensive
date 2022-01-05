import {defineStore} from 'pinia'
import {ref} from 'vue'
import _ from 'lodash'
import useMerchantEffect from './use/Merchant'
import useOutletInfoEffect from './use/OutletInfo'
import useDataTypeInfoEffect from './use/DataTypeInfo'
import useLandmarkEffect from './use/Landmark'
import useUploadEffect from './use/Upload'


export const useFormStore = defineStore('form', () => {
    const {MerchantInfo, LocationList, location} = useMerchantEffect()
    const {Outlet, OutletList, OutletAdd} = useOutletInfoEffect()
    const {DataType, DataTypeList, addressAdd, describeAdd, stateAdd, formatAdd, districtAdd} = useDataTypeInfoEffect()
    const {Landmark} = useLandmarkEffect()
    const {Upload} = useUploadEffect()

    const formData = ref( _.merge(MerchantInfo, Outlet, DataType, Landmark,Upload))

    /*
        触发修改按钮，改变全局的组件的值
        修改完毕后,提交组件重新提交即可
    */
    function Revise (row) {
      return formData.value = row
    }

    return {
        formData,
        MerchantInfo,
        LocationList, location, Revise,
        OutletList, OutletAdd,
        DataTypeList, addressAdd, describeAdd, stateAdd, formatAdd, districtAdd
    }
})
