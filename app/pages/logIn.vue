<script setup>
const { login } = useAuth()

const phone = ref('')
const email = ref('')
const password = ref('')

const loading = ref(false)
const error = ref('')
const success = ref('')

const submitForm = async () => {
  loading.value = true
  error.value = ''
  success.value = ''

  try {
    const result = await login(phone.value, email.value, password.value)
    
    if (result.success) {
      success.value = `Welcome, ${result.user?.first_name}!`
      
      // Small delay to show success message
      setTimeout(() => {
        navigateTo(result.redirectTo)
      }, 500)
    } else {
      error.value = result.error || 'Login failed. Please try again.'
    }
  } catch (err) {
    error.value = err.message || 'An unexpected error occurred'
  } finally {
    loading.value = false
  }
}
</script>

<template>
    <div class="container">
        <div class="left">
            <div class="form">
                <h2>Welcome Back To Property Bazaar </h2>
                <p>Browse thousands of properties all over the country</p>
                
                <form @submit.prevent="submitForm">

                    <div class="form_group">
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/call.png" alt="price">
                            </div>
                            <div class="input">
                            <label for="phone">Phone</label>            
                            <input type="phone" id="phone" placeholder="your phone number" v-model="phone"/>               
                            </div>
                        </div>
                    </div>

                    <div class="form_group">
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/email.png" alt="type">
                            </div>
                            <div class="input">
                            <label for="email">Email</label>            
                            <input type="email" id="email" placeholder="youremail@gmail.com" v-model="email" />              
                            </div>
                        </div>
                    </div>

                    <div class="form_group">
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/lock.png" alt="use">
                            </div>
                            <div class="input">
                            <label for="password">Password</label>            
                            <input type="password" id="password" placeholder="Enter a 6 character password" v-model="password"/>
                            </div>
                        </div>
                    </div>


                    <div v-if="error" class="error-message">{{ error }}</div>
                    <div v-if="success" class="success-message">{{ success }}</div>

                    <div class="buttons">
                        <button class="primary" type="submit" :disabled="loading">
                            {{ loading ? 'Signing in...' : 'Sign in' }}
                        </button>  
                        <button class="secondary" type="button" @click="$router.back()">Cancel</button>        
                    </div>

                </form>
            </div>
        </div>
        <div class="right">
            <img src="/pexels-pixabay-280229.jpg" alt="">            

        </div>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        margin-left: 40px;
        margin-right: 40px;
    }
    .left{
        width: 50%;
        padding: 10px;
    }

    .right{
        padding: 10px;
        width: 50%;
        /* background-color: blue; */
    }
    .right img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }

    .error-message {
        color: #dc3545;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        border-radius: 4px;
        padding: 12px 16px;
        margin-bottom: 16px;
        font-size: 14px;
    }

    .success-message {
        color: #155724;
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        border-radius: 4px;
        padding: 12px 16px;
        margin-bottom: 16px;
        font-size: 14px;
    }

    .buttons button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
</style>