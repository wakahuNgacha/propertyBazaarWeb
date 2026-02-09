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
  isAuthenticated: boolean
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    accessToken: null,
    refreshToken: null,
    user: null,
    isAuthenticated: false,
  }),

  getters: {
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
      this.isAuthenticated = true
      
      // Store in localStorage for persistence
      if (import.meta.client) {
        localStorage.setItem('authStore', JSON.stringify({
          accessToken,
          refreshToken,
          user,
          isAuthenticated: true
        }))
      }
    },

    clearAuth() {
      this.accessToken = null
      this.refreshToken = null
      this.user = null
      this.isAuthenticated = false
      
      // Clear from localStorage
      if (import.meta.client) {
        localStorage.removeItem('authStore')
      }
    },

    // Restore auth state from localStorage on app load
    restoreAuth() {
      if (import.meta.client) {
        const stored = localStorage.getItem('authStore')
        if (stored) {
          try {
            const { accessToken, refreshToken, user, isAuthenticated } = JSON.parse(stored)
            this.accessToken = accessToken
            this.refreshToken = refreshToken
            this.user = user
            this.isAuthenticated = isAuthenticated
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
