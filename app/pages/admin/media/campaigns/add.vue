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
      <h2>Add New Campaign</h2>
      <form>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="property">
            </div>
            <div class="input">
              <label for="name">Campaign Name</label>            
              <input type="text" id="name" placeholder="Enter Campaign Name" />                 
            </div>
          </div>
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/goal.png" alt="location">
            </div>
            <div class="input">
              <label for="objective">Objective</label>
              <input type="text" id="objective" placeholder="Enter Campaign Objective" />            
            </div>
          </div>       
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/status.png" alt="use">
            </div>
            <div class="input">
              <label for="status">Campaign Status</label>
              <select id="status" v-model="status">
                <option value="draft">Draft</option>
                <option value="planned">Planned</option>
                <option value="active">Active</option>
                <option value="paused">Paused</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>                              
            </div>
          </div>
          
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/construction.png" alt="use">
            </div>
            <div class="input">
              <label for="type">Campaign Type</label>
              <select id="type" v-model="type">
                <option value="promotional">Promotional</option>
                <option value="editorial">Editorial</option>
              </select>                              
            </div>
          </div> 
        </div>


        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/calendar.png" alt="type">
            </div>
            <div class="input">
              <label for="start_date">Start Date</label>            
              <input type="date" id="start_date" placeholder="Enter Start Date" />              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/calendar.png" alt="type">
            </div>
            <div class="input">
              <label for="end_date">End Date</label>            
              <input type="date" id="end_date" placeholder="Enter End Date" />              
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/city.png" alt="use">
            </div>
            <div class="input">
              <label for="use">Related Property</label>            
              <input type="number" id="use" placeholder="Enter Related Property" />
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/price-tag.png" alt="size">
            </div>
            <div class="input">
              <label for="budget_estimate">Budget Estimate</label>            
              <input type="number" id="budget_estimate" placeholder="Enter Budget Estimate" />              
            </div>
          </div>
        </div>

        <h3>Documents</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/upload.png" alt="size">
            </div>
            <div class="input">
              <label for="document">Documents</label>            
              <input type="file" id="document" placeholder="Enter Campaign Documents" />              
            </div>
          </div>
        </div>

        <h3>Channels</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/email.png" alt="size">
            </div>
            <div class="input">
              <label for="channels">Channels</label>            
              <input type="text" id="channels" placeholder="Enter Campaign Channels" />              
            </div>
          </div>         
        </div>

        <div class="buttons">
          <button class="primary" type="submit">Add Campaign</button>  
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
