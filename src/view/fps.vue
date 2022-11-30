<template>
  <div class="title">第一人称操作</div>
  <div ref="sceneTag" class="scene"></div>

</template>
<script setup>
import useCurrentInstance from '../util/useCurrentInstance'
import {initThree} from  '../assets/js/threeInit'
import scene from '../components/scene.vue'
import { ref, onMounted } from 'vue';
const { proxy } = useCurrentInstance();

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
.title {
  position: fixed;
}

</style>