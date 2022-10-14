<template>
    <main class="v-home my6 mx4">
        <c-me text="" />
        <div class="container">
            <h1 class="text-center mb4">😁</h1>
            <h2 class="text-center mb2">HOLA, SOY VALENTINA DURAN</h2>
            <h3 class="text-center mb12">BIENVENID(👩/👨) A MI SITIO WEB</h3>
            <w-card class="text-center mb12">
                <h2 class="mb4">CARTA DE DESPEDIDA</h2>
                <p class="mb2">
                    Con mucha nostalgia quiero agradecer a las personas que durante años me ayudaron a formarme como persona y en el valioso camino del saber.
                </p>
                <p class="mb2">
                    A los profesores que con sus enseñanzas, paciencia, amor, apoyo y sabios consejos han logrado en mí una persona con muchos valores,
                    principios y con grandes sueños frente al conocimiento y a la vida.
                </p>
                <p class="mb2">
                    Gracias por su paciencia, por su cariño, por el amor y la pasión con las que me enseñaron, estoy segura de que nos los voy a defraudar,
                    porque de ellos aprendí que debo superarme constantemente como persona, alumna, hija y amiga.
                </p>
                <p class="mb2">
                    A mis compañeros quiero decirles que hoy terminamos una etapa en nuestras vidas, la amistad que forjamos en todo este tiempo perdurará por
                    muchos años.
                </p>
                <p class="mb2">A todos mis compañeros los llevare por siempre en mi corazón con todos los recuerdos, risas y reñidas de profes jajaja.</p>
                <p class="mb2">
                    Siento nostalgia igualmente, de despedirme de mi segundo hogar, mi segunda familia del que me llevo grandes y maravillosos recuerdos tanto
                    buenos como malos.
                </p>
                <p class="mb2">
                    Aunque sé que este no es un Adiós, sino un hasta luego, porque cuando se ha aprendido a convivir en familia se regresa a ella tarde o
                    temprano.
                </p>
                <p>Hoy me siento honrada de haber podido hacer parte de la familia Maryknoll . Gracias a todos por ser parte de mí.</p>
            </w-card>
            <div class="mb12">
                <h3 class="text-center mb4">GALERIA DE IMAGENES</h3>
                <w-flex class="text-center" wrap>
                    <div class="xs12 sm6 lg3 pa2">
                        <div class="pink-light5--bg pa4">
                            <w-image :height="200" src="/images/galery-1.jpg" width="100%" />
                        </div>
                    </div>
                    <div class="xs12 sm6 lg3 pa2">
                        <div class="pink-light5--bg pa4">
                            <w-image :height="200" src="/images/galery-2.jpg" width="100%" />
                        </div>
                    </div>
                    <div class="xs12 sm6 lg3 pa2">
                        <div class="pink-light5--bg pa4">
                            <w-image :height="200" src="/images/galery-3.jpg" width="100%" />
                        </div>
                    </div>
                    <div class="xs12 sm6 lg3 pa2">
                        <div class="pink-light5--bg pa4">
                            <w-image :height="200" src="/images/galery-4.jpg" width="100%" />
                        </div>
                    </div>
                </w-flex>
            </div>
            <div class="mb12">
                <h3 class="text-center mb4">COSAS QUE ME GUSTAN HACER</h3>
                <w-list v-model="selection" :items="items" multiple />
            </div>
            <div class="text-center">
                <h3 class="mb4">¿QUIERES DEJARME UN MENSAJITO?</h3>
                <w-button bg-color="pink-light5" lg :route="{ name: 'sign-in' }">INICIA SESIÓN</w-button>
            </div>
        </div>
    </main>
</template>

<script setup lang="ts">
    import CMe from '@/components/CMe.vue'
    import { ref } from 'vue'

    const items = ref([
        { label: 'Me gusta aprender nuevas cosas', value: 1, color: 'orange' },
        { label: 'Me gusta maquillar, peinar hacer mascarillas', value: 2, color: 'cyan' },
        { label: 'Me gusta el tema estético', value: 3, color: 'brown' },
        { label: 'Me gusta maquillar, peinar hacer mascarillas', value: 4, color: 'red' },
        { label: 'Me gusta ir a entrenar', value: 5, color: 'purple' },
        { label: 'Me gusta salir ', value: 6, color: 'indigo' },
    ])

    const selection = ref([1, 2, 3, 4, 5, 6])
</script>

<style lang="scss">
    .v-home {
    }
</style>
