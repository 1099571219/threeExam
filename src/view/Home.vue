<template>
  <div id="container">
    <proxy.$section />
    <router-view />
  </div>
</template> 


<script setup lang="ts">
import useCurrentInstance from '../util/useCurrentInstance'
const { proxy } = useCurrentInstance();


</script>



<style lang="scss" scoped>

#container{
  width: 100vw;
  height: 100vh;
}
</style>
