<script setup>
import { useAuthFetch } from '~/composables/useAuthFetch'
const { fetchWithAuth } = useAuthFetch()
const authStore = useAuthStore()

definePageMeta({
  layout: 'agents',
})
const { goBack } = usePreviousWindow()

const propertyTypes = ref([])
const propertyModes = ref([])
const propertyStatuses = ref([])
const PropertyUses = ref([])
const zoningInformations = ref([])
const soilTypes = ref([])
const topographyTypes = ref([])
const constructionStatuses = ref([])
const titleTypes = ref([])
const titleStatuses = ref([])

onMounted(async () => {
  propertyTypes.value = await $fetch('/api/property-types/property-types')
  propertyModes.value = await $fetch('/api/property-modes/property-modes')
  propertyStatuses.value = await $fetch('/api/property-status/property-status')
  PropertyUses.value = await $fetch('/api/property-uses/property-uses')
  zoningInformations.value = await $fetch('/api/zoning-information/zoning-information')
  soilTypes.value = await $fetch('/api/soil-types/soil-types')
  topographyTypes.value = await $fetch('/api/topography-types/topography-types')
  constructionStatuses.value = await $fetch('/api/construction-status/construction-status')
  titleTypes.value = await $fetch('/api/title-types/title-types')
  titleStatuses.value = await $fetch('/api/title-status/title-status')

})

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
const land = ref(false)
const plot_size = ref('')
const zoning_information = ref('')
const soil_type = ref('')
const topography = ref('')

// House
const house = ref(false)
const built_up_area = ref('')
const number_of_floors = ref('')
const bedrooms = ref('')
const bathrooms = ref('')
const parking_spaces = ref('')
const year_built = ref('')
const construction_status = ref('')

//Projects
const project = ref(false)
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

watch(property_mode, (newValue) => {
  if (newValue === 'project') {
    project.value = true
  }
})

watch(property_type, (newValue) => {
  console.log('Property type changed to:', newValue.name)
  if (newValue.name === 'land') {
    land.value = true
    house.value = false
  } else if (newValue.name === 'house' || newValue.name === 'apartment') {
    house.value = true
    land.value = false
  }
})

