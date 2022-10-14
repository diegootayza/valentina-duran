<template>
    <router-link class="c-person" :to="{ name: 'home' }">
        <div class="c-person__image">
            <img alt="person" src="/images/person1.jpg" />
        </div>
        <div class="c-person__caption">
            <span>Melissa Utiuc</span>
        </div>
        <div class="c-person__description">
            <span class="d-block text-center"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsam dolorum distinctio! Esse doloremque veritatis cumque ipsum doloribus,
                unde illo veniam enim natus perspiciatis consequuntur, tempora eligendi blanditiis voluptatem accusantium.</span
            >
        </div>
        <div class="c-person__social">
            <!-- <a href="https://www.instagram.com/valeduran_r">IG</a> -->
        </div>
    </router-link>
    <r-modal />
</template>

<script setup lang="ts">
    import RModal from '@/components/RModal.vue'
</script>

<style lang="scss">
    .c-person {
        text-decoration: none;

        &__image {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            > img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }

        &__caption {
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--bs-black);
        }
    }
</style>
