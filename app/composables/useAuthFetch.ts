/**
 * Utility function to make authenticated API calls with access token
 */
export const useAuthFetch = () => {
  const config = useRuntimeConfig()
  const authStore = useAuthStore()

  const fetchWithAuth = async (endpoint: string, options: any = {}) => {



    const headers = {
      ...options.headers,
      'Authorization': `Bearer ${authStore.accessToken}`
    }

    try {
      const response = await $fetch(`${config.public.apiBase}${endpoint}`, {
        ...options,
        headers
      })
      return response
      
    } catch (error: any) {
      // Handle 401 (token expired) by logging out
      if (error.status === 401) {
        authStore.clearAuth()
        navigateTo('/logIn')
      }
      throw error
    }
  }

  return {
    fetchWithAuth
  }
}
