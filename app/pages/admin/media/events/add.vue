<script setup>
import { useAuthFetch } from '~/composables/useAuthFetch'
const { fetchWithAuth } = useAuthFetch()

definePageMeta({
  layout: 'admin',
})
const { goBack } = usePreviousWindow()

const campaign = ref('')
const name = ref('')
const description = ref('')
const location = ref('')
const eventDate = ref('')
const attendees = ref('')

const loading = ref(false)
const error = ref('')

const submitForm = async () => {
  loading.value = true
  error.value = ''

  try {
    const payload = {
      campaign: campaign.value,
      name: name.value,
      description: description.value,
      location: location.value,
      event_date: eventDate.value,
      attendees: attendees.value,
    }

    await fetchWithAuth('/events/create/', {
      method: 'POST',
      body: payload,
    })

    navigateTo('/admin/media/events')
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
      <h2>Add New Events</h2>
      <form @submit.prevent="submitForm">
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="property">
            </div>
            <div class="input">
              <label for="campaign">Campaign Name</label>            
              <input type="text" id="campaign" placeholder="Enter Campaign Name" v-model="campaign" />                 
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="location">
            </div>
            <div class="input">
              <label for="name">Event Name</label>
              <input type="text" id="name" placeholder="Enter Event Name" v-model="name" />            
            </div>
          </div>       
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="property">
            </div>
            <div class="input">
              <label for="description">Description</label>            
              <input type="text" id="description" placeholder="Enter Events Description" v-model="description" />                 
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="property">
            </div>
            <div class="input">
              <label for="location">Location</label>            
              <input type="text" id="location" placeholder="Enter Event Location" v-model="location" />                 
            </div>
          </div>
        </div>


        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/calendar.png" alt="type">
            </div>
            <div class="input">
              <label for="event_date">Event Date</label>            
              <input type="date" id="event_date" placeholder="Enter Event Date" v-model="eventDate" />              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/group.png" alt="type">
            </div>
            <div class="input">
              <label for="attendees">Attendees</label>            
              <input type="number" id="attendees" placeholder="Enter Event Attendees" v-model="attendees" />              
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="primary" type="submit">Add Campaign</button>  
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
