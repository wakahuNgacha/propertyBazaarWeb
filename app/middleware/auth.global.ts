export default defineNuxtRouteMiddleware((to, from) => {
  const authStore = useAuthStore()
  // Public routes that don't require authentication
  const publicRoutes = [
    '/logIn',
    '/signUp',
    '/adminSignUp',
    '/agentSignUp',
    '/partnerSignUp',
    '/getStarted',
    '/',
  ]

  // Check if current route is public
  if (publicRoutes.includes(to.path)) {
    return
  }

  // Everything else requires authentication
  if (!authStore.user) {
    return navigateTo(`/logIn?next=${encodeURIComponent(to.fullPath)}`)
  }
})
