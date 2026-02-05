<script setup>

</script>

<template>
    <div class="full">
        <div class="why">
            <div class="text">
                <h1>Why Sell With Property Bazaar?</h1>
                <p>We offer a seamless and efficient selling experience, connecting you with a vast network of potential buyers. Our platform provides comprehensive tools and resources to help you market your property effectively, ensuring you get the best value for your sale.</p>                
            </div>
            <div class="video">
                <video width="600" controls>
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>

        <div class="form">
            <h1>Sell Your Property</h1>
            <p>Get hundreds of Leads with our advanced marketing tools.</p>
            <form>
                <div class="form_group">
                <div class="form_holder">
                    <div class="form-icon">
                    <img class="icon" src="/title.png" alt="property">
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
                    <img class="icon" src="/price-tag.png" alt="price">
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
                    <img class="icon" src="/city.png" alt="type">
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
                    <img class="icon" src="/land-use.png" alt="use">
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

    <div class="full second">
        <div class="what_you_get">
            <div class="text">
                <h1>What You Get</h1>
                <p>By listing your property with Property Bazaar, you gain access to a wide audience of potential buyers, advanced marketing tools, and dedicated support from our team. We help you showcase your property in the best light, increasing visibility and attracting serious inquiries.</p>
            </div>
            <div class="video">
                <video width="600" controls>
                    <source src="" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>        
    </div>

    <div class="full">
        <div class="how_we_work">
            <h1>How We Work</h1>
            <p>Our process is designed to make selling your property straightforward and stress-free. From listing to closing, we provide step-by-step guidance, marketing support, and access to a network of qualified buyers. Our team is here to assist you at every stage, ensuring a smooth transaction.</p>
            <div class="stages">
                <div class="stage">
                    <div class="image">
                        <img src="" alt="">
                    </div>
                    <div class="stage_text">

                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<style scoped>
    .full{
        margin-left: 20px;
        margin-right: 20px;
        padding: 40px;
        background-color: var(--input-bg);
        color: var(--text-dark);
    }
    .why{
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }
    .text{
        width: 45%;
        height: 100%;

    }
    .video{
        
    }
    .video video{
        border-radius: 10px;
        height: 300px;
        width: 500px;
    }
    .form{
        margin-top: 50px;
        padding: 20px;
    }
    .second{
        margin-top: 10px;
        background-color: var(--white);
    }
    .what_you_get{
        display: flex;
        justify-content: space-between;
        gap: 20px;
    }
    .how_we_work{
        /* text-align: center; */
    }
    .stages{
        /* background-color: aquamarine; */
        display: flex;
        /* justify-content: center; */
        gap: 20px;
        margin-top: 30px;
    }
    .stage{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 200px;
        height: 200px;
        background-color: var(--white);
        border-radius: 5px;
    }
    .stage .image{
        width: 100%;
        height: 70px;
        border-radius: 10px;
    }
    .stage .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>
