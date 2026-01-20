<script setup>
definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <div class="container">
    <div class="search">
      <div class="form_holder">
        <input type="text" placeholder="Search properties..." />            
      </div>
      <div class="add">
        <NuxtLink to="/admin/team/add" class="primary">Add team member</NuxtLink>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .container{ 
    margin: 20px;
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
