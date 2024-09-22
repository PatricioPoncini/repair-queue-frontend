import { defineStore } from 'pinia'
import { repairQueueApi } from '@/service/repair_queue'
import { useRouter } from 'vue-router'

interface UserState {
  userName: string
  jwt: string
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    userName: '',
    jwt: '' // Maybe save this in the localStorage, like a cookie. If the user refresh the page, this will be deleted
  }),
  actions: {
    async login(userName: string, password: string) {
      try {
        const response = await repairQueueApi.login(userName, password)
        this.jwt = response.data.token
        window.location.href = '/home' // Improve using useRouter from Vue
      } catch (error) {
        console.log(error)
        throw new Error('Error trying to sign in') // Better error handler, consider use 'toast'
      }
    }
  }
})
