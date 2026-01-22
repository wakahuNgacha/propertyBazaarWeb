<script setup>
definePageMeta({
  layout: 'admin',
})
const { goBack } = usePreviousWindow()
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
              <input type="text" id="title" placeholder="Enter property title" />                 
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="location">
            </div>
            <div class="input">
              <label for="location">Location</label>
              <input type="text" id="location" placeholder="Enter property location" />            
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/document.png" alt="property">
            </div>
            <div class="input">
              <label for="title_number">Title Number</label>            
              <input type="text" id="title_number" placeholder="Enter property title" />                 
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/price-tag.png" alt="price">
            </div>
            <div class="input">
              <label for="price">Price</label>            
              <input type="number" id="price" placeholder="Enter property price" />               
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="property type">
            </div>
            <div class="input">
              <label for="property_type">Property Type</label>       
              <select id="property_type" v-model="propertyType">
                <option value="homes">Homes</option>
                <option value="apartments">Apartments</option>
                <option value="plots">Plots</option>
                <option value="ranches">Ranches</option>
              </select>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/ruler-triangle.png" alt="size">
            </div>
            <div class="input">
              <label for="size">Size (in sqft)</label>            
              <input type="number" id="size" placeholder="Enter property size" />              
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
              <input type="text" id="property_use" placeholder="Enter property use" />
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
              <img class="icon" src="/details.png" alt="use">
            </div>
            <div class="input">
              <label for="title_type">Title Type</label>       
              <select id="title_type" v-model="titleType">
                <option value="freehold">Freehold</option>
                <option value="leasehold">Leasehold</option>
              </select>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="use">
            </div>
            <div class="input">
              <label for="title_status">Title Status</label>       
              <select id="title_status" v-model="titleStatus">
                <option value="ready">Ready</option>
                <option value="processing">Processing</option>
                <option value="pendingSubdivision">Pending Subdivision</option>
                <option value="leaseRegistered">Lease Registered</option>
              </select>
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="mode">
            </div>
            <div class="input">
              <label for="property_mode">Property Mode</label>       
              <select id="property_mode" v-model="propertyMode">
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
              <textarea id="description" placeholder="Enter property use" ></textarea>           
              <!-- <input type="text" id="description" placeholder="Enter property use" /> -->
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
