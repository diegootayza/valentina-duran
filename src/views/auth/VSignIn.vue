<template>
    <div class="v-sign-in my6 mx4">
        <c-me />
        <h1 class="text-center mb4">😁</h1>
        <h4 class="text-center mb6">HOLA, DE NUEVO</h4>
        <div class="container">
            <w-card class="mb6">
                <w-form>
                    <w-grid class="wrapper" columns="1" gap="4">
                        <w-input v-model="email" color="black" label="Correo electrónico" label-color="pink" />
                        <w-input v-model="password" color="black" label="Contraseña" label-color="pink" />
                        <w-button bg-color="pink-light5" color="pink" lg>INICIA SESIÓN</w-button>
                    </w-grid>
                </w-form>
            </w-card>
            <div class="text-center">
                <h4 class="mb4">¿NO TIENES UNA CUENTA?</h4>
                <w-button bg-color="pink-light5" color="pink" :route="{ name: 'sign-up' }">REGÍSTRATE</w-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import CMe from '@/components/CMe.vue'

    const email = ref('')
    const password = ref('')
</script>

<style lang="scss">
    .v-sign-in {
        .container {
            max-width: 400px;
        }
    }
</style>
