import { defineStore } from 'pinia'

export interface User {
  id: number
  first_name: string
  last_name: string
  role: 'admin' | 'finance' | 'SalesAndMarketing' | 'broker' | 'buyer' | 'owner'
}

export interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  user: User | null
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: null,
    refreshToken: null,
    user: null,
  }),

  getters: {
    isAuthenticated(): boolean {
      return this.accessToken !== null && this.user !== null
    },
    isAdmin(): boolean {
      return this.user?.role === 'admin'
    },
    isFinance(): boolean {
      return this.user?.role === 'finance'
    },
    isSalesAndMarketing(): boolean {
      return this.user?.role === 'SalesAndMarketing'
    },
    isBroker(): boolean {
      return this.user?.role === 'broker'
    },
    isBuyer(): boolean {
      return this.user?.role === 'buyer'
    },
    isOwner(): boolean {
      return this.user?.role === 'owner'
    },
    isDashboardUser(): boolean {
      return this.user?.role === 'admin' || 
             this.user?.role === 'finance' || 
             this.user?.role === 'SalesAndMarketing'
    },
    userFullName(): string {
      return `${this.user?.first_name} ${this.user?.last_name}`.trim()
    }
  },

  actions: {
    setAuth(accessToken: string, refreshToken: string, user: User) {
      this.accessToken = accessToken
      this.refreshToken = refreshToken
      this.user = user
      
      // Store in localStorage for persistence (client-side only)
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('authStore', JSON.stringify({
            accessToken,
            refreshToken,
            user,
          }))
        } catch (error) {
          console.error('Failed to store auth state', error)
        }
      }
    },

    clearAuth() {
      this.accessToken = null
      this.refreshToken = null
      this.user = null
      
      // Clear from localStorage (client-side only)
      if (typeof window !== 'undefined') {
        try {
          localStorage.removeItem('authStore')
        } catch (error) {
          console.error('Failed to clear auth state', error)
        }
      }
    },

    // Restore auth state from localStorage on app load
    restoreAuth() {
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('authStore')
        if (stored) {
          try {
            const { accessToken, refreshToken, user } = JSON.parse(stored)
            this.accessToken = accessToken
            this.refreshToken = refreshToken
            this.user = user
          } catch (error) {
            console.error('Failed to restore auth state', error)
            this.clearAuth()
          }
        }
      }
    },

    getRouteFromRole(role: string): string {
      switch (role) {
        case 'admin':
        case 'finance':
        case 'SalesAndMarketing':
          return '/admin'
        case 'broker':
          return '/agent'
        case 'buyer':
        case 'owner':
          return '/properties'
        default:
          return '/'
      }
    }
  }
})
