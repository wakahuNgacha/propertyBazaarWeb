export default defineNuxtPlugin(() => {
  const authStore = useAuthStore()
  
  // Restore authentication state from localStorage on app initialization
  authStore.restoreAuth()
})
