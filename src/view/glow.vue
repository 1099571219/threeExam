<template>
  <div class="title">glow</div>
  <div ref="sceneTag" class="scene"></div>
</template>
<script setup>
import scene from '../components/scene.vue'
import {initThree} from  '../assets/js/threeInit'
import useCurrentInstance from '../util/useCurrentInstance'
import {ref,onMounted} from 'vue'
const {proxy} = useCurrentInstance();

const data = ref({
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
})

const sceneTag = ref();

onMounted(() => {
  initThree(data, sceneTag)
})


</script>
<style lang="scss">
@import '../assets/css/scene.scss';

 .title{
    position: fixed;
 }
</style>