const submitForm = async () => {
  loading.value = true
  error.value = ''

  try {
    const propertyData = new FormData()
    propertyData.append('title_number', title_number.value)
    propertyData.append('title', title.value)
    propertyData.append('slug', title.value.toLowerCase().replace(/\s+/g, '-'))
    propertyData.append('description', description.value)
    propertyData.append('property_type', Number(property_type.value.id))
    propertyData.append('property_use', Number(property_use.value))
    propertyData.append('property_mode', property_mode.value)
    propertyData.append('price', price.value)
    propertyData.append('negotiable', negotiable.value)
    propertyData.append('property_status', property_status.value)
    propertyData.append('title_type', title_type.value)
    propertyData.append('title_status', title_status.value)
    propertyData.append('listed_by',authStore.user?.id)

    let propertyRes
    try {
      propertyRes = await fetchWithAuth('/properties/create/', {
        method: 'POST',
        body: propertyData,
      })
    console.log('Created property with ID:', propertyRes)    
    } catch (err) {
      console.error('Error creating property:', err)
      error.value = 'Failed to create property'
      return
    }
  
    const LocationData = new FormData()
    LocationData.append('address', address.value)
    LocationData.append('country', country)
    LocationData.append('county', county.value)
    LocationData.append('town', town.value)
    LocationData.append('latitude', 0)
    LocationData.append('longitude', 0)
    LocationData.append('location_pin', location_pin.value)
    LocationData.append('local_area', local_area.value)

    let locationRes
    try {
      locationRes = await fetchWithAuth(`/properties/${propertyRes.id}/location/`, {
        method: 'POST',
        body: LocationData,
      })  
    } catch (err) {
      console.error('Error saving location:', err)
      error.value = 'Failed to save property location'
      return
    }

    const LandData = new FormData()
    LandData.append('plot_size', plot_size.value)
    LandData.append('zoning_information', zoning_information.value)
    LandData.append('soil_type', soil_type.value)
    LandData.append('topography', topography.value)

    let LandRes
    if (plot_size.value) {
      try {
        LandRes = await fetchWithAuth(`/properties/${propertyRes.id}/land/`, {
          method: 'POST',
          body: LandData,
        })
      } catch (err) {
        console.error('Error saving land info:', err)
        error.value = 'Failed to save land information'
        return
      }
    }

    const BuildingData = new FormData()
    BuildingData.append('built_up_area', built_up_area.value)
    BuildingData.append('number_of_floors', number_of_floors.value)
    BuildingData.append('bedrooms', bedrooms.value)
    BuildingData.append('bathrooms', bathrooms.value)
    BuildingData.append('parking_spaces', parking_spaces.value)
    BuildingData.append('year_built',year_built.value)
    BuildingData.append('construction_status', construction_status.value)

    let BuildingRes
    if (bedrooms.value) {
      try {
        BuildingRes = await fetchWithAuth(`/properties/${propertyRes.id}/building/`, {
          method: 'POST',
          body: BuildingData,
        })
      } catch (err) {
        console.error('Error saving building info:', err)
        error.value = 'Failed to save building information'
        return
      }
    }

    const ProjectData = new FormData()
    ProjectData.append('total_units', total_units.value)
    ProjectData.append('ongoing_units', ongoing_units.value)
    ProjectData.append('available_units', available_units.value)
    ProjectData.append('start_date', start_date.value)
    ProjectData.append('expected_completion_date', expected_completion_date.value)
    ProjectData.append('payment_plans_availability', payment_plans_availability.value)

    let ProjectRes
    if (total_units.value) {
      try {
        ProjectRes = await fetchWithAuth(
          `/properties/${propertyRes.id}/projects/`,
          {
            method: 'POST',
            body: ProjectData,
          }
        )
      } catch (err) {
        console.error('Error creating project:', err?.data || err)
        error.value = 'Failed to create project'
        return
      }
    }

    if (
      (images.value?.length) ||
      (videos.value?.length) ||
      (documents.value?.length)
    ) {

      // Upload Images
      for (const file of Array.from(images.value || [])) {
        const mediaForm = new FormData()
        mediaForm.append('file', file)
        mediaForm.append('media_type', 'image')

        await fetchWithAuth(`/properties/${propertyRes.id}/media/`, {
          method: 'POST',
          body: mediaForm,
        })
      }

      // Upload Videos
      for (const file of Array.from(videos.value || [])) {
        const mediaForm = new FormData()
        mediaForm.append('file', file)
        mediaForm.append('media_type', 'video')

        await fetchWithAuth(`/properties/${propertyRes.id}/media/`, {
          method: 'POST',
          body: mediaForm,
        })
      }

      // Upload Documents
      for (const file of Array.from(documents.value || [])) {
        const mediaForm = new FormData()
        mediaForm.append('file', file)
        mediaForm.append('media_type', 'document')

        await fetchWithAuth(`/properties/${propertyRes.id}/media/`, {
          method: 'POST',
          body: mediaForm,
        })
      }
    }

    if (features.value?.length) {
      for (const featureId of features.value) {
        try {
          await fetchWithAuth(`/properties/${propertyRes.id}/features/add/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ feature_id: featureId }),
          })
        } catch (err) {
          console.error('Error adding feature:', err, featureId)
          error.value = 'Failed to add one or more features'
          return
        }
      }
    }

    if (amenities.value?.length) {
      for (const amenityId of amenities.value) {
        try {
          await fetchWithAuth(`/properties/${propertyRes.id}/amenities/add/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amenity_id: amenityId }),
          })
        } catch (err) {
          console.error('Error adding amenity:', err, amenityId)
          error.value = 'Failed to add one or more amenities'
          return
        }
      }
    }

    navigateTo('/agent')

  } catch (err) {
    console.error('Unexpected error in submitForm:', err)
    error.value = 'Something went wrong'
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
                <option 
                    v-for="type in propertyTypes"
                    :key="type.name"
                    :value="type"
                >
                  {{ type.name }}
                </option>

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
                <option 
                    v-for="use in PropertyUses"
                    :key="use.name"
                    :value="use.id"
                >
                  {{ use.name }}
                </option>

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
                <option 
                    v-for="status in propertyStatuses"
                    :key="status.name"
                    :value="status.name"
                >
                  {{ status.name }}
                </option>

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
                <option 
                    v-for="mode in propertyModes"
                    :key="mode.name"
                    :value="mode.name"
                >
                  {{ mode.name }}
                </option>
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
              <textarea id="description" placeholder="Enter property Details" v-model="description" ></textarea>
            </div>
          </div>
        </div>

        <div v-if="house">
          <h3>House/ Apartment</h3>
          <div class="form_group">
            <div class="form_holder">
              <div class="form-icon">
                <img class="icon" src="/ruler-triangle.png" alt="use">
              </div>
              <div class="input">
                <label for="built_up_area">Built up area</label>
                <input type="number" id="built_up_area" placeholder="Enter Built Area" v-model="built_up_area" />                 
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
                <label for="year_built">Year Built</label>
                <input type="date" id="year_built" placeholder="Year The Building was built" v-model="year_built" />                 
              </div>
            </div>  

            <div class="form_holder">
              <div class="form-icon">
                <img class="icon" src="/construction.png" alt="use">
              </div>
              <div class="input">
                <label for="construction_status">Construction Status</label>
                <select id="construction_status" v-model="construction_status">
                  <option 
                      v-for="status in constructionStatuses"
                      :key="status.name"
                      :value="status.name"
                  >
                    {{ status.name }}
                  </option>
                </select>                              
              </div>
            </div> 
          </div>
        </div>

        <div class="div" v-if="land">
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
                  <option 
                      v-for="zoning in zoningInformations"
                      :key="zoning.name"
                      :value="zoning.name"
                  >
                    {{ zoning.name }}
                  </option>
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
                  <option 
                      v-for="soil in soilTypes"
                      :key="soil.name"
                      :value="soil.name"
                  >
                    {{ soil.name }}
                  </option>
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
                  <option 
                      v-for="topo in topographyTypes"
                      :key="topo.name"
                      :value="topo.name"
                  >
                    {{ topo.name }}
                  </option>
                </select>                
              </div>
            </div>  
          </div>
        </div>

        <div v-if="project">
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
                <option 
                    v-for="type in titleTypes"
                    :key="type.name"
                    :value="type.name"
                >
                  {{ type.name }}
                </option>
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
                <option 
                    v-for="status in titleStatuses"
                    :key="status.name"
                    :value="status.name"
                >
                  {{ status.name }}
                </option>
              </select>
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
