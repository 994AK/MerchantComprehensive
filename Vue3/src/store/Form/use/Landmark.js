import {ref} from "vue";

function useLandmarkEffect() {
    const Landmark = ref({
        landmark: '',
        acquiring: '',
        account: '',
        expand_channel: '',
        expand_name: '',
        expand_telephone: '',
        business_number: '',
        business_hours: '',
        average_day_amount: '',
        customer_price: '',
    })

    return {Landmark}
}

export default useLandmarkEffect
