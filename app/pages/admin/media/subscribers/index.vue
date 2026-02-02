<script setup>
definePageMeta({
  layout: 'admin',
})
const { goBack } = usePreviousWindow()
</script>

<template>
    <div class="full container">
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
            <NuxtLink to="/admin/media/subscribers/add" class="primary">Add Subscriber</NuxtLink>
          </div>
        </div>

        <!-- <div class="sum_search">
            <h2>November week two marketing Campaign</h2>
            <p>Marketing week two</p>
        </div> -->

        <div class="property_row">
            <div class="property_holder" v-for="i in 10">
                <SubscriberComponent/>
            </div>

        </div>        
    </div>

</template>

<style scoped>
    .container{ 
        margin: 20px;
    }
    .filters{
        display: flex;
        margin-top: 50px;
        margin-bottom: 50px;
        gap: 10px;
    }
    .filter{
        border: 1px, solid, var(--input-border);
        border-radius: 5px;
        width: fit-content;
        padding-left: 20px;
        padding-right: 20px;
        min-width: 150px;
    }
    .property_row{
        width: 100%;
        /* background-color: aquamarine; */
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 10px;
        margin-right: 20px;
        margin-right: 20px;
    }
    .property_holder{
        display: flex;
        justify-content: space-between;
        flex: 0 0 calc(49% - 5px); 
        box-sizing: border-box;
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
  .secondary{
      /* padding-top: 2px;
      padding-bottom: 2px; */
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
  }
</style>
