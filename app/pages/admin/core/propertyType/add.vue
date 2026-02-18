<script setup>
import { useAuthFetch } from '~/composables/useAuthFetch'
const { fetchWithAuth } = useAuthFetch()

definePageMeta({
  layout: 'admin',
})
const { goBack } = usePreviousWindow()

const name = ref('')
const description = ref('')

const loading = ref(false)
const error = ref('')

const submitForm = async () => {
  loading.value = true
  error.value = ''

  try {
    const payload = {
      name: name.value,
      description: description.value,
    }

    await fetchWithAuth('/property-types/create/', {
      method: 'POST',
      body: payload,
    })

    navigateTo('/admin/core')
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
      <h2>Add New Property Type</h2>
      <form @submit.prevent="submitForm">
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="price">
            </div>
            <div class="input">
              <label for="name"> Name</label>            
              <input type="text" id="name" placeholder="Enter Channel Name" v-model="name" />               
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="price">
            </div>
            <div class="input">
              <label for="description">Description</label>            
              <input type="text" id="description" placeholder="Enter Description" v-model="description" />               
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="primary" type="submit">Add Property Type</button>  
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
