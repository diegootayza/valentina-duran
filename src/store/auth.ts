import { defineStore } from 'pinia'

const user = localStorage.getItem('user')

export const useAuthStore = defineStore('AuthStore', {
    state: () => ({
        user: user ? JSON.parse(user) : null,
    }),
    actions: {
        userController(user: any) {
            this.user = user
        },
    },
})
