export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()

  // Routes that require authentication
  const protectedRoutes = ['/admin', '/agent']
  
  const isProtectedRoute = protectedRoutes.some(route => to.path.startsWith(route))

  if (isProtectedRoute && !authStore.isAuthenticated) {
    return navigateTo('/logIn')
  }

  // Role-based access control
  if (to.path.startsWith('/admin')) {
    if (!authStore.isDashboardUser) {
      return navigateTo('/properties')
    }
  }

  if (to.path.startsWith('/agent')) {
    if (!authStore.isBroker) {
      return navigateTo('/properties')
    }
  }
})
