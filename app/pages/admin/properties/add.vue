<script setup>
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
const price = ref()
const negotiable = ref()
const property_status = ref()
const title_type = ref()
const title_status = ref()

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
      property_type: property_type.value,
      property_use: property_use.value,
      property_mode: property_mode.value,
      price: price.value,
      negotiable: negotiable.value,
      property_status: property_status.value,
      title_type: title_type.value,
      title_status: title_status.value
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
      <form>
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
              <label for="location">Address</label>
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
              <label for="town">Location Pin</label>
              <input type="text" id="location_pin" placeholder="Enter the location pin" v-model="town"/>            
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="location">
            </div>
            <div class="input">
              <label for="local_area">Local Area</label>
              <input type="text" id="local_area" placeholder="Local Area" v-model="town"/>            
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
              <label for="use">Property Use</label>            
              <select id="property_type" v-model="property_type">
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
              <label for="title_status">Plot Size</label>
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
              <label for="number_of_floors">Beds</label>
              <input type="number" id="number_of_floors" placeholder="Number of Beds" v-model="number_of_floors" />                 
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bath.png" alt="use">
            </div>
            <div class="input">
              <label for="number_of_floors">Bathrooms</label>
              <input type="number" id="number_of_floors" placeholder="Number of Bathrooms" v-model="number_of_floors" />                 
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/car.png" alt="use">
            </div>
            <div class="input">
              <label for="parking_spaces">Parking Space</label>
              <input type="number" id="parking_spaces" placeholder="Parking Space" v-model="year_build" />                 
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
              <label>Total Units</label>
              <input type="number" name="total_units" required>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/construction1.png" alt="ongoing">
            </div>
            <div class="input">
              <label>Ongoing Units</label>
              <input type="number" name="ongoing_units" value="0">
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/city.png" alt="available">
            </div>
            <div class="input">
              <label>Available Units</label>
              <input type="number" name="available_units" value="0">
            </div>
          </div>
        </div>
        
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/calendar.png" alt="start date">
            </div>
            <div class="input">
              <label>Start Date</label>
              <input type="date" name="start_date" required>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/calendar.png" alt="expected completion">
            </div>
            <div class="input">
              <label>Expected Completion Date</label>
              <input type="date" name="expected_completion_date" required>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/payment.png" alt="payment plan">
            </div>
            <div class="input checkbox">
              <label>
                <input type="checkbox" name="payment_plans_availability">
                Payment Plans Available
              </label>
            </div>
          </div>
        </div>


        <h3>Media</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/photos.png" alt="use">
            </div>
            <div class="input">
              <label for="title_status">Images</label>
              <input type="file" name="images" id="images">
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/video.png" alt="use">
            </div>
            <div class="input">
              <label for="title_status">Video</label>
              <input type="file" name="videos" id="videos">
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/document.png" alt="use">
            </div>
            <div class="input">
              <label for="title_status">Documents</label>
              <input type="file" name="documents" id="documents">
            </div>
          </div>
        </div>

        <h3>Amenities</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/church.png" alt="price">
            </div>
            <div class="input">
              <label for="amenities">Add Amenities</label>            
              <input type="text" id="amenities" placeholder="Enter Amenities" v-model="price" />               
            </div>
          </div>
        </div>

        <h3>Features</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bath.png" alt="price">
            </div>
            <div class="input">
              <label for="features">Add Features</label>            
              <input type="text" id="features" placeholder="Enter Features" v-model="price" />               
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="primary" type="submit">Add Property</button>  
          <button class="secondary">Cancel</button>        
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
