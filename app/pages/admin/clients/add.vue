<script setup>
import { useAuth } from '~/composables/useAuth'
const config = useRuntimeConfig()
const { getAccessToken } = useAuth()

definePageMeta({
  layout: 'admin',
})
const { goBack } = usePreviousWindow()

const firstName = ref('')
const lastName = ref('')
const phone = ref('')
const email = ref('')
const preferredPropertyType = ref('')
const preferredUse = ref('')
const relationshipStatus = ref('')
const locationPreference = ref('')
const budgetRangeMin = ref('')
const budgetRangeMax = ref('')
const urgencyLevel = ref('')
const minLandSize = ref('')
const maxLandSize = ref('')
const houseSize = ref('')
const houseBedroomsMin = ref('')
const houseBedroomsMax = ref('')
const houseBathroomMin = ref('')
const houseBathroomMax = ref('')
const conversionStage = ref('')
const sourceOfLead = ref('')
const lastContacted = ref('')
const notes = ref('')

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
      preferred_property_type: preferredPropertyType.value,
      preferred_use: preferredUse.value,
      relationship_status: relationshipStatus.value,
      location_preference: locationPreference.value,
      budget_range_min: budgetRangeMin.value,
      budget_range_max: budgetRangeMax.value,
      urgency_level: urgencyLevel.value,
      min_land_size: minLandSize.value,
      max_land_size: maxLandSize.value,
      house_size: houseSize.value,
      house_bedrooms_min: houseBedroomsMin.value,
      house_bedrooms_max: houseBedroomsMax.value,
      house_bathroom_min: houseBathroomMin.value,
      house_bathroom_max: houseBathroomMax.value,
      conversion_stage: conversionStage.value,
      source_of_lead: sourceOfLead.value,
      last_contacted: lastContacted.value,
      notes: notes.value,
    }

    const token = getAccessToken()
    await $fetch(`${config.public.apiBase}/clients/create/`, {
      method: 'POST',
      body: payload,
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    })

    navigateTo('/admin/clients')
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
      <h2>Add New Client</h2>
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

        <h3>Client Details</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/city.png" alt="type">
            </div>
            <div class="input">
              <label for="preferred_property_type">Property Type</label>            
              <input type="text" id="preferred_property_type" placeholder="Enter property type" v-model="preferredPropertyType" />              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/zoning.png" alt="type">
            </div>
            <div class="input">
              <label for="preferred_use">Property Use</label>            
              <input type="text" id="preferred_use" placeholder="Enter property Use" v-model="preferredUse" />              
            </div>
          </div>          
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/group.png" alt="use">
            </div>
            <div class="input">
              <label for="relationship_status">Relationship Status </label>            
              <input type="text" id="relationship_status" placeholder="Enter Relationship Status" v-model="relationshipStatus" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="use">
            </div>
            <div class="input">
              <label for="location_preference">Location Preference </label>            
              <input type="text" id="location_preference" placeholder="Enter Location Preference" v-model="locationPreference" />
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/price-tag.png" alt="use">
            </div>
            <div class="input">
              <label for="budget_range_min">Budget Range Min </label>            
              <input type="number" id="budget_range_min" placeholder="Enter Budget Range Min" v-model="budgetRangeMin" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/price-tag.png" alt="use">
            </div>
            <div class="input">
              <label for="budget_range_max">Budget Range Max </label>            
              <input type="number" id="budget_range_max" placeholder="Enter Budget Range Max" v-model="budgetRangeMax" />
            </div>
          </div>
        </div>

<!-- TODO -->
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/status.png" alt="size">
            </div>
            <div class="input">
              <label for="urgency_level">Urgency Level</label>            
              <select id="urgency_level" v-model="urgencyLevel">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>               
            </div>
          </div>
        </div>

        <h3>Land</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/ruler-triangle.png" alt="use">
            </div>
            <div class="input">
              <label for="min_land_size">Min Land Size </label>            
              <input type="number" id="min_land_size" placeholder="Enter Min Land Size" v-model="minLandSize" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/ruler-triangle.png" alt="use">
            </div>
            <div class="input">
              <label for="max_land_size">Max Land Size </label>            
              <input type="number" id="max_land_size" placeholder="Enter Max Land Size" v-model="maxLandSize" />
            </div>
          </div>
        </div>

        <h3>House</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/price-tag.png" alt="use">
            </div>
            <div class="input">
              <label for="house_size">House Size </label>            
              <input type="number" id="house_size" placeholder="Enter House Size" v-model="houseSize" />
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bed.png" alt="use">
            </div>
            <div class="input">
              <label for="house_bedrooms_min">House Bedrooms Min</label>            
              <input type="number" id="house_bedrooms_min" placeholder="Enter Bedrooms Min" v-model="houseBedroomsMin" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bed.png" alt="use">
            </div>
            <div class="input">
              <label for="house_bedrooms_max">House Bedrooms Max</label>            
              <input type="number" id="house_bedrooms_max" placeholder="Enter Bedrooms Max" v-model="houseBedroomsMax" />
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bath.png" alt="use">
            </div>
            <div class="input">
              <label for="house_bathroom_min">House Bathroom Min</label>            
              <input type="number" id="house_bathroom_min" placeholder="Enter Bathroom Min" v-model="houseBathroomMin" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bath.png" alt="use">
            </div>
            <div class="input">
              <label for="house_bathroom_max">House Bathroom Max</label>            
              <input type="number" id="house_bathroom_max" placeholder="Enter Bathroom Max" v-model="houseBathroomMax" />
            </div>
          </div>
        </div>

        <h3>Follow Up</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/status.png" alt="size">
            </div>
            <div class="input">
              <label for="conversion_stage">Conversion Stage</label>            
              <select id="conversion_stage" v-model="conversionStage">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>               
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/whatsapp.png" alt="size">
            </div>
            <div class="input">
              <label for="source_of_lead">Source Of Lead</label>            
              <select id="source_of_lead" v-model="sourceOfLead">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>               
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/call.png" alt="use">
            </div>
            <div class="input">
              <label for="last_contacted">Last Contacted</label>            
              <input type="date" id="last_contacted" placeholder="Enter When Last contacted" v-model="lastContacted" />
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/writing.png" alt="use">
            </div>
            <div class="input">
              <label for="notes">Notes</label>            
              <input type="text" id="notes" placeholder="Enter Notes" v-model="notes" />
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="primary" type="submit">Add Client</button>  
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

