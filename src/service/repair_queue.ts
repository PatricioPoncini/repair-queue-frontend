import axios from 'axios'

const repairQueueBack = axios.create({
  baseURL: import.meta.env.VITE_REPAIR_QUEUE_API,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const repairQueueApi = {
  async login(userName: string, password: string) {
    return await repairQueueBack.post<{ token: string }>('/login', { userName, password })
  }
}
