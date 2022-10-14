<template>
    <div class="v-sign-up my6 mx4">
        <c-me />
        <h1 class="text-center mb4">😁</h1>
        <h4 class="text-center mb6">HOLA, GRACIAS ESPERO TU MENSAJITO</h4>
        <div class="container">
            <w-card class="mb6">
                <w-form>
                    <w-grid class="wrapper" columns="1" gap="4">
                        <w-input v-model="email" color="black" label="Nombre" label-color="pink" />
                        <w-input v-model="email" color="black" label="Apellido" label-color="pink" />
                        <w-input v-model="email" color="black" label="Correo electrónico" label-color="pink" />
                        <w-input v-model="email" color="black" label="Contraseña" label-color="pink" />
                        <w-button bg-color="pink-light5" color="pink" lg>REGISTRATE</w-button>
                    </w-grid>
                </w-form>
            </w-card>
            <div class="text-center">
                <h4 class="mb4">¿TIENES UNA CUENTA?</h4>
                <w-button bg-color="pink-light5" color="pink" :route="{ name: 'sign-in' }">INICIA SESIÓN</w-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { createUserWithEmailAndPassword } from 'firebase/auth'
    import { auth } from '@/libs/firebase'

    import CMe from '@/components/CMe.vue'

    const name = ref('')
    const surname = ref('')
    const email = ref('')
    const password = ref('')

    const submitHandler = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
            const user = userCredential.user
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }
</script>

<style lang="scss">
    .v-sign-up {
        .container {
            max-width: 400px;
        }
    }
</style>
