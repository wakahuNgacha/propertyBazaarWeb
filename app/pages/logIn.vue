<script setup>

const config = useRuntimeConfig()

const phone = ref('')
const email = ref('')
const password = ref('')

const loading = ref(false)
const error = ref('')


const submitForm = async () => {
  loading.value = true
  error.value = ''

  try {
    const payload = {
      phone: phone.value,
      email: email.value,
      password: password.value,
    }

    await $fetch(`${config.public.apiBase}/users/create/`, {
      method: 'POST',
      body: payload,
    })

    navigateTo('/properties')
  } catch (err) {
    error.value = JSON.stringify(err.data) || 'Something went wrong'
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


                    <div class="buttons">
                        <button class="primary" type="submit" >Sign up</button>  
                        <button class="secondary" type="button">Cancel</button>        
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
</style>