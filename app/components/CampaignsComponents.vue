<script setup>

</script>

<template>
    <NuxtLink to="/admin/media/campaigns/1" class="property">
        <div class="image">
            <img src="/pexels-heyho-7031607.jpg" alt="">
        </div>
        <div class="text">
            <div class="heading">
                <p>November second week marketing campaign</p>
            </div>
            <div class="heading">
                <p>campaign short details</p>
            </div>            

            <div class="icon_holder location">
                <img class="icon" src="/calendar.png" alt="">
                <p>Start: 2/3/26</p>
            </div>
        </div>
        
        <div class="features">
            <div class="icon_holder feature" v-for="i in 5">
                <!-- <img class="icon" src="/bookmark.png" alt=""> -->
                <p class="subtitle">real estate</p>
            </div>
        </div>
    </NuxtLink>
</template>

<style scoped>
    .property{
        width: 100%;
        /* flex: 0 0 calc(33.33% - 10px); */
        margin: 10px;
    }
    .image{
        width: 100%;
        height: auto;
    }
    .image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;
    }
    .text{
        /* background-color: blueviolet; */
    }
    .heading{
        display: flex;
        justify-content: space-between;
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
        grid-template-columns: repeat(4, 1fr); 
        /* Space between your icons */
        gap: 5px; 
    }
    .feature{
        border: 1px, solid, var(--input-border);
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 5px;
    }
    .feature *{
        padding-left: 5px;
    }
</style>
