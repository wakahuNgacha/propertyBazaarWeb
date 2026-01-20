<script setup>

</script>

<template>
    <div class="container">
        <div class="left">
            <div class="form">
                <h2>Get your Real Estate Agent page</h2>
                <p>Manage your properties better and have more leads with us</p>
                
                <form>
                    <div class="form_group">
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/avatar.png" alt="property">
                            </div>
                            <div class="input">
                            <label for="title">First Name</label>            
                            <input type="text" id="firstName" placeholder="Enter your first name" />                 
                            </div>
                        </div>
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/avatar.png" alt="location">
                            </div>
                            <div class="input">
                            <label for="location">Second Name</label>
                            <input type="text" id="secondName" placeholder="Enter your Second name" />            
                            </div>
                        </div>          
                    </div>

                    <div class="form_group">
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/call.png" alt="price">
                            </div>
                            <div class="input">
                            <label for="price">Phone</label>            
                            <input type="number" id="phone" placeholder="your phone number" />               
                            </div>
                        </div>
                    </div>

                    <div class="form_group">
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/email.png" alt="type">
                            </div>
                            <div class="input">
                            <label for="type">Email</label>            
                            <input type="text" id="type" placeholder="youremail@gmail.com" />              
                            </div>
                        </div>
                    </div>

                    <div class="form_group">
                        <div class="form_holder">
                            <div class="form-icon">
                            <img class="icon" src="/lock.png" alt="use">
                            </div>
                            <div class="input">
                            <label for="use">Password</label>            
                            <input type="password" id="password" placeholder="Enter a 6 character password" />
                            </div>
                        </div>
                    </div>


                    <div class="buttons">
                        <button class="primary" type="submit">Be a partner</button>  
                        <button class="secondary">Cancel</button>        
                    </div>

                </form>
            </div>
        </div>
        <div class="right">
            <img src="/pexels-pixabay-280229.jpg" alt="">            

        </div>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        margin-left: 40px;
        margin-right: 40px;
    }
    .left{
        width: 50%;
        padding: 10px;
    }

    .right{
        padding: 10px;
        width: 50%;
        /* background-color: blue; */
    }
    .right img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
    }
</style>

