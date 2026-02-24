export default defineEventHandler(async (event) => {
  try {
    // Get auth token from request headers (if using JWT)
    const authHeader = getHeader(event, 'authorization')

    const propertyTypes = await $fetch('http://127.0.0.1:8000/api/v1/property-types/',{
      method: 'GET',
    })

    return propertyTypes
  } catch (error: any) {
    console.error('Error fetching property types:', error)

    throw createError({
      statusCode: error?.response?.status || 500,
      statusMessage:
        error?.response?._data?.detail ||
        'Failed to fetch property types',
    })
  }
})
