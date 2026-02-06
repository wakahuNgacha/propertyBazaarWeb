<script setup>
const config = useRuntimeConfig()

const firstName = ref('')
const secondName = ref('')
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
      first_name: firstName.value,
      last_name: secondName.value,
      phone: phone.value,
      email: email.value,
      password: password.value,
      role: 'agent',
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
                <h2>Get your Real Estate Agent page</h2>
                <p>Manage your properties better and have more leads with us</p>

                <form @submit.prevent="submitForm">
                    <div class="form_group">
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/avatar.png" alt="property">
                            </div>
                            <div class="input">
                            <label for="firstName">First Name</label>            
                            <input type="text" id="firstName" placeholder="Enter your first name" v-model="firstName" />                 
                            </div>
                        </div>
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/avatar.png" alt="location">
                            </div>
                            <div class="input">
                            <label for="secondName">Second Name</label>
                            <input type="text" id="secondName" placeholder="Enter your Second name" v-model="secondName" />            
                            </div>
                        </div>          
                    </div>

                    <div class="form_group">
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/call.png" alt="price">
                            </div>
                            <div class="input">
                            <label for="phone">Phone</label>            
                            <input type="phone" id="phone" placeholder="your phone number" v-model="phone" />               
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
                            <input type="password" id="password" placeholder="Enter a 6 character password" v-model="password" />
                            </div>
                        </div>
                    </div>


                    <div class="buttons">
                        <button class="primary" type="submit">Create your page</button>  
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
