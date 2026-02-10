<script setup>
const config = useRuntimeConfig()

definePageMeta({
  layout: 'admin',
})
const { goBack } = usePreviousWindow()

const title_number = ref('')
const title = ref('')
const description = ref('')
const property_type = ref('')
const property_use = ref('')
const property_mode = ref('')
const price = ref('')
const negotiable = ref('')
const property_status = ref('')
const title_status = ref('')
const title_type = ref('')

const address = ref('')
const country = 'Kenya'
const county = ref('')
const town = ref('')
const location_pin = ref('')
const local_area = ref('')

// Land

const plot_size = ref('')
const zoning_information = ref('')
const soil_type = ref('')
const topography = ref('')

// House

const build_up_area = ref('')
const number_of_floors = ref('')
const bedrooms = ref('')
const bathrooms = ref('')
const parking_spaces = ref('')
const year_build = ref('')
const construction_status = ref('')

//Projects

const total_units = ref('')
const ongoing_units = ref('')
const available_units = ref('')
const start_date = ref('')
const expected_completion_date = ref('')
const payment_plans_availability = ref(false)

//Media

const images = ref(null)
const videos = ref(null)
const documents = ref(null)

//Features and Amenities

const amenities = ref('')
const features = ref('')

const loading = ref(false)
const error = ref('')

