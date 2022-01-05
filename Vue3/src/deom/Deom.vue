<script setup>
import {storeToRefs} from "pinia"
import {useMainStore} from "@/store/main"

const {name, count, doubleCount,doubleCountPlus,addDefault} = storeToRefs(useMainStore())

</script>

<template>
  <div>
    {{ name }} -- {{ count }} -- {{ doubleCount }} -- {{doubleCountPlus(4)}}
    {{addDefault}}
  </div>
</template>

<style scoped>

</style>
