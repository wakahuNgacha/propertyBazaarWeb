<script setup>
definePageMeta({
  layout: 'agents',
})
</script>

<template>
  <div class="container">
    <div class="controllers">
      <div class="right">
          <button class="secondary">
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
              <img class="icon" src="/email.png" alt="property">
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
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/email.png" alt="price">
            </div>
            <div class="input">
              <label for="price">Price</label>            
              <input type="number" id="price" placeholder="Enter property price" />               
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/email.png" alt="type">
            </div>
            <div class="input">
              <label for="type">Property Type</label>            
              <input type="text" id="type" placeholder="Enter property type" />              
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/email.png" alt="use">
            </div>
            <div class="input">
              <label for="use">Property Use</label>            
              <input type="text" id="use" placeholder="Enter property use" />
            </div>
          </div>
        </div>

        <div class="form_group">
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
      border: 1px solid var(--input-border);
      border-radius: 10px;
      padding: 40px;
      /* background-color: aqua; */
  }

  .form_holder{
      display: flex;
      gap: 20px;
      align-items: center;
      height: 100%;
  }
</style>
