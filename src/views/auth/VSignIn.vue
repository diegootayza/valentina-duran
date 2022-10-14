<template>
    <div class="v-sign-in my6 mx4">
        <c-me />
        <h1 class="text-center mb4">😁</h1>
        <h4 class="text-center mb6">HOLA, DE NUEVO</h4>
        <div class="container">
            <w-card class="mb6">
                <w-form @success="onSuccess">
                    <w-grid class="wrapper" columns="1" gap="4">
                        <w-input v-model="phone" color="black" label="Numero de celular" label-color="pink" type="text" :validators="[validators.phone]" />
                        <div id="recaptcha"></div>
                        <w-input v-model="code" color="black" label="Código de verificación" label-color="pink" type="text" :validators="[validators.code]" />
                        <w-button bg-color="pink-light5" color="pink" lg type="submit">INICIA SESIÓN</w-button>
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
    import { onMounted, ref } from 'vue'

    import { z } from 'zod'

    import { RecaptchaVerifier } from 'firebase/auth'

    import { auth } from '@/libs/firebase'

    import CMe from '@/components/CMe.vue'

    const phone = ref('')
    const code = ref('')

    const validators = ref<any>({
        phone: (value: any) => {
            const { error }: any = z.string().min(1).max(12).safeParse(value)

            let response = true

            if (error) {
                const errorFormat = error.format()
                response = errorFormat._errors[0]
            }

            return response
        },
        code: (value: any) => {
            const { error }: any = z.string().min(1).max(12).safeParse(value)

            let response = true

            if (error) {
                const errorFormat = error.format()
                response = errorFormat._errors[0]
            }

            return response
        },
    })

    const onSuccess = () => {}

    onMounted(() => {
        ;(window as any).recaptchaVerifier = new RecaptchaVerifier(
            'recaptcha',
            {
                size: 'normal',
            },
            auth
        )
    })
</script>

<style lang="scss">
    .v-sign-in {
        .container {
            max-width: 400px;
        }
    }
</style>
