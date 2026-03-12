export default defineEventHandler(async (event) => {
  try {
    const properties = await $fetch('http://127.0.0.1:8000/api/v1/properties/',{
      method: 'GET',
    })

    return properties
  } catch (error: any) {
    console.error('Error fetching properties:', error)

    throw createError({
      statusCode: error?.response?.status || 500,
      statusMessage:
        error?.response?._data?.detail ||
        'Failed to fetch properties  ',
    })
  }
})