<template>
    <router-view />
</template>

<script setup lang="ts">
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)

    window.addEventListener('resize', () => {
        document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`)
    })
</script>

<style lang="scss">
    @import '@/scss/app.scss';
</style>
