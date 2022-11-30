<template >
    <div class="container">
    </div>
</template>
<script setup>
import {initThree} from  '../assets/js/threeInit'
import {ref,onMounted} from 'vue'

const props = defineProps({
    data:Object
})

const sceneTag = ref();

onMounted(()=>{
    initThree( props.data,sceneTag );
    
})


</script>
<style lang="scss">
.container {
    
}
</style>