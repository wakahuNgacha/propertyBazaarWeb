import { defineEventHandler, readBody } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const {
    firstName,
    secondName,
    phone,
    email,
    password,
    role
  } = body

  if (!firstName || !secondName || !phone || !email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: 'All fields are required'
    })
  }

  try {
    const response = await $fetch('http://127.0.0.1:8000/api/v1/users/create/', {
      method: 'POST',
      body: {
        first_name: firstName,
        second_name: secondName,
        phone,
        email,
        password,
        role
      }
    })

    return response
  } catch (error: any) {
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error?.message || 'User creation failed'
    })
  }
})