const submitForm = async () => {
  loading.value = true
  error.value = ''

  try {
    const payload = {
      title_number: title_number.value,
      title: title.value,
      description: description.value,
      address: address.value,
      county: county.value,
      town: town.value,
      location_pin: location_pin.value,
      local_area: local_area.value,
      property_type: property_type.value,
      property_use: property_use.value,
      property_mode: property_mode.value,
      price: price.value,
      negotiable: negotiable.value,
      property_status: property_status.value,
      title_type: title_type.value,
      title_status: title_status.value,
      plot_size: plot_size.value,
      zoning_information: zoning_information.value,
      soil_type: soil_type.value,
      topography: topography.value,
      build_up_area: build_up_area.value,
      number_of_floors: number_of_floors.value,
      number_of_beds: number_of_beds.value,
      number_of_bathrooms: number_of_bathrooms.value,
      parking_spaces: parking_spaces.value,
      year_build: year_build.value,
      construction_status: construction_status.value,
      total_units: total_units.value,
      ongoing_units: ongoing_units.value,
      available_units: available_units.value,
      start_date: start_date.value,
      expected_completion_date: expected_completion_date.value,
      payment_plans_availability: payment_plans_availability.value,
      amenities: amenities.value,
      features: features.value,
    }

    await $fetch(`${config.public.apiBase}/properties/create/`, {
      method: 'POST',
      body: payload,
    })

    navigateTo('/admin')
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
      <h2>Add New Property</h2>
      <form @submit.prevent="submitForm">
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="property">
            </div>
            <div class="input">
              <label for="title">Property Title</label>            
              <input type="text" id="title" placeholder="Enter property title" v-model="title" />                 
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/document.png" alt="property">
            </div>
            <div class="input">
              <label for="title_number">Title Number</label>            
              <input type="text" id="title_number" placeholder="Enter property title" v-model="title_number" />                 
            </div>
          </div>
        </div>


        <h3>Location</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="location">
            </div>
            <div class="input">
              <label for="address">Address</label>
              <input type="text" id="address" placeholder="Address" v-model="address"/>            
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="location">
            </div>
            <div class="input">
              <label for="county">County</label>
              <input type="text" id="county" placeholder="County" v-model="county"/>            
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="location">
            </div>
            <div class="input">
              <label for="town">Town</label>
              <input type="text" id="town" placeholder="town" v-model="town"/>            
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="location">
            </div>
            <div class="input">
              <label for="location_pin">Location Pin</label>
              <input type="text" id="location_pin" placeholder="Enter the location pin" v-model="location_pin"/>            
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="location">
            </div>
            <div class="input">
              <label for="local_area">Local Area</label>
              <input type="text" id="local_area" placeholder="Local Area" v-model="local_area"/>            
            </div>
          </div>
        </div>

        <h3>Property Details</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/price-tag.png" alt="price">
            </div>
            <div class="input">
              <label for="price">Price</label>            
              <input type="number" id="price" placeholder="Enter property price" v-model="price" />               
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="property type">
            </div>
            <div class="input">
              <label for="property_type">Property Type</label>       
              <select id="property_type" v-model="property_type">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>
            </div>
          </div>
        </div>


        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/property-use.png" alt="use">
            </div>
            <div class="input">
              <label for="property_use">Property Use</label>            
              <select id="property_use" v-model="property_use">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="property type">
            </div>
            <div class="input">
              <label for="property_status">Property Status</label>       
              <select id="property_status" v-model="property_status">
                <option value="available">Available</option>
                <option value="underOffer">Under Offer</option>
                <option value="pendingMedia">Pending Media</option>
                <option value="sold">Sold</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </div>          
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="use">
            </div>
            <div class="input">
              <label for="negotiable">Negotiable</label>       
              <select id="negotiable" v-model="negotiable">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="mode">
            </div>
            <div class="input">
              <label for="property_mode">Property Mode</label>       
              <select id="property_mode" v-model="property_mode">
                <option value="single">Single</option>
                <option value="project">Project</option>
                <option value="offPlan">Off Plan</option>
              </select>
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="use">
            </div>
            <div class="input">
              <label for="description">Property Details</label>
              <textarea id="description" placeholder="Enter property use" v-model="description" ></textarea>
            </div>
          </div>
        </div>

        <h3>Title</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/document.png" alt="use">
            </div>
            <div class="input">
              <label for="title_type">Title Type</label>       
              <select id="title_type" v-model="title_type">
                <option value="freehold">Freehold</option>
                <option value="leasehold">Leasehold</option>
              </select>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/document.png" alt="use">
            </div>
            <div class="input">
              <label for="title_status">Title Status</label>       
              <select id="title_status" v-model="title_status">
                <option value="ready">Ready</option>
                <option value="processing">Processing</option>
                <option value="pendingSubdivision">Pending Subdivision</option>
                <option value="leaseRegistered">Lease Registered</option>
              </select>
            </div>
          </div>
        </div>

        <h3>Plot/ Ranches</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/ruler-triangle.png" alt="use">
            </div>
            <div class="input">
              <label for="plot_size">Plot Size</label>
              <input type="number" id="plot_size" placeholder="Enter Plot Size" v-model="plot_size" />                 
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/zoning.png" alt="use">
            </div>
            <div class="input">
              <label for="zoning_information">Zoning Information</label>
              <select id="zoning_information" v-model="zoning_information">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>                              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/land-use.png" alt="use">
            </div>
            <div class="input">
              <label for="soil_type">Soil Type</label>
              <select id="soil_type" v-model="soil_type">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>                
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/topography.png" alt="use">
            </div>
            <div class="input">
              <label for="topography">Topography</label>
              <select id="topography" v-model="topography">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>                
            </div>
          </div>  
        </div>

        <h3>House/ Apartment</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/ruler-triangle.png" alt="use">
            </div>
            <div class="input">
              <label for="build_up_area">Build up area</label>
              <input type="number" id="build_up_area" placeholder="Enter Build Area" v-model="build_up_area" />                 
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/city.png" alt="use">
            </div>
            <div class="input">
              <label for="number_of_floors">Floors</label>
              <input type="number" id="number_of_floors" placeholder="Number of Floors" v-model="number_of_floors" />                 
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bed.png" alt="use">
            </div>
            <div class="input">
              <label for="bedrooms">Beds</label>
              <input type="number" id="bedrooms" placeholder="Number of Beds" v-model="bedrooms" />                 
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bath.png" alt="use">
            </div>
            <div class="input">
              <label for="bathrooms">Bathrooms</label>
              <input type="number" id="bathrooms" placeholder="Number of Bathrooms" v-model="bathrooms" />                 
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/car.png" alt="use">
            </div>
            <div class="input">
              <label for="parking_spaces">Parking Space</label>
              <input type="number" id="parking_spaces" placeholder="Parking Space" v-model="parking_spaces" />                 
            </div>
          </div> 

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/calendar.png" alt="use">
            </div>
            <div class="input">
              <label for="year_build">Year Build</label>
              <input type="number" id="year_build" placeholder="Year The Building was started" v-model="year_build" />                 
            </div>
          </div>  

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/construction.png" alt="use">
            </div>
            <div class="input">
              <label for="construction_status">Construction Status</label>
              <select id="construction_status" v-model="construction_status">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>                              
            </div>
          </div> 
        </div>

        <h3>Projects</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/city.png" alt="units">
            </div>
            <div class="input">
              <label for="total_units">Total Units</label>
              <input type="number" id="total_units" placeholder="" v-model="total_units" required>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/construction1.png" alt="ongoing">
            </div>
            <div class="input">
              <label for="ongoing_units">Ongoing Units</label>
              <input type="number" id="ongoing_units" placeholder="" v-model="ongoing_units">
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/city.png" alt="available">
            </div>
            <div class="input">
              <label for="available_units">Available Units</label>
              <input type="number" id="available_units" placeholder="" v-model="available_units">
            </div>
          </div>
        </div>
        
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/calendar.png" alt="start date">
            </div>
            <div class="input">
              <label for="start_date">Start Date</label>
              <input type="date" id="start_date" placeholder="" v-model="start_date" required>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/calendar.png" alt="expected completion">
            </div>
            <div class="input">
              <label for="expected_completion_date">Expected Completion Date</label>
              <input type="date" id="expected_completion_date" placeholder="" v-model="expected_completion_date" required>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/payment.png" alt="payment plan">
            </div>
            <div class="input checkbox">
              <label>
                <input type="checkbox" id="payment_plans_availability" v-model="payment_plans_availability">
                Payment Plans Available
              </label>
            </div>
          </div>
        </div>


        <h3>Media</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/photos.png" alt="images">
            </div>
            <div class="input">
              <label for="images">Images</label>
              <input type="file" id="images" multiple @change="images = $event.target.files">
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/video.png" alt="videos">
            </div>
            <div class="input">
              <label for="videos">Videos</label>
              <input type="file" id="videos" multiple @change="videos = $event.target.files">
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/document.png" alt="documents">
            </div>
            <div class="input">
              <label for="documents">Documents</label>
              <input type="file" id="documents" @change="documents = $event.target.files">
            </div>
          </div>
        </div>

        <h3>Amenities</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/church.png" alt="amenities">
            </div>
            <div class="input">
              <label for="amenities">Add Amenities</label>            
              <input type="text" id="amenities" placeholder="Enter Amenities" v-model="amenities" />               
            </div>
          </div>
        </div>

        <h3>Features</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bath.png" alt="features">
            </div>
            <div class="input">
              <label for="features">Add Features</label>            
              <input type="text" id="features" placeholder="Enter Features" v-model="features" />               
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="primary" type="submit">Add Property</button>  
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
