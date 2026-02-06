<script setup>
const config = useRuntimeConfig()

definePageMeta({
  layout: 'admin',
})
const { goBack } = usePreviousWindow()

const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const email = ref('')
const position = ref('')
const department = ref('')

const loading = ref(false)
const error = ref('')

const submitForm = async () => {
  loading.value = true
  error.value = ''

  try {
    const payload = {
      first_name: firstName.value,
      last_name: lastName.value,
      phone: phone.value,
      email: email.value,
      position: position.value,
      department: department.value,
    }

    await $fetch(`${config.public.apiBase}/team/create/`, {
      method: 'POST',
      body: payload,
    })

    navigateTo('/admin/team')
  } catch (err) {
    error.value = JSON.stringify(err.data) || 'Something went wrong'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="container">
    <div class="controllers">
      <div class="right">
          <button class="secondary" @click="goBack">
              <img class="icon" src="/back.png" alt="back">
              <p>Back</p>
          </button>
      </div>
      <div class="left">         
      </div>
    </div>
    <div class="form">
      <h2>Add New Team Member</h2>
      <form @submit.prevent="submitForm">
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="price">
            </div>
            <div class="input">
              <label for="first_name">First Name</label>            
              <input type="text" id="first_name" placeholder="Enter First Name" v-model="firstName" />               
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="price">
            </div>
            <div class="input">
              <label for="last_name">Last Name</label>            
              <input type="text" id="last_name" placeholder="Enter Last Name" v-model="lastName" />               
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/call.png" alt="location">
            </div>
            <div class="input">
              <label for="phone">Phone</label>
              <input type="phone" id="phone" placeholder="Enter Phone" v-model="phone" />            
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/email.png" alt="location">
            </div>
            <div class="input">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Enter email" v-model="email" />            
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="property">
            </div>
            <div class="input">
              <label for="position">Position</label>            
              <input type="text" id="position" placeholder="Enter position" v-model="position" />                 
            </div>
          </div>
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/group.png" alt="location">
            </div>
            <div class="input">
              <label for="department">Department</label>
              <input type="text" id="department" placeholder="Enter Department" v-model="department" />            
            </div>
          </div>          
        </div>

        <div class="buttons">
          <button class="primary" type="submit">Add Team Member</button>  
          <button class="secondary" type="button">Cancel</button>        
        </div>

      </form>
    </div>
  </div>

</template>

<style scoped>
  .container{
      margin-left: 40px;
      margin-right: 40px;
  }
  .controllers{
      display: flex;
      justify-content: space-between;
      margin-top: 50px;
      margin-bottom: 50px;
  }
  .secondary{
      /* padding-top: 2px;
      padding-bottom: 2px; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
  }
  .left{
      display: flex;
      gap: 10px;
  }
  .form{
      /* border: 1px solid var(--input-border); */
      border-radius: 10px;
      /* padding: 40px; */
      /* background-color: aqua; */
  }

  .form_holder{
      display: flex;
      gap: 20px;
      align-items: center;
      height: 100%;
  }
</style>
