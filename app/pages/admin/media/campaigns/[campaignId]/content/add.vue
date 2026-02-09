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
      <h2>Add New Content</h2>
      <form>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/status.png" alt="use">
            </div>
            <div class="input">
              <label for="content_type">Content Type</label>
              <select id="content_type" v-model="content_type">
                <option value="blog">Blog</option>
                <option value="video">Video</option>
                <option value="infographic">Infographic</option>
              </select>                              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/title.png" alt="location">
            </div>
            <div class="input">
              <label for="title">title</label>
              <input type="text" id="title" placeholder="Enter Content Title" />            
            </div>
          </div>          
        </div>

        <div class="form_group">

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="price">
            </div>
            <div class="input">
              <label for="summary">Summary</label>            
              <input type="text" id="summary" placeholder="Enter Content Summary" />               
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
              <img class="icon" src="/status.png" alt="use">
            </div>
            <div class="input">
              <label for="featured">Features</label>
              <select id="featured" v-model="featured">
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>                              
            </div>
          </div>     
        </div>

        <h3>Blogs</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/details.png" alt="use">
            </div>
            <div class="input">
              <label for="body">Body</label>
              <textarea name="body" id="body" placeholder="Enter Blogs body"> </textarea>
            </div>
          </div>
        </div>

        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/writing.png" alt="size">
            </div>
            <div class="input">
              <label for="author">Author</label>            
              <input type="text" id="author" placeholder="Enter Author Name" />              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/clock.png" alt="size">
            </div>
            <div class="input">
              <label for="reading_time">Reading Time</label>            
              <input type="number" id="reading_time" placeholder="Enter Reading Time" />              
            </div>
          </div>
        </div>

        <h3>Video</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/link.png" alt="size">
            </div>
            <div class="input">
              <label for="video_url">Video URL</label>            
              <input type="text" id="video_url" placeholder="Enter Video URL" />              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/clock.png" alt="size">
            </div>
            <div class="input">
              <label for="duration">Duration</label>            
              <input type="number" id="duration" placeholder="Enter Duration" />              
            </div>
          </div>
        </div>

        <h3>Channel and Tags</h3>
        <div class="form_group">
          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/tags.png" alt="size">
            </div>
            <div class="input">
              <label for="content_tags">Content Tags</label>            
              <input type="text" id="content_tags" placeholder="Enter Content Tags" />              
            </div>
          </div>

          <div class="form_holder">
            <div class="form-icon">
              <img class="icon" src="/whatsapp.png" alt="size">
            </div>
            <div class="input">
              <label for="channels">Channels</label>            
              <input type="channels" id="channels" placeholder="Enter Channels" />              
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

