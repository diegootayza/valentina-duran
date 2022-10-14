<template>
    <div class="c-me mb4">
        <router-link class="c-me__link" :to="{ name: 'home' }">
            <img alt="Valentina Duran" src="/images/me.jpg" />
        </router-link>
    </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
    .c-me {
        display: flex;
        align-items: center;
        justify-content: center;

        &__link {
            height: 160px;
            width: 160px;
            display: flex;
            align-items: center;
            justify-content: center;

            > img {
                height: 100%;
                width: 100%;
                display: block;
                border-radius: 50%;
                object-fit: cover;
            }
        }
    }
</style>
