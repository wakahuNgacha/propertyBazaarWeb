import { useAuthStore } from '~/stores/authStore'
import type { User } from '~/stores/authStore'

interface LoginResponse {
  access_token: string
  refresh_token: string
  user: User
}

export const useAuth = () => {
  const authStore = useAuthStore()
  const config = useRuntimeConfig()

  const login = async (phone: string, email: string, password: string) => {
    try {
      const response = await $fetch<LoginResponse>(`${config.public.apiBase}/users/login/`, {
        method: 'POST',
        body: {
          phone,
          email,
          password,
        },
      })

      if (response && response.access_token && response.user) {
        authStore.setAuth(response.access_token, response.refresh_token, response.user)
        return {
          success: true,
          redirectTo: authStore.getRouteFromRole(response.user.role),
          user: response.user,
        }
      }

      return {
        success: false,
        error: 'Invalid response from server',
      }
    } catch (error: any) {
      return {
        success: false,
        error: error.data?.message || error.message || 'Login failed',
      }
    }
  }

  const logout = () => {
    authStore.clearAuth()
  }

  const isAuthenticated = (): boolean => {
    return authStore.isAuthenticated
  }

  const getUser = () => {
    return authStore.user
  }

  const getAccessToken = () => {
    return authStore.accessToken
  }

  return {
    login,
    logout,
    isAuthenticated,
    getUser,
    getAccessToken,
  }
}
