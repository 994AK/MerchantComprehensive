import {ref} from "vue";

function useUploadEffect() {
    const Upload = ref({
        urlLogo: ''
    })
    return {Upload}
}

export default useUploadEffect
