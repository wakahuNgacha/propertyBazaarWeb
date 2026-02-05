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
      <h2>Add New Broker</h2>
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

        <h3>Broker Details</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="property">
            </div>
            <div class="input">
              <label for="license_number">License Number</label>            
              <input type="text" id="license_number" placeholder="Enter License Number" />                 
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/status.png" alt="location">
            </div>
            <div class="input">
              <label for="broker_type">Broker Type</label>
              <select id="broker_type" v-model="broker_type">
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
              <img class="icon" src="/clock.png" alt="type">
            </div>
            <div class="input">
              <label for="years_of_experience">Years of Experience</label>            
              <input type="number" id="type" placeholder="Enter Years of Experience" />              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/status.png" alt="location">
            </div>
            <div class="input">
              <label for="area_of_expertise">Area of Expertise</label>
              <select id="area_of_expertise" v-model="area_of_expertise">
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
              <img class="icon" src="/location.png" alt="use">
            </div>
            <div class="input">
              <label for="primary_location">Primary Location</label>            
              <input type="text" id="primary_location" placeholder="Enter Primary Location" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/location.png" alt="use">
            </div>
            <div class="input">
              <label for="service_area">Service Area</label>            
              <input type="text" id="service_area" placeholder="Enter Service Area" />
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
              <img class="icon" src="/status.png" alt="location">
            </div>
            <div class="input">
              <label for="verified">Verification Status</label>
              <select id="verified" v-model="verified">
                <option value="true">True</option>
                <option value="false">False</option>
              </select>           
            </div>
          </div>  
        </div>

        <h3>Documents</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/upload.png" alt="use">
            </div>
            <div class="input">
              <label for="relationship_status">Identity Card </label>            
              <input type="file" id="identity_card" placeholder="Upload Identity Card" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/upload.png" alt="use">
            </div>
            <div class="input">
              <label for="kra_pin">Kra Pin </label>            
              <input type="file" id="kra_pin" placeholder="Upload Kra Pin" />
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/upload.png" alt="use">
            </div>
            <div class="input">
              <label for="agreement_document">Agreement Document</label>            
              <input type="file" id="agreement_document" placeholder="Upload Agreement Document" />
            </div>
          </div>
        </div>


        <div class="buttons">
          <button class="primary" type="submit">Add Broker</button>  
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

