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
      <h2>Add New Client</h2>
      <form>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="price">
            </div>
            <div class="input">
              <label for="first_name">First Name</label>            
              <input type="text" id="first_name" placeholder="Enter First Name" />               
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="price">
            </div>
            <div class="input">
              <label for="last_name">Last Name</label>            
              <input type="text" id="last_name" placeholder="Enter Last Name" />               
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
              <input type="phone" id="phone" placeholder="Enter Phone" />            
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/email.png" alt="location">
            </div>
            <div class="input">
              <label for="email">Email</label>
              <input type="email" id="email" placeholder="Enter email" />            
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
              <input type="text" id="preferred_property_type" placeholder="Enter property type" />              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/zoning.png" alt="type">
            </div>
            <div class="input">
              <label for="preferred_use">Property Use</label>            
              <input type="text" id="preferred_use" placeholder="Enter property Use" />              
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
              <input type="text" id="relationship_status" placeholder="Enter Relationship Status" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="use">
            </div>
            <div class="input">
              <label for="location_preference">Location Preference </label>            
              <input type="text" id="location_preference" placeholder="Enter Location Preference" />
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
              <input type="number" id="budget_range_min" placeholder="Enter Budget Range Min" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/price-tag.png" alt="use">
            </div>
            <div class="input">
              <label for="budget_range_max">Budget Range Max </label>            
              <input type="number" id="budget_range_max" placeholder="Enter Budget Range Max" />
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
              <select id="urgency_level" v-model="urgency_level">
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
              <input type="number" id="min_land_size" placeholder="Enter Min Land Size" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/ruler-triangle.png" alt="use">
            </div>
            <div class="input">
              <label for="max_land_size">Max Land Size </label>            
              <input type="number" id="max_land_size" placeholder="Enter Max Land Size" />
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
              <input type="number" id="house_size" placeholder="Enter House Size" />
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
              <input type="number" id="house_bedrooms_min" placeholder="Enter Bedrooms Min" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bed.png" alt="use">
            </div>
            <div class="input">
              <label for="house_bedrooms_max">House Bedrooms Max</label>            
              <input type="number" id="house_bedrooms_max" placeholder="Enter Bedrooms Max" />
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
              <input type="number" id="house_bathroom_min" placeholder="Enter Bathroom Min" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/bath.png" alt="use">
            </div>
            <div class="input">
              <label for="house_bathroom_max">House Bathroom Max</label>            
              <input type="number" id="house_bathroom_max" placeholder="Enter Bathroom Max" />
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
              <select id="conversion_stage" v-model="conversion_stage">
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
              <select id="source_of_lead" v-model="source_of_lead">
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
              <input type="date" id="last_contacted" placeholder="Enter When Last contacted" />
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
              <input type="text" id="notes" placeholder="Enter Notes" />
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="primary" type="submit">Add Client</button>  
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

