<script setup>
definePageMeta({
  layout: 'admin',
})
</script>

<template>
  <div class="container">
    <div class="search">
      <div class="form_holder">
        <input type="text" placeholder="Search blogs..." />            
      </div>
      <div class="add">
        <NuxtLink to="/admin/blogs/add" class="primary">Add Blog</NuxtLink>
      </div>
    </div>
    <div class="container blogs">
        <div class="blog_holder" v-for="i in 6" :key="i">
            <AdminBlogComponent/>
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
  .blogs{
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
  }
  .blog_holder{
      flex: 0 0 calc(33.33% - 10px); 
      box-sizing: border-box;
  }
</style>
