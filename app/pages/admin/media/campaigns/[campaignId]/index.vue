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
      <div class="search">
        <div class="form_holder">
          <input type="text" placeholder="Search properties..." />            
        </div>
        <div class="add">
          <NuxtLink to="/admin/media/campaigns/1/content/add" class="primary">Add Content</NuxtLink>
        </div>
      </div>
      <div class="full">
          <div class="property_details">
              <div class="images">
                  <div class="main">
                      <img src="/pexels-heyho-7031607.jpg" alt="main image">
                  </div>
              </div>
              <div class="property_description">
                  <div class="title">
                      <h2>Luxury Family Home</h2>
                  </div>
                  <div class="location">
                      <p>Nairobi, Kenya</p>
                  </div>
                  <div class="price">
                      <h3>$500,000</h3>
                  </div>
                  <div class="features">
                      <div class="icon_holder feature" v-for="i in 5">
                          <img class="icon" src="/bath.png" alt="">
                          <p class="subtitle">5 Baths</p>
                      </div>
                  </div>
                  <div class="details">
                      <h3>Property details</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae, unde ab tempora mollitia sequi tempore consequuntur saepe, officia quidem, incidunt ipsam voluptate quos hic. Incidunt nostrum velit ea! Laboriosam.</p>

                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae, unde ab tempora mollitia sequi tempore consequuntur saepe, officia quidem, incidunt ipsam voluptate quos hic. Incidunt nostrum velit ea! Laboriosam.</p>
                  </div>
              </div>

              <div class="location">
                  <h3>Location</h3>
                  <div class="map">
                      <img src="" alt="map">
                  </div>
              </div>

              <div class="more">
                  <h3>Interior Details</h3>
                  <div class="more_details">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae, unde ab tempora mollitia sequi tempore consequuntur saepe, officia quidem, incidunt ipsam voluptate quos hic. Incidunt nostrum velit ea! Laboriosam.</p>
                  </div>
              </div>

              <div class="properties">
                  <h3>Campaign content</h3>
                  <p>Similar properties that compare in price, location, and features to this property</p>
                  <div class="property_list">
                      <div class="property_holder" v-for="i in 3">
                          <ContentComponent/>                
                      </div>
                  </div>
              </div>

          </div>
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
      padding-top: 2px;
      padding-bottom: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
    .left{
      display: flex;
      gap: 10px;
    }
    .full{
      display: flex;
      gap: 20px;
      width: 100%;
    }
    .property_details{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .contact{
      border: 1px solid var(--input-border);
      border-radius: 10px;
      height: fit-content;
      padding: 20px;
      width: 30%;
      height: fit-content;
    }
    .images .main img{
      width: 100%;
      border-radius: 10px;
    }
    .contacts{
      display: flex;
      /* align-items: center; */
      gap: 20px;
      margin-top: 20px;
      padding: 10px;
      border: 1px solid var(--input-border);
      border-radius: 8px;
    }
    .contacts img{
      padding-top: 10px;
      padding-left: 10px;
    }
    .icon_holder{
      display: flex;
      width: fit-content;
      /* background-color: aqua; */
      justify-content: center;
      align-items: center;
    }
    .icon{
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(5, 1fr); 
      /* Space between your icons */
      gap: 5px; 
    }
    .feature{
      display: flex;
      justify-content: start;
      align-items: start;
      flex-direction: column;
      padding-left: 5px;
      padding-right: 5px;
      border-radius: 5px;
    }
    .feature *{
      padding-left: 5px;
    }
    .more{
      background-color: var(--input-bg);
      padding: 20px;
      border-radius: 10px;
      border: 1px solid var(--input-border);
    }
    .properties{
      width: 100%;
    }
    .property_list{
      width: 100%;
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    .property_holder{
      flex: 0 0 calc(33.33% - 10px); 
      box-sizing: border-box;
    }
    .primary{
      display: flex;
      align-items: center;
      height: fit-content;
    }
    .search{
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* margin-bottom: 30px; */
    }
    .form_holder{
        margin-top: 20px;
        margin-bottom: 20px;
        width: 50%;
        height: 50px;
        padding-left: 20px;
    }
    .form_holder input{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        padding-left: 10px;
        font-size: 16px;
    }
</style>
