export default defineEventHandler(async (event) => {
  try {
    // Get auth token from request headers (if using JWT)

    const propertyTypes = await $fetch('http://127.0.0.1:8000/api/v1/features/',{
      method: 'GET',
    })

    return propertyTypes
  } catch (error: any) {
    console.error('Error fetching features:', error)

    throw createError({
      statusCode: error?.response?.status || 500,
      statusMessage:
        error?.response?._data?.detail ||
        'Failed to fetch features',
    })
  }
})
