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
    '/properties',
    '/properties/',
    '/'
  ]

  if (
    publicRoutes.includes(to.path) ||
    to.path.startsWith('/properties/')
  ) {
    return
  }
  // Check if current route is public
  if (publicRoutes.includes(to.path)) {
    return
  }

  // Everything else requires authentication
  if (!authStore.user) {
    return navigateTo(`/logIn?next=${encodeURIComponent(to.fullPath)}`)
  }
})
