export default defineEventHandler(async (event) => {
  try {
    // Get auth token from request headers (if using JWT)
    const authHeader = getHeader(event, 'authorization')

    const propertyUses = await $fetch('http://127.0.0.1:8000/api/v1/property-uses/',{
      method: 'GET',
    })

    return propertyUses
  } catch (error: any) {
    console.error('Error fetching property uses:', error)

    throw createError({
      statusCode: error?.response?.status || 500,
      statusMessage:
        error?.response?._data?.detail ||
        'Failed to fetch property uses',
    })
  }
})
