<template lang="">
    <div class="section">
      <router-link :to="{name:'Glow'}"><button>辉光</button></router-link>
      <router-link :to="{name:'Fps'}"><button>第一人称操作</button></router-link>
    </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss">
.section {
    position: fixed;
    left: 5%;
    top: 10%;
    width: 10%;
    max-height: 50%;
    display: flex;
    flex-direction: column;
    button {
        flex: 1;
        width: 100%;
        padding: 1vh 0;
        background-color: transparent;
        color: white;
        font-style: normal;

        &:hover {
            background-color: #e2e5f2;
            cursor: pointer;
        }
    }
}
</style